import { clamp } from '../../shared/protocol/index.js';

function roundTo0_1(value) {
  return Math.round(value * 10) / 10;
}

export function computePitchFromMaxActive(maxActive) {
  const capped = clamp(Math.floor(Number(maxActive) || 24), 2, 60);
  const scale = clamp(Math.sqrt(capped / 24), 1.0, 1.6);
  return {
    maxActive: capped,
    scale,
    halfWidth: roundTo0_1(24 * scale),
    halfDepth: roundTo0_1(39 * scale),
    goalHalfWidth: 5,
    goalHeight: 2.44
  };
}

