import { clamp, normalize2D, safeNumber } from '../protocol/index.js';

export const SIM_VERSION = 'movement-core-v2.8';

const EPS = 1e-6;

export function wrapAngle(angle) {
  let out = safeNumber(angle, 0);
  while (out > Math.PI) out -= Math.PI * 2;
  while (out < -Math.PI) out += Math.PI * 2;
  return out;
}

export function shortestAngleDiff(from, to) {
  const fromN = wrapAngle(from);
  const toN = wrapAngle(to);
  let diff = toN - fromN;
  while (diff > Math.PI) diff -= Math.PI * 2;
  while (diff < -Math.PI) diff += Math.PI * 2;
  return diff;
}

export function angleLerpExp(current, target, smoothing, dt) {
  const rate = Math.max(0.01, safeNumber(smoothing, 16));
  const alpha = 1 - Math.exp(-rate * Math.max(0, dt));
  return wrapAngle(current + shortestAngleDiff(current, target) * alpha);
}

export function rotateByYaw(localX, localZ, yaw) {
  const s = Math.sin(yaw);
  const c = Math.cos(yaw);
  // Camera/drive forward is (sin(yaw), cos(yaw)); right is (cos(yaw), -sin(yaw)).
  // Input convention: localX > 0 is "right", localX < 0 is "left".
  // yaw=0 => D moves +X (right), A moves -X (left).
  const rightX = c;
  const rightZ = -s;
  const forwardX = s;
  const forwardZ = c;
  return {
    // NOTE: Some earlier versions had A/D swapped in practice; flipping localX here keeps
    // keyboard + mobile joystick consistent (single source of truth).
    x: (-localX) * rightX + localZ * forwardX,
    z: (-localX) * rightZ + localZ * forwardZ
  };
}

export function clampPlanarSpeed(x, z, maxSpeed) {
  const speed = Math.hypot(x, z);
  if (speed <= maxSpeed || speed <= EPS) {
    return { x, z, speed };
  }
  const scale = maxSpeed / speed;
  return {
    x: x * scale,
    z: z * scale,
    speed: maxSpeed
  };
}

