export function vec2Length(x, z) {
  return Math.hypot(x, z);
}

export function clampMagnitude2D(x, z, maxLength) {
  const len = vec2Length(x, z);
  if (len <= maxLength || len <= 1e-6) {
    return { x, z, len };
  }

  const s = maxLength / len;
  return {
    x: x * s,
    z: z * s,
    len: maxLength
  };
}

export function shortestAngleDiff(from, to) {
  let diff = to - from;
  while (diff > Math.PI) {
    diff -= Math.PI * 2;
  }
  while (diff < -Math.PI) {
    diff += Math.PI * 2;
  }
  return diff;
}

export function rotateByYaw(x, z, yaw) {
  const s = Math.sin(yaw);
  const c = Math.cos(yaw);
  return {
    x: x * c + z * s,
    z: -x * s + z * c
  };
}

export function cloneVec3(v) {
  return { x: v.x, y: v.y, z: v.z };
}

export function lerp(a, b, t) {
  return a + (b - a) * t;
}

export function clamp(value, min, max) {
  if (!Number.isFinite(value)) {
    return min;
  }
  return Math.max(min, Math.min(max, value));
}

export function randomChoice(arr) {
  if (!arr.length) {
    return null;
  }
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

export function randomFloat(min, max) {
  return min + Math.random() * (max - min);
}
