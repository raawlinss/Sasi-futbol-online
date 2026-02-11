export const CLIENT_VERSION = '1.0.0';

export const EVENTS = Object.freeze({
  serverHello: 'serverHello',
  hello: 'hello',
  join: 'join',
  joinDenied: 'joinDenied',
  inputFrame: 'inputFrame',
  actionRequest: 'actionRequest',
  chatSend: 'chatSend',
  quickCommand: 'quickCommand',
  spectatorRequest: 'spectatorRequest',
  adminCommand: 'adminCommand',
  roomCreate: 'roomCreate',
  roomJoin: 'roomJoin',
  roomLeave: 'roomLeave',
  roomOwnerCommand: 'roomOwnerCommand',
  initSnapshot: 'initSnapshot',
  snapshot: 'snapshot',
  roomsList: 'roomsList',
  roomJoined: 'roomJoined',
  roomClosed: 'roomClosed',
  roomKicked: 'roomKicked',
  roomLeft: 'roomLeft',
  matchEvent: 'matchEvent',
  replayClip: 'replayClip',
  adminState: 'adminState',
  spectatorQueueState: 'spectatorQueueState',
  playerLeft: 'playerLeft'
});

export const TEAM = Object.freeze({
  red: 'red',
  blue: 'blue',
  spectator: 'spectator'
});

export const PLAYER_ROLE = Object.freeze({
  active: 'active',
  spectator: 'spectator',
  bot: 'bot'
});

export const ACTION_TYPES = Object.freeze({
  pass: 'pass',
  shoot: 'shoot',
  cross: 'cross',
  through: 'through',
  slide: 'slide',
  keeperCatch: 'keeperCatch'
});

export const FLOW_STATES = Object.freeze({
  live: 'live',
  goalFreeze: 'goal_freeze',
  replay: 'replay',
  kickoffCountdown: 'kickoff_countdown',
  matchEnd: 'match_end'
});

export const ACTION_COOLDOWNS_MS = Object.freeze({
  pass: 180,
  shoot: 420,
  cross: 320,
  through: 220,
  slide: 1000,
  keeperCatch: 650
});

export const ADMIN_COMMANDS = Object.freeze({
  setCap: 'setCap',
  forceTeam: 'forceTeam',
  makeSpectator: 'makeSpectator',
  addBot: 'addBot',
  removeBot: 'removeBot',
  kickPlayer: 'kickPlayer',
  approveNick: 'approveNick',
  rejectNick: 'rejectNick',
  restartMatch: 'restartMatch',
  setMatchDuration: 'setMatchDuration',
  setWeatherMode: 'setWeatherMode'
});

export const QUICK_COMMANDS = Object.freeze({
  passMe: 'pass_me',
  imOpen: 'im_open',
  fallBack: 'fall_back',
  shoot: 'shoot'
});

export const QUICK_COMMAND_TEXT = Object.freeze({
  [QUICK_COMMANDS.passMe]: 'Pas ver!',
  [QUICK_COMMANDS.imOpen]: 'Bostayim!',
  [QUICK_COMMANDS.fallBack]: 'Geri don!',
  [QUICK_COMMANDS.shoot]: 'Sut cek!'
});

export const MATCH_DEFAULTS = Object.freeze({
  activeCapMin: 2,
  activeCapMax: 60,
  activeCapCurrent: 24,
  tickRate: 60,
  snapshotRate: 30,
  replayBufferMs: 6000,
  replayClipMs: 6000,
  interpolationBufferMs: 120
});

export const FEATURE_GATES = Object.freeze({
  replay: 'replay',
  clouds: 'clouds',
  atmosphere: 'atmosphere'
});

export function clamp(value, min, max) {
  if (!Number.isFinite(value)) {
    return min;
  }
  return Math.max(min, Math.min(max, value));
}

export function safeNumber(value, fallback = 0) {
  return Number.isFinite(value) ? value : fallback;
}

export function normalize2D(x, z) {
  const len = Math.hypot(x, z);
  if (len <= 1e-6) {
    return { x: 0, z: 0, len: 0 };
  }

  return {
    x: x / len,
    z: z / len,
    len
  };
}
