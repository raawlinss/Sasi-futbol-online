import { clamp, MATCH_DEFAULTS } from '../../shared/protocol/index.js';

function envInt(name, fallback) {
  const parsed = Number.parseInt(process.env[name] ?? `${fallback}`, 10);
  if (!Number.isFinite(parsed)) {
    return fallback;
  }
  return parsed;
}

function envBool(name, fallback) {
  const raw = process.env[name];
  if (raw === undefined) return fallback;
  const normalized = `${raw}`.trim().toLowerCase();
  if (['1', 'true', 'yes', 'on'].includes(normalized)) return true;
  if (['0', 'false', 'no', 'off'].includes(normalized)) return false;
  return fallback;
}

const stabilizationMode = envBool('STABILIZATION_MODE', true);
const replayDefault = true;
const cloudsDefault = stabilizationMode ? false : true;
const atmosphereDefault = stabilizationMode ? false : true;

export const SERVER_CONFIG = Object.freeze({
  host: process.env.HOST || '0.0.0.0',
  port: envInt('PORT', 3000),
  adminNick: process.env.ADMIN_NICK || 'Rawlins',
  adminPassword: process.env.ADMIN_PASSWORD || 'tasak',
  activeCapMin: envInt('ACTIVE_CAP_MIN', MATCH_DEFAULTS.activeCapMin),
  activeCapMax: envInt('ACTIVE_CAP_MAX', MATCH_DEFAULTS.activeCapMax),
  activeCapDefault: envInt('ACTIVE_CAP_DEFAULT', MATCH_DEFAULTS.activeCapCurrent),
  botLimit: envInt('BOT_LIMIT', 8),
  chatRateMs: envInt('CHAT_RATE_MS', 850),
  stabilizationMode,
  enableReplay: envBool('ENABLE_REPLAY', replayDefault),
  enableClouds: envBool('ENABLE_CLOUDS', cloudsDefault),
  enableAtmosphere: envBool('ENABLE_ATMOSPHERE', atmosphereDefault)
});

export const FIELD_CONFIG = Object.freeze({
  halfWidth: 24,
  halfDepth: 39,
  goalHalfWidth: 5,
  goalHeight: 2.44,
  goalAreaDepth: 6,
  keeperZoneDepth: 8,
  keeperZoneWidth: 14,
  groundY: 0.35
});

export const GAMEPLAY_CONFIG = Object.freeze({
  walkSpeed: 17,
  sprintSpeed: 24,
  playerCenterY: 0.92,
  accelGround: 18,
  friction: 10.5,
  rotationSmoothing: 13.5,
  maxTurnRateRad: 6.5,
  sprintDrain: 0.34,
  staminaRefill: 0.12,
  staminaMinSprint: 0.08,
  maxPlayerSpeed: 25,
  playerRadius: 0.52,
  ballRadius: 0.35,
  ballGravity: -26,
  ballDampingAir: 0.997,
  ballDampingGround: 0.986,
  wallRestitution: 0.76,
  wallTangentialFriction: 0.92,
  slideDurationMs: 650,
  slideDecel: 28,
  slideStartBoost: 6.2,
  slideMinStartSpeed: 9,
  slideStopSpeed: 0.25,
  // Slightly more forgiving: makes slide tackles a bit easier to win the ball.
  slideStealRadius: 1.95,
  possessionRadius: 1.15,
  possessionFacingDot: 0.2,
  restartFreezeMs: 1400,
  goalFreezeMs: 260,
  kickoffCountdownMs: 1200,
  keeperCatchRadius: 2.4,
  keeperCatchBonusRadius: 0.4,
  keeperZoneExitGraceMs: 600,
  goalLockMs: 950
});

export const TICK_RATE = MATCH_DEFAULTS.tickRate;
export const SNAPSHOT_RATE = MATCH_DEFAULTS.snapshotRate;
export const DT = 1 / TICK_RATE;
export const TICK_MS = 1000 / TICK_RATE;
export const SNAPSHOT_MS = 1000 / SNAPSHOT_RATE;

export function getInitialCap() {
  const cap = clamp(
    SERVER_CONFIG.activeCapDefault,
    SERVER_CONFIG.activeCapMin,
    SERVER_CONFIG.activeCapMax
  );
  return Math.floor(cap);
}