export function stepCharacterMotion(state, input, config, dt) {
  const stepDt = Math.max(0, safeNumber(dt, 0));
  const result = {
    posX: safeNumber(state?.posX, 0),
    posZ: safeNumber(state?.posZ, 0),
    velX: safeNumber(state?.velX, 0),
    velZ: safeNumber(state?.velZ, 0),
    yaw: wrapAngle(state?.yaw),
    stamina: clamp(safeNumber(state?.stamina, 1), 0, 1),
    slideActive: !!state?.slideActive,
    slideDirX: safeNumber(state?.slideDirX, 0),
    slideDirZ: safeNumber(state?.slideDirZ, 1),
    slideSpeed: Math.max(0, safeNumber(state?.slideSpeed, 0))
  };

  const walkSpeed = Math.max(0, safeNumber(config?.walkSpeed, 17));
  const sprintSpeed = Math.max(walkSpeed, safeNumber(config?.sprintSpeed, 24));
  const accelGround = Math.max(0, safeNumber(config?.accelGround, 22));
  const friction = Math.max(0, safeNumber(config?.friction, 12));
  const sprintDrain = Math.max(0, safeNumber(config?.sprintDrain, 0.34));
  const staminaRefill = Math.max(0, safeNumber(config?.staminaRefill, 0.12));
  const staminaMinSprint = clamp(safeNumber(config?.staminaMinSprint, 0.08), 0, 1);
  const maxPlayerSpeed = Math.max(0.1, safeNumber(config?.maxPlayerSpeed, 25));
  const slideDecel = Math.max(0, safeNumber(config?.slideDecel, 28));
  const slideStopSpeed = Math.max(0.05, safeNumber(config?.slideStopSpeed, 0.25));
  const rotationSmoothing = Math.max(0.01, safeNumber(config?.rotationSmoothing, 16));

  if (result.slideActive) {
    const dirNorm = normalize2D(result.slideDirX, result.slideDirZ);
    const dirX = dirNorm.len > EPS ? dirNorm.x : Math.sin(result.yaw);
    const dirZ = dirNorm.len > EPS ? dirNorm.z : Math.cos(result.yaw);
    result.slideDirX = dirX;
    result.slideDirZ = dirZ;

    result.slideSpeed = Math.max(0, result.slideSpeed - slideDecel * stepDt);
    result.velX = dirX * result.slideSpeed;
    result.velZ = dirZ * result.slideSpeed;
    result.yaw = Math.atan2(dirX, dirZ);
    result.stamina = Math.min(1, result.stamina + staminaRefill * stepDt * 0.5);

    if (result.slideSpeed <= slideStopSpeed) {
      result.slideActive = false;
      result.slideSpeed = 0;
      result.velX = 0;
      result.velZ = 0;
    }
  } else {
    const inputNorm = normalize2D(
      clamp(safeNumber(input?.moveX, 0), -1, 1),
      clamp(safeNumber(input?.moveZ, 0), -1, 1)
    );

    const movementMode = typeof input?.movementMode === 'string'
      ? input.movementMode
      : 'basis_yaw';
    const lockedHeading = movementMode === 'locked_heading';
    const headingYaw = wrapAngle(safeNumber(input?.headingYaw, result.yaw));
    const basisYaw = safeNumber(input?.basisYaw, result.yaw);
    const driveYaw = lockedHeading ? headingYaw : basisYaw;
    const worldDir = rotateByYaw(inputNorm.x, inputNorm.z, driveYaw);
    const wantsSprint = !!input?.sprint && inputNorm.len > 0.01 && result.stamina > staminaMinSprint;
    const targetSpeed = wantsSprint ? sprintSpeed : walkSpeed;

    if (wantsSprint) {
      result.stamina = Math.max(0, result.stamina - sprintDrain * stepDt);
    } else {
      result.stamina = Math.min(1, result.stamina + staminaRefill * stepDt);
    }

    const accelAlpha = clamp(accelGround * stepDt, 0, 1);
    const frictionAlpha = clamp(friction * stepDt, 0, 1);

    if (inputNorm.len > 0.01) {
      const desiredVX = worldDir.x * targetSpeed;
      const desiredVZ = worldDir.z * targetSpeed;
      result.velX += (desiredVX - result.velX) * accelAlpha;
      result.velZ += (desiredVZ - result.velZ) * accelAlpha;
    } else {
      result.velX += (0 - result.velX) * frictionAlpha;
      result.velZ += (0 - result.velZ) * frictionAlpha;
    }

    const clamped = clampPlanarSpeed(result.velX, result.velZ, maxPlayerSpeed);
    result.velX = clamped.x;
    result.velZ = clamped.z;

    if (lockedHeading) {
      result.yaw = headingYaw;
    } else if (inputNorm.len > 0.01 && clamped.speed > 0.05) {
      const maxTurnRateRad = Math.max(0.1, safeNumber(config?.maxTurnRateRad, 7.5));
      const maxDelta = maxTurnRateRad * stepDt;
      const targetYaw = Math.atan2(worldDir.x, worldDir.z);
      const desiredYaw = angleLerpExp(result.yaw, targetYaw, rotationSmoothing, stepDt);
      const diff = shortestAngleDiff(result.yaw, desiredYaw);
      if (Math.abs(diff) > maxDelta) {
        result.yaw = wrapAngle(result.yaw + Math.sign(diff) * maxDelta);
      } else {
        result.yaw = desiredYaw;
      }
    }
  }

  result.posX += result.velX * stepDt;
  result.posZ += result.velZ * stepDt;

  const xLimit = safeNumber(config?.xLimit, Number.NaN);
  if (Number.isFinite(xLimit)) {
    if (result.posX > xLimit) {
      result.posX = xLimit;
      result.velX = 0;
    } else if (result.posX < -xLimit) {
      result.posX = -xLimit;
      result.velX = 0;
    }
  }

  const zLimit = safeNumber(config?.zLimit, Number.NaN);
  if (Number.isFinite(zLimit)) {
    if (result.posZ > zLimit) {
      result.posZ = zLimit;
      result.velZ = 0;
    } else if (result.posZ < -zLimit) {
      result.posZ = -zLimit;
      result.velZ = 0;
    }
  }

  return result;
}
