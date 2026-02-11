import {
  ACTION_COOLDOWNS_MS,
  ACTION_TYPES,
  ADMIN_COMMANDS,
  EVENTS,
  FLOW_STATES,
  MATCH_DEFAULTS,
  PLAYER_ROLE,
  QUICK_COMMAND_TEXT,
  QUICK_COMMANDS,
  TEAM,
  clamp as clampProtocol,
  normalize2D,
  safeNumber
} from '../../shared/protocol/index.js';
import {
  DT,
  FIELD_CONFIG,
  GAMEPLAY_CONFIG,
  getInitialCap,
  SERVER_CONFIG,
  SNAPSHOT_MS,
  TICK_MS
} from './config.js';
import {
  clamp,
  cloneVec3,
  randomChoice,
  randomFloat,
  shortestAngleDiff,
  vec2Length
} from './math.js';
import { SIM_VERSION, stepCharacterMotion } from '../../shared/sim/movementCore.js';
import { isBannedText, makeRandomNick, sanitizeNick } from './moderation.js';

const CHAT_FILTER = ['spam', 'hack', 'cheat'];
const MASKED_NICK = '******';

function nowMs() {
  return Date.now();
}

function wrapAngleRad(angle) {
  const v = Number(angle);
  if (!Number.isFinite(v)) return 0;
  return Math.atan2(Math.sin(v), Math.cos(v));
}

function trimNick(rawNick) {
  const text = `${rawNick ?? ''}`.trim();
  const cleaned = text.replace(/[^a-zA-Z0-9_\- ]/g, '').slice(0, 16);
  return cleaned;
}

function createActionState() {
  return {
    isSliding: false,
    slideUntil: 0,
    slideDirX: 0,
    slideDirZ: 1,
    slideSpeed: 0,
    lastAction: 'idle'
  };
}

function createCooldowns() {
  return {
    [ACTION_TYPES.pass]: 0,
    [ACTION_TYPES.shoot]: 0,
    [ACTION_TYPES.cross]: 0,
    [ACTION_TYPES.through]: 0,
    [ACTION_TYPES.slide]: 0,
    [ACTION_TYPES.keeperCatch]: 0
  };
}

function createInputState() {
  return {
    seq: 0,
    tick: 0,
    moveX: 0,
    moveZ: 0,
    sprint: false,
    dtMs: 16,
    basisYaw: 0,
    headingYaw: 0,
    movementMode: 'basis_yaw',
    lookYaw: 0,
    lookPitch: 0,
    facingYaw: 0,
    updatedAt: 0
  };
}

function createBallState() {
  return {
    pos: { x: 0, y: FIELD_CONFIG.groundY, z: 0 },
    vel: { x: 0, y: 0, z: 0 },
    spin: { y: 0 },
    ownerId: null,
    lastTouch: null
  };
}

function withLegacyPlayerShape(player, visibleNick = null) {
  const speed = vec2Length(player.vel.x, player.vel.z);
  const anim = player.actionState.isSliding
    ? 'slide'
    : (speed > 3 ? 'run' : 'idle');

  return {
    id: player.id,
    nick: visibleNick ?? player.nick,
    nickStatus: player.nickStatus || 'approved',
    faceSeed: Number.isFinite(player.faceSeed) ? player.faceSeed : 0,
    team: player.team,
    role: player.role,
    isBot: !!player.isBot,
    isAdmin: !!player.isAdmin,
    isGoalkeeper: !!player.isGoalkeeper,
    isSpectator: player.role === PLAYER_ROLE.spectator,
    seatId: player.seatId,
    stamina: player.stamina,
    yaw: player.yaw,
    pitch: player.pitch,
    pos: cloneVec3(player.pos),
    vel: cloneVec3(player.vel),
    actionState: {
      isSliding: player.actionState.isSliding,
      slideUntil: player.actionState.slideUntil,
      slideDirX: player.actionState.slideDirX,
      slideDirZ: player.actionState.slideDirZ,
      slideSpeed: player.actionState.slideSpeed,
      lastAction: player.actionState.lastAction
    },
    position: cloneVec3(player.pos),
    velocity: cloneVec3(player.vel),
    rotation: player.yaw,
    anim,
    isSliding: player.actionState.isSliding
  };
}

function withLegacyBallShape(ball, lastTouch = null) {
  return {
    pos: cloneVec3(ball.pos),
    vel: cloneVec3(ball.vel),
    spin: { y: ball.spin.y },
    ownerId: ball.ownerId,
    lastTouch,
    position: cloneVec3(ball.pos),
    velocity: cloneVec3(ball.vel),
    angularVelocity: { x: 0, y: ball.spin.y, z: 0 },
    controlledBy: ball.ownerId
  };
}

export class GameServer {
  constructor(io, roomId = 'room', roomConfig = {}) {
    this.io = io;
    this.roomId = roomId;
    this.roomConfig = roomConfig || {};
    this.ownerId = this.roomConfig.ownerId || null;
    this.ownerNick = this.roomConfig.ownerNick || '';
    const pitch = this.roomConfig.pitch || {};
    this.field = {
      halfWidth: safeNumber(pitch.halfWidth, FIELD_CONFIG.halfWidth),
      halfDepth: safeNumber(pitch.halfDepth, FIELD_CONFIG.halfDepth),
      goalHalfWidth: safeNumber(pitch.goalHalfWidth, FIELD_CONFIG.goalHalfWidth),
      goalHeight: safeNumber(pitch.goalHeight, FIELD_CONFIG.goalHeight),
      keeperZoneDepth: FIELD_CONFIG.keeperZoneDepth,
      keeperZoneWidth: FIELD_CONFIG.keeperZoneWidth,
      groundY: FIELD_CONFIG.groundY
    };

    this.players = new Map();
    this.botIds = [];
    this.superAdminId = null;
    this.goalkeepers = { red: null, blue: null };
    this.keeperZoneState = new Map();

    this.score = { red: 0, blue: 0 };
    this.ball = createBallState();
    this.goalsByPlayerId = new Map();

    this.activeCap = clampProtocol(
      Math.floor(safeNumber(this.roomConfig.maxActive, getInitialCap())),
      2,
      60
    );

    this.matchDurationMin = clampProtocol(
      Math.floor(safeNumber(this.roomConfig.durationMin, 0)),
      0,
      30
    );
    this.matchDurationMs = this.matchDurationMin > 0 ? (this.matchDurationMin * 60 * 1000) : 0;
    this.matchClockMs = 0;
    this.weatherMode = `${this.roomConfig.weatherMode || 'day'}` === 'night' ? 'night' : 'day';
    this.matchEndFlow = null;
    this.serverTick = 0;
    this.frameEvents = [];

    this.pendingRestart = null;
    this.matchPausedUntil = 0;
    this.flowState = FLOW_STATES.live;
    this.flowEndsAt = 0;
    this.goalFlow = null;
    this.goalSeq = 0;
    this.goalLockUntil = 0;

    this.replayBuffer = [];
    this.replayCounter = 1;

    this.tickHandle = null;
    this.snapshotHandle = null;

    this.botCounter = 1;

    this.spectatorSeats = this.createSpectatorSeats();
    this.returnQueue = [];
  }

  start() {
    this.tickHandle = setInterval(() => this.tick(), TICK_MS);
    this.snapshotHandle = setInterval(() => this.emitSnapshots(), SNAPSHOT_MS);
  }

  stop() {
    if (this.tickHandle) {
      clearInterval(this.tickHandle);
      this.tickHandle = null;
    }
    if (this.snapshotHandle) {
      clearInterval(this.snapshotHandle);
      this.snapshotHandle = null;
    }
  }

  getMatchConfig() {
    return {
      activeCapMin: 2,
      activeCapMax: 60,
      activeCapCurrent: this.activeCap,
      durationMin: this.matchDurationMin,
      pitch: {
        halfWidth: this.field.halfWidth,
        halfDepth: this.field.halfDepth,
        goalHalfWidth: this.field.goalHalfWidth,
        goalHeight: this.field.goalHeight
      },
      rules: {
        out: true,
        corner: true,
        goalKick: true,
        foul: true,
        freeKick: true,
        keeperZone: true
      },
      weather: {
        mode: this.weatherMode
      },
      interpolationBufferMs: MATCH_DEFAULTS.interpolationBufferMs
    };
  }

  createSpectatorSeats() {
    const seats = [];
    let id = 0;

    const addSeat = (x, y, z, lx = 0, ly = 2.5, lz = 0) => {
      seats.push({
        id,
        pos: { x, y, z },
        lookAt: { x: lx, y: ly, z: lz }
      });
      id += 1;
    };

    const y = 8;
    const zOuter = this.field.halfDepth + 13;
    const xSpan = Math.max(20, this.field.halfWidth * 0.85);
    for (let x = -xSpan; x <= xSpan; x += 4) {
      addSeat(x, y, -zOuter);
      addSeat(x, y, zOuter);
    }

    const zSpan = Math.max(30, this.field.halfDepth * 0.75);
    const xOuter = this.field.halfWidth + 10;
    for (let z = -zSpan; z <= zSpan; z += 4) {
      addSeat(-xOuter, y - 1, z);
      addSeat(xOuter, y - 1, z);
    }

    return seats;
  }

  isFlowFrozen(now) {
    if (now < this.matchPausedUntil) {
      return true;
    }
    return this.flowState !== FLOW_STATES.live;
  }

  setFlowState(state, endsAt = 0) {
    this.flowState = state;
    this.flowEndsAt = Number.isFinite(endsAt) ? endsAt : 0;
  }

  isInKeeperZone(player) {
    if (!player) {
      return false;
    }
    if (Math.abs(player.pos.x) > this.field.keeperZoneWidth / 2) {
      return false;
    }
    if (player.team === TEAM.red) {
      return player.pos.z <= -this.field.halfDepth + this.field.keeperZoneDepth;
    }
    if (player.team === TEAM.blue) {
      return player.pos.z >= this.field.halfDepth - this.field.keeperZoneDepth;
    }
    return false;
  }

  clearKeeperSlot(team) {
    if (team === TEAM.red || team === TEAM.blue) {
      this.goalkeepers[team] = null;
    }
  }

  getTeamHeadingYaw(team) {
    return team === TEAM.blue ? Math.PI : 0;
  }

  getSocketByPlayerId(id) {
    return this.io.sockets.sockets.get(id) || null;
  }

  removeFromReturnQueue(playerId) {
    if (!playerId) return false;
    const index = this.returnQueue.indexOf(playerId);
    if (index === -1) return false;
    this.returnQueue.splice(index, 1);
    return true;
  }

  emitSpectatorQueueState(player, queued, position = null, reason = '') {
    if (!player || player.isBot) {
      return;
    }

    const socket = this.getSocketByPlayerId(player.id);
    if (!socket) {
      return;
    }

    socket.emit(EVENTS.spectatorQueueState, {
      queued: !!queued,
      position: Number.isFinite(position) ? position : null,
      reason: reason || undefined
    });
  }

  enqueueSpectatorReturn(player) {
    if (!player || player.role !== PLAYER_ROLE.spectator || player.isBot) {
      return;
    }

    const already = this.returnQueue.indexOf(player.id);
    if (already !== -1) {
      this.emitSpectatorQueueState(player, true, already + 1, 'queued');
      return;
    }

    this.returnQueue.push(player.id);
    this.emitSpectatorQueueState(player, true, this.returnQueue.length, 'queued');
    this.emitAdminState();
  }

  syncReturnQueuePositions() {
    for (let i = 0; i < this.returnQueue.length; i += 1) {
      const queuePlayer = this.players.get(this.returnQueue[i]);
      if (queuePlayer && queuePlayer.role === PLAYER_ROLE.spectator && !queuePlayer.isBot) {
        this.emitSpectatorQueueState(queuePlayer, true, i + 1, 'queued');
      }
    }
  }

  processReturnQueue(forceQueueUpdate = false) {
    let changed = false;
    if (this.returnQueue.length) {
      for (let i = this.returnQueue.length - 1; i >= 0; i -= 1) {
        const candidateId = this.returnQueue[i];
        const candidate = this.players.get(candidateId);
        if (!candidate || candidate.role !== PLAYER_ROLE.spectator || candidate.isBot) {
          this.returnQueue.splice(i, 1);
          changed = true;
        }
      }
    }

    while (this.getActiveCount() < this.activeCap && this.returnQueue.length) {
      const playerId = this.returnQueue.shift();
      const player = this.players.get(playerId);
      if (!player || player.role !== PLAYER_ROLE.spectator || player.isBot) {
        changed = true;
        continue;
      }
      const joined = this.setSpectatorToActive(player, {
        source: 'queue',
        silentAdminState: true
      });
      if (joined) {
        changed = true;
        this.emitSpectatorQueueState(player, false, null, 'joined');
      }
    }

    if (changed || forceQueueUpdate) {
      this.syncReturnQueuePositions();
      this.emitAdminState();
    }
  }

  getHumanIds() {
    return [...this.players.values()]
      .filter((p) => !p.isBot)
      .map((p) => p.id);
  }

  addSocket(socket, rawNick, flags = {}) {
    if (!socket || this.players.has(socket.id)) {
      return false;
    }

    let nick = trimNick(rawNick);
    if (nick.length < 3) {
      nick = `Player${Math.floor(Math.random() * 1000)}`;
    }
    nick = this.ensureUniquePublicNick(nick);

    const isSuperAdmin = !!flags.isSuperAdmin;
    const isOwner = !!flags.isOwner;
    const isAdmin = isSuperAdmin || isOwner;

    const role = this.getActiveCount() < this.activeCap
      ? PLAYER_ROLE.active
      : PLAYER_ROLE.spectator;

    const team = role === PLAYER_ROLE.active
      ? this.pickBalancedTeam()
      : TEAM.spectator;

    const spawn = role === PLAYER_ROLE.active
      ? this.pickSpawnForTeam(team)
      : this.pickSpectatorSeat();

    const player = {
      id: socket.id,
      nick,
      requestedNick: nick,
      displayNick: nick,
      nickStatus: 'approved',
      role,
      team,
      isBot: false,
      isAdmin,
      isSuperAdmin,
      isOwner,
      pos: { ...spawn.pos },
      vel: { x: 0, y: 0, z: 0 },
      yaw: spawn.yaw,
      simBasisYaw: spawn.yaw,
      pitch: 0,
      stamina: 1,
      input: createInputState(),
      actionState: createActionState(),
      cooldowns: createCooldowns(),
      isGoalkeeper: false,
      seatId: role === PLAYER_ROLE.spectator ? spawn.seatId : null,
      spectatorMode: role === PLAYER_ROLE.spectator ? 'seat' : null,
      joinedAt: nowMs(),
      lastChatAt: 0,
      socketId: socket.id,
      botState: null
    };
    player.input.headingYaw = this.getTeamHeadingYaw(player.team);
    player.input.basisYaw = player.yaw;
    player.input.movementMode = role === PLAYER_ROLE.active ? 'basis_yaw' : player.input.movementMode;
    player.input.lookYaw = player.yaw;
    player.input.facingYaw = player.yaw;

    this.players.set(player.id, player);

    this.broadcastMatchEvent('system', {
      kind: 'playerJoined',
      playerId: player.id,
      nick: player.displayNick || player.nick,
      team: player.team,
      role: player.role
    });

    this.emitAdminState();
    return true;
  }

  removeSocket(id, reason = 'left') {
    const player = this.players.get(id);
    if (!player) {
      return false;
    }

    const removedFromQueue = this.removeFromReturnQueue(id);

    if (this.ball.ownerId === id) {
      this.ball.ownerId = null;
    }

    this.players.delete(id);
    this.keeperZoneState.delete(id);
    if (this.goalkeepers.red === id) this.goalkeepers.red = null;
    if (this.goalkeepers.blue === id) this.goalkeepers.blue = null;

    this.broadcastMatchEvent('system', {
      kind: 'playerLeft',
      playerId: id,
      nick: player.displayNick || player.nick,
      reason
    });

    this.io.to(this.roomId).emit(EVENTS.playerLeft, id);

    this.processReturnQueue(removedFromQueue);
    this.emitAdminState();

    return true;
  }

  onConnection(socket) {
    socket.on(EVENTS.join, (payload) => this.handleJoin(socket, payload));
    socket.on(EVENTS.inputFrame, (payload) => this.handleInputFrame(socket.id, payload));
    socket.on(EVENTS.actionRequest, (payload) => this.handleActionRequest(socket.id, payload));
    socket.on(EVENTS.chatSend, (payload) => this.handleChat(socket.id, payload));
    socket.on(EVENTS.quickCommand, (payload) => this.handleQuickCommand(socket.id, payload));
    socket.on(EVENTS.spectatorRequest, (payload) => this.handleSpectatorRequest(socket.id, payload));
    socket.on(EVENTS.adminCommand, (payload) => this.handleAdminCommand(socket.id, payload));

    socket.on('startGame', () => {
      if (this.isAdmin(socket.id)) {
        this.resetMatchState();
      }
    });

    socket.on('disconnect', () => this.handleDisconnect(socket.id));
  }

  handleJoin(socket, payload) {
    if (this.players.has(socket.id)) {
      return;
    }

    const incomingNickRaw = typeof payload === 'string'
      ? payload
      : payload?.nickname;

    let requestedNick = sanitizeNick(incomingNickRaw, 8);
    if (!requestedNick) {
      requestedNick = makeRandomNick();
    }

    const wantsAdminNick = requestedNick.toLowerCase() === SERVER_CONFIG.adminNick.toLowerCase();
    const canClaimAdmin = wantsAdminNick && !this.superAdminId;

    if (wantsAdminNick) {
      if (this.superAdminId && this.superAdminId !== socket.id) {
        socket.emit(EVENTS.joinDenied, {
          reason: 'admin_taken',
          message: 'Rawlins zaten oyunda. Sadece 1 kisi Rawlins olabilir.'
        });
        return;
      }

      const pass = typeof payload === 'object' ? `${payload?.adminPassword ?? ''}` : '';
      if (pass !== `${SERVER_CONFIG.adminPassword}`) {
        socket.emit(EVENTS.joinDenied, {
          reason: 'bad_password',
          message: 'Rawlins sifresi yanlis.'
        });
        return;
      }
    }

    let isSuperAdmin = false;
    if (canClaimAdmin) {
      isSuperAdmin = true;
      this.superAdminId = socket.id;
    }

    let nickStatus = 'pending';
    let displayNick = MASKED_NICK;

    const banned = isBannedText(incomingNickRaw) || isBannedText(requestedNick);
    if (isSuperAdmin) {
      nickStatus = 'approved';
      displayNick = SERVER_CONFIG.adminNick;
    } else if (banned) {
      nickStatus = 'rejected';
      displayNick = this.ensureUniquePublicNick(makeRandomNick());
    }

    const isAdmin = isSuperAdmin;

    const role = this.getActiveCount() < this.activeCap
      ? PLAYER_ROLE.active
      : PLAYER_ROLE.spectator;

    const team = role === PLAYER_ROLE.active
      ? this.pickBalancedTeam()
      : TEAM.spectator;

    const spawn = role === PLAYER_ROLE.active
      ? this.pickSpawnForTeam(team)
      : this.pickSpectatorSeat();

    const player = {
      id: socket.id,
      nick: displayNick,
      requestedNick,
      displayNick,
      nickStatus,
      isSuperAdmin,
      role,
      team,
      isBot: false,
      isAdmin,
      faceSeed: Math.floor(Math.random() * 1000000000),
      pos: { ...spawn.pos },
      vel: { x: 0, y: 0, z: 0 },
      yaw: spawn.yaw,
      simBasisYaw: spawn.yaw,
      pitch: 0,
      stamina: 1,
      input: createInputState(),
      actionState: createActionState(),
      cooldowns: createCooldowns(),
      isGoalkeeper: false,
      seatId: role === PLAYER_ROLE.spectator ? spawn.seatId : null,
      spectatorMode: role === PLAYER_ROLE.spectator ? 'seat' : null,
      joinedAt: nowMs(),
      lastChatAt: 0,
      socketId: socket.id,
      botState: null
    };
    player.input.headingYaw = this.getTeamHeadingYaw(player.team);
    player.input.basisYaw = player.yaw;
    player.input.movementMode = 'basis_yaw';
    player.input.lookYaw = player.yaw;
    player.input.facingYaw = player.yaw;

    this.players.set(player.id, player);
    // Single-instance server still uses room-scoped emits (io.to(roomId)).
    // Make sure the socket is actually in the room so replayClip/playerLeft etc arrive.
    try {
      socket.join(this.roomId);
      socket.data.roomId = this.roomId;
    } catch {
      // ignore
    }

    socket.emit(EVENTS.initSnapshot, this.buildInitSnapshot(player.id));

    this.broadcastMatchEvent('system', {
      kind: 'playerJoined',
      playerId: player.id,
      nick: player.displayNick || player.nick,
      team: player.team,
      role: player.role
    });

    this.emitAdminState();
  }

  ensureUniquePublicNick(baseNick) {
    const base = `${baseNick || ''}`.slice(0, 8) || makeRandomNick();
    if (base === MASKED_NICK) {
      return base;
    }

    const exists = new Set([...this.players.values()].map((p) => `${p.displayNick || p.nick || ''}`.toLowerCase()));
    const reserved = SERVER_CONFIG.adminNick.toLowerCase();
    if (!exists.has(base.toLowerCase()) && base.toLowerCase() !== reserved) {
      return base;
    }

    let index = 1;
    while (index < 10000) {
      const suffix = `${index}`;
      const cut = Math.max(1, 8 - suffix.length);
      const candidate = `${base.slice(0, cut)}${suffix}`;
      if (!exists.has(candidate.toLowerCase()) && candidate.toLowerCase() !== reserved) {
        return candidate;
      }
      index += 1;
    }

    return makeRandomNick();
  }

  pickBalancedTeam() {
    const red = this.getActiveCount(TEAM.red);
    const blue = this.getActiveCount(TEAM.blue);
    return red <= blue ? TEAM.red : TEAM.blue;
  }

  pickSpawnForTeam(team) {
    const hasKeeper = [...this.players.values()].some(
      (p) => p.team === team && p.role === PLAYER_ROLE.active && p.isGoalkeeper
    );

    if (!hasKeeper) {
      return {
        pos: {
          x: randomFloat(-1.5, 1.5),
          y: GAMEPLAY_CONFIG.playerCenterY,
          z: team === TEAM.red ? -34 : 34
        },
        yaw: team === TEAM.red ? 0 : Math.PI
      };
    }

    const zMin = team === TEAM.red ? -30 : 8;
    const zMax = team === TEAM.red ? -8 : 30;

    return {
      pos: {
        x: randomFloat(-17, 17),
        y: GAMEPLAY_CONFIG.playerCenterY,
        z: randomFloat(zMin, zMax)
      },
      yaw: team === TEAM.red ? 0 : Math.PI
    };
  }

  pickSpectatorSeat(preferredSeatId = null) {
    if (preferredSeatId !== null) {
      const found = this.spectatorSeats.find((s) => s.id === preferredSeatId);
      if (found) {
        return {
          pos: { ...found.pos },
          lookAt: { ...found.lookAt },
          seatId: found.id,
          yaw: Math.atan2(found.lookAt.x - found.pos.x, found.lookAt.z - found.pos.z)
        };
      }
    }

    const busySeats = new Set(
      [...this.players.values()]
        .filter((p) => p.role === PLAYER_ROLE.spectator && Number.isInteger(p.seatId))
        .map((p) => p.seatId)
    );

    const freeSeats = this.spectatorSeats.filter((seat) => !busySeats.has(seat.id));
    const seat = freeSeats.length ? randomChoice(freeSeats) : randomChoice(this.spectatorSeats);

    return {
      pos: { ...seat.pos },
      lookAt: { ...seat.lookAt },
      seatId: seat.id,
      yaw: Math.atan2(seat.lookAt.x - seat.pos.x, seat.lookAt.z - seat.pos.z)
    };
  }

  handleDisconnect(id) {
    const player = this.players.get(id);
    if (!player) {
      return;
    }

    const removedFromQueue = this.removeFromReturnQueue(id);

    if (id === this.superAdminId) {
      this.superAdminId = null;
    }

    if (this.ball.ownerId === id) {
      this.ball.ownerId = null;
    }

    this.players.delete(id);
    this.keeperZoneState.delete(id);
    if (this.goalkeepers.red === id) this.goalkeepers.red = null;
    if (this.goalkeepers.blue === id) this.goalkeepers.blue = null;

    this.broadcastMatchEvent('system', {
      kind: 'playerLeft',
      playerId: id,
      nick: player.displayNick || player.nick,
      reason: 'disconnect'
    });

    this.io.to(this.roomId).emit(EVENTS.playerLeft, id);

    this.processReturnQueue(removedFromQueue);
    this.emitAdminState();

    if (this.getHumanCount() === 0) {
      this.resetMatchState();
      this.removeAllBots();
    }
  }

  isAdmin(id) {
    const player = this.players.get(id);
    return !!player?.isAdmin;
  }

  getHumanCount() {
    return [...this.players.values()].filter((p) => !p.isBot).length;
  }

  getActiveCount(team = null) {
    return [...this.players.values()].filter((p) => {
      if (!(p.role === PLAYER_ROLE.active || p.role === PLAYER_ROLE.bot)) {
        return false;
      }
      if (!team) {
        return true;
      }
      return p.team === team;
    }).length;
  }

  getSpectatorCount() {
    return [...this.players.values()].filter((p) => p.role === PLAYER_ROLE.spectator).length;
  }

  getActivePlayers(team = null) {
    return [...this.players.values()].filter((p) => {
      const activeRole = p.role === PLAYER_ROLE.active || p.role === PLAYER_ROLE.bot;
      if (!activeRole) {
        return false;
      }
      if (team === null) {
        return true;
      }
      return p.team === team;
    });
  }

  getFeatureGates() {
    return {
      replay: SERVER_CONFIG.enableReplay,
      clouds: SERVER_CONFIG.enableClouds,
      atmosphere: SERVER_CONFIG.enableAtmosphere
    };
  }

  getPerfFlags() {
    return {
      stabilizationMode: SERVER_CONFIG.stabilizationMode,
      replayEnabled: SERVER_CONFIG.enableReplay,
      cloudsEnabled: SERVER_CONFIG.enableClouds,
      atmosphereEnabled: SERVER_CONFIG.enableAtmosphere
    };
  }

  isSuperAdmin(id) {
    return !!id && id === this.superAdminId;
  }

  getVisibleNickFor(player, receiverIsAdmin) {
    if (!player) return MASKED_NICK;
    if (receiverIsAdmin && player.nickStatus === 'pending') {
      return player.requestedNick || player.displayNick || player.nick || MASKED_NICK;
    }
    return player.displayNick || player.nick || MASKED_NICK;
  }

  buildInitSnapshot(playerId) {
    const snapshotNow = nowMs();
    const receiverIsAdmin = this.isSuperAdmin(playerId);
    return {
      roomId: this.roomId,
      myId: playerId,
      serverTick: this.serverTick,
      matchConfig: this.getMatchConfig(),
      players: this.serializePlayersFor(receiverIsAdmin),
      ball: this.serializeBallFor(receiverIsAdmin),
      score: { ...this.score },
      adminState: this.getAdminStateFor(playerId),
      flowState: this.flowState,
      flowEndsAt: this.flowEndsAt,
      matchClockMs: this.matchClockMs,
      matchDurationMs: this.matchDurationMs,
      serverNowMs: snapshotNow,
      simVersion: SIM_VERSION,
      perfFlags: this.getPerfFlags(),
      featureGates: this.getFeatureGates()
    };
  }

  serializePlayersFor(receiverIsAdmin) {
    const out = {};
    for (const player of this.players.values()) {
      if (player.role === PLAYER_ROLE.active || player.role === PLAYER_ROLE.bot) {
        player.pos.y = GAMEPLAY_CONFIG.playerCenterY;
      }
      out[player.id] = withLegacyPlayerShape(player, this.getVisibleNickFor(player, receiverIsAdmin));
    }
    return out;
  }

  serializeBallFor(receiverIsAdmin) {
    const lt = this.ball.lastTouch;
    const lastTouch = lt && lt.id
      ? {
        id: lt.id,
        team: lt.team,
        nick: this.getVisibleNickFor(this.players.get(lt.id), receiverIsAdmin)
      }
      : null;
    return withLegacyBallShape(this.ball, lastTouch);
  }

  getAdminStateBase() {
    return {
      activeCap: this.activeCap,
      activeCount: this.getActiveCount(),
      spectatorCount: this.getSpectatorCount(),
      botCount: this.botIds.length,
      spectatorReturnQueue: this.returnQueue.length,
      matchDurationMin: this.matchDurationMin,
      weatherMode: this.weatherMode,
      stabilizationMode: SERVER_CONFIG.stabilizationMode,
      featureGates: this.getFeatureGates()
    };
  }

  getAdminStateFor(receiverId) {
    const base = this.getAdminStateBase();
    if (!this.isSuperAdmin(receiverId)) {
      return base;
    }

    const pendingNickApprovals = [];
    for (const p of this.players.values()) {
      if (p.isBot) continue;
      if (p.nickStatus !== 'pending') continue;
      pendingNickApprovals.push({
        id: p.id,
        requestedNick: p.requestedNick || '',
        joinedAt: p.joinedAt
      });
    }

    return {
      ...base,
      pendingNickApprovals
    };
  }

  emitAdminState() {
    const sockets = this.io.sockets.sockets;
    for (const socket of sockets.values()) {
      const player = this.players.get(socket.id);
      if (!player) continue;
      socket.emit(EVENTS.adminState, this.getAdminStateFor(socket.id));
    }
  }

  handleInputFrame(id, payload) {
    const player = this.players.get(id);
    if (!player || player.role === PLAYER_ROLE.spectator) {
      return;
    }

    const seq = clamp(Math.floor(safeNumber(payload?.seq, player.input.seq)), player.input.seq, player.input.seq + 8);
    const tick = Math.floor(safeNumber(payload?.tick, player.input.tick));

    const moveX = clamp(safeNumber(payload?.moveX, 0), -1, 1);
    const moveZ = clamp(safeNumber(payload?.moveZ, 0), -1, 1);

    const sprint = !!payload?.sprint;
    const dtMs = clamp(Math.floor(safeNumber(payload?.dtMs, 16)), 8, 50);
    const headingYaw = this.getTeamHeadingYaw(player.team);
    const movementMode = payload?.movementMode === 'locked_heading'
      ? 'locked_heading'
      : 'basis_yaw';

    const rawBasisYaw = safeNumber(payload?.basisYaw, player.input.basisYaw);
    const basisYawWrapped = wrapAngleRad(rawBasisYaw);
    const prevBasisYaw = wrapAngleRad(player.input.basisYaw);
    const maxBasisDelta = 0.35;
    const basisDelta = shortestAngleDiff(prevBasisYaw, basisYawWrapped);
    const basisYaw = movementMode === 'locked_heading'
      ? headingYaw
      : (
        Math.abs(basisDelta) > maxBasisDelta
          ? wrapAngleRad(prevBasisYaw + Math.sign(basisDelta) * maxBasisDelta)
          : basisYawWrapped
      );

    const lookYaw = safeNumber(payload?.lookYaw, basisYaw);
    const lookPitch = clamp(safeNumber(payload?.lookPitch, player.pitch), -1.1, 0.9);
    const facingYaw = safeNumber(payload?.facingYaw, lookYaw);

    player.input.seq = seq;
    player.input.tick = tick;
    player.input.moveX = moveX;
    player.input.moveZ = moveZ;
    player.input.sprint = sprint;
    player.input.dtMs = dtMs;
    player.input.basisYaw = basisYaw;
    player.input.headingYaw = headingYaw;
    player.input.movementMode = movementMode;
    player.input.lookYaw = lookYaw;
    player.input.lookPitch = lookPitch;
    player.input.facingYaw = facingYaw;
    player.input.updatedAt = nowMs();
  }

  handleActionRequest(id, payload) {
    const player = this.players.get(id);
    if (!player || player.role === PLAYER_ROLE.spectator) {
      return;
    }

    if (this.flowState !== FLOW_STATES.live || nowMs() < this.matchPausedUntil) {
      return;
    }

    const type = payload?.type;
    if (!Object.values(ACTION_TYPES).includes(type)) {
      return;
    }

    const now = nowMs();
    if (now < (player.cooldowns[type] || 0)) {
      return;
    }

    const charge = clamp(safeNumber(payload?.charge, 0), 0, 1);
    const curve = clamp(safeNumber(payload?.curve, 0), -1, 1);

    let did = false;
    switch (type) {
      case ACTION_TYPES.pass:
      case ACTION_TYPES.shoot:
      case ACTION_TYPES.cross:
      case ACTION_TYPES.through:
        did = this.handleKickLikeAction(player, type, charge, curve);
        break;
      case ACTION_TYPES.slide:
        // Sliding while carrying the ball looks broken; disallow server-authoritatively.
        if (this.ball.ownerId === player.id) {
          return;
        }
        this.startSlideAction(player, now);
        did = true;
        break;
      case ACTION_TYPES.keeperCatch:
        did = this.handleKeeperCatch(player);
        break;
      default:
        break;
    }

    // Consume cooldown only if the action actually happened.
    if (did) {
      player.cooldowns[type] = now + ACTION_COOLDOWNS_MS[type];
    }
  }

  handleKickLikeAction(player, type, charge, curve) {
    const ballDist = vec2Length(this.ball.pos.x - player.pos.x, this.ball.pos.z - player.pos.z);
    if (this.ball.ownerId !== player.id && ballDist > 2.5) {
      return false;
    }

    const lookDirX = Math.sin(player.yaw);
    const lookDirZ = Math.cos(player.yaw);

    let speed = 18;
    let lift = 1.2;
    let spin = curve * 10;

    if (type === ACTION_TYPES.pass) {
      const target = this.findPassTarget(player, false);
      if (target) {
        const toTargetX = target.pos.x - player.pos.x;
        const toTargetZ = target.pos.z - player.pos.z;
        const norm = normalize2D(toTargetX, toTargetZ);
        this.ball.vel.x = norm.x * (16 + charge * 5);
        this.ball.vel.z = norm.z * (16 + charge * 5);
        this.ball.vel.y = 0.7 + charge * 0.7;
        this.ball.spin.y = curve * 6;
      } else {
        this.ball.vel.x = lookDirX * (16 + charge * 5);
        this.ball.vel.z = lookDirZ * (16 + charge * 5);
        this.ball.vel.y = 0.7 + charge * 0.7;
        this.ball.spin.y = curve * 6;
      }
    } else if (type === ACTION_TYPES.through) {
      const target = this.findPassTarget(player, true);
      if (target) {
        const toTargetX = target.pos.x - player.pos.x;
        const toTargetZ = target.pos.z - player.pos.z;
        const norm = normalize2D(toTargetX, toTargetZ);
        this.ball.vel.x = norm.x * (20 + charge * 10);
        this.ball.vel.z = norm.z * (20 + charge * 10);
        this.ball.vel.y = 1.2 + charge * 1.0;
        this.ball.spin.y = curve * 7;
      } else {
        this.ball.vel.x = lookDirX * (22 + charge * 10);
        this.ball.vel.z = lookDirZ * (22 + charge * 10);
        this.ball.vel.y = 1.3 + charge * 1.2;
        this.ball.spin.y = curve * 7;
      }
    } else if (type === ACTION_TYPES.cross) {
      speed = 18 + charge * 9;
      lift = 5.2 + charge * 3.2;
      spin = curve * 8;
      this.ball.vel.x = lookDirX * speed;
      this.ball.vel.z = lookDirZ * speed;
      this.ball.vel.y = lift;
      this.ball.spin.y = spin;
    } else {
      speed = 24 + charge * 13;
      lift = 1.4 + charge * 3.1;
      spin = curve * 11;
      this.ball.vel.x = lookDirX * speed;
      this.ball.vel.z = lookDirZ * speed;
      this.ball.vel.y = lift;
      this.ball.spin.y = spin;
    }

    this.ball.ownerId = null;
    this.ball.lastTouch = { id: player.id, team: player.team };

    player.actionState.lastAction = type;
    return true;
  }

  startSlideAction(player, now) {
    const speed = Math.hypot(player.vel.x, player.vel.z);
    let dirX = Math.sin(player.yaw);
    let dirZ = Math.cos(player.yaw);

    if (speed > 0.2) {
      dirX = player.vel.x / speed;
      dirZ = player.vel.z / speed;
    }

    player.actionState.isSliding = true;
    player.actionState.slideUntil = now + GAMEPLAY_CONFIG.slideDurationMs;
    player.actionState.slideDirX = dirX;
    player.actionState.slideDirZ = dirZ;
    player.actionState.slideSpeed = Math.max(
      GAMEPLAY_CONFIG.slideMinStartSpeed,
      speed + GAMEPLAY_CONFIG.slideStartBoost
    );
    player.actionState.lastAction = ACTION_TYPES.slide;
  }

  findPassTarget(player, through) {
    const candidates = this.getActivePlayers(player.team)
      .filter((p) => p.id !== player.id)
      .map((p) => {
        const dx = p.pos.x - player.pos.x;
        const dz = p.pos.z - player.pos.z;
        const dist = Math.hypot(dx, dz);
        const dir = normalize2D(dx, dz);
        const fwdX = Math.sin(player.yaw);
        const fwdZ = Math.cos(player.yaw);
        const dot = dir.x * fwdX + dir.z * fwdZ;

        return {
          player: p,
          dist,
          dot
        };
      })
      .filter((x) => x.dot > 0.25 && x.dist < (through ? 36 : 24));

    if (!candidates.length) {
      return null;
    }

    candidates.sort((a, b) => {
      if (through) {
        return b.dist - a.dist;
      }
      return a.dist - b.dist;
    });

    return candidates[0].player;
  }

  handleKeeperCatch(player) {
    if (!player.isGoalkeeper) {
      return false;
    }

    const dist = vec2Length(this.ball.pos.x - player.pos.x, this.ball.pos.z - player.pos.z);
    const maxRadius = GAMEPLAY_CONFIG.keeperCatchRadius + GAMEPLAY_CONFIG.keeperCatchBonusRadius;
    if (dist > maxRadius) {
      return false;
    }

    this.ball.ownerId = player.id;
    this.ball.lastTouch = { id: player.id, team: player.team };
    this.ball.vel.x = 0;
    this.ball.vel.y = 0;
    this.ball.vel.z = 0;
    this.ball.spin.y = 0;

    player.actionState.lastAction = ACTION_TYPES.keeperCatch;
    return true;
  }

  handleChat(id, payload) {
    const player = this.players.get(id);
    if (!player) {
      return;
    }

    const now = nowMs();
    if (now - player.lastChatAt < SERVER_CONFIG.chatRateMs) {
      return;
    }

    const rawText = `${payload?.text ?? ''}`.trim().slice(0, 120);
    if (!rawText) {
      return;
    }

    const lower = rawText.toLowerCase();
    const blocked = CHAT_FILTER.some((word) => lower.includes(word)) || isBannedText(rawText);
    const text = blocked ? '[mesaj filtrelendi]' : rawText;

    player.lastChatAt = now;

    this.broadcastMatchEvent('chat', {
      fromId: player.id,
      team: player.team,
      text
    });
  }

  handleQuickCommand(id, payload) {
    const player = this.players.get(id);
    if (!player) {
      return;
    }

    const code = payload?.code;
    if (!Object.values(QUICK_COMMANDS).includes(code)) {
      return;
    }

    this.broadcastMatchEvent('quickCommand', {
      fromId: player.id,
      team: player.team,
      code,
      text: QUICK_COMMAND_TEXT[code]
    });
  }

  handleSpectatorRequest(id, payload) {
    const player = this.players.get(id);
    if (!player) {
      return;
    }

    const mode = payload?.mode;

    if (mode === 'join') {
      this.setPlayerSpectator(player, payload?.seatId ?? null);
      this.broadcastSystem(`${player.nick} izleyici moduna gecti.`);
      this.emitAdminState();
      return;
    }

    if (mode === 'return') {
      if (player.role !== PLAYER_ROLE.spectator) {
        return;
      }

      const immediate = this.setSpectatorToActive(player, { source: 'manual' });
      if (immediate) {
        this.emitSpectatorQueueState(player, false, null, 'joined');
        return;
      }

      if (this.botIds.length > 0) {
        const reclaimId = this.botIds[this.botIds.length - 1];
        this.removeBot(reclaimId, { skipQueueProcess: true, silentAdminState: true });
        const reclaimed = this.setSpectatorToActive(player, { source: 'bot-reclaim' });
        if (reclaimed) {
          this.emitSpectatorQueueState(player, false, null, 'joined');
          this.emitAdminState();
          return;
        }
        this.processReturnQueue();
      }

      this.enqueueSpectatorReturn(player);
      return;
    }

    if (player.role !== PLAYER_ROLE.spectator) {
      return;
    }

    if (mode === 'seat') {
      const requestedSeat = Number.isInteger(payload?.seatId) ? payload.seatId : null;
      const seatData = this.pickSpectatorSeat(requestedSeat);
      player.seatId = seatData.seatId;
      player.pos = { ...seatData.pos };
      player.yaw = seatData.yaw;
      player.spectatorMode = 'seat';
      return;
    }

    if (mode === 'freecam') {
      player.spectatorMode = 'freecam';
      player.seatId = null;
      return;
    }
  }

  handleAdminCommand(id, payload) {
    if (!this.isAdmin(id)) {
      return;
    }

    const command = payload?.cmd;
    const args = payload?.args || {};

    if (!Object.values(ADMIN_COMMANDS).includes(command)) {
      return;
    }

    switch (command) {
      case ADMIN_COMMANDS.setCap:
        this.applyActiveCap(args.cap);
        break;
      case ADMIN_COMMANDS.forceTeam:
        this.forceTeam(args.targetNick, args.team);
        break;
      case ADMIN_COMMANDS.makeSpectator:
        this.makeSpectator(args.targetNick);
        break;
      case ADMIN_COMMANDS.addBot:
        this.addBot(args.team || null);
        break;
      case ADMIN_COMMANDS.removeBot:
        this.removeBot(args.botId || null);
        break;
      case ADMIN_COMMANDS.kickPlayer:
        this.kickPlayer(args.targetNick);
        break;
      case ADMIN_COMMANDS.approveNick:
        this.approveNick(id, args.targetId);
        break;
      case ADMIN_COMMANDS.rejectNick:
        this.rejectNick(id, args.targetId);
        break;
      case ADMIN_COMMANDS.restartMatch:
        this.resetMatchState();
        this.emitSnapshots();
        this.emitAdminState();
        break;
      case ADMIN_COMMANDS.setMatchDuration:
        this.applyMatchDuration(args.durationMin);
        break;
      case ADMIN_COMMANDS.setWeatherMode:
        this.applyWeatherMode(args.mode);
        break;
      default:
        break;
    }
  }

  applyMatchDuration(durationMin) {
    const v = Math.floor(Number(durationMin));
    const allowed = new Set([0, 1, 3, 5, 10, 15, 20]);
    if (!allowed.has(v)) {
      return;
    }

    this.matchDurationMin = v;
    this.matchDurationMs = this.matchDurationMin > 0 ? (this.matchDurationMin * 60 * 1000) : 0;
    this.matchClockMs = 0;

    // Deterministic: changing match duration restarts the match state.
    this.resetMatchState();

    const label = this.matchDurationMin > 0 ? `${this.matchDurationMin} dk` : 'Suresiz';
    this.broadcastSystem(`Mac suresi ${label} olarak ayarlandi.`);
    this.emitSnapshots();
    this.emitAdminState();
  }

  applyWeatherMode(mode) {
    const next = `${mode || ''}`.trim().toLowerCase();
    if (next !== 'day' && next !== 'night') {
      return;
    }
    if (this.weatherMode === next) {
      return;
    }
    this.weatherMode = next;

    this.broadcastMatchEvent('weather', { mode: this.weatherMode });
    this.broadcastSystem(this.weatherMode === 'night' ? 'Gece modu acildi.' : 'Gunduz modu acildi.');
    this.emitSnapshots();
    this.emitAdminState();
  }

  sendPrivateSystem(targetId, text) {
    const socket = this.io.sockets.sockets.get(targetId);
    if (!socket) return;
    socket.emit(EVENTS.matchEvent, {
      type: 'system',
      data: { text },
      ts: nowMs()
    });
  }

  approveNick(adminId, targetId) {
    if (!this.isSuperAdmin(adminId)) {
      return;
    }
    const id = `${targetId || ''}`;
    const player = this.players.get(id);
    if (!player || player.isBot || player.isSuperAdmin) {
      return;
    }

    if (player.nickStatus !== 'pending') {
      return;
    }

    if (isBannedText(player.requestedNick)) {
      this.rejectNick(adminId, id);
      return;
    }

    const nextNick = this.ensureUniquePublicNick(player.requestedNick || makeRandomNick());
    player.displayNick = nextNick;
    player.nick = nextNick;
    player.nickStatus = 'approved';

    this.sendPrivateSystem(player.id, 'Nick onaylandi.');
    this.emitAdminState();
    this.emitSnapshots();
  }

  rejectNick(adminId, targetId) {
    if (!this.isSuperAdmin(adminId)) {
      return;
    }
    const id = `${targetId || ''}`;
    const player = this.players.get(id);
    if (!player || player.isBot || player.isSuperAdmin) {
      return;
    }

    const nextNick = this.ensureUniquePublicNick(makeRandomNick());
    player.displayNick = nextNick;
    player.nick = nextNick;
    player.nickStatus = 'rejected';

    this.sendPrivateSystem(player.id, `Nickin degistirildi: ${nextNick}`);
    this.emitAdminState();
    this.emitSnapshots();
  }

  applyActiveCap(rawCap) {
    const cap = Math.floor(clampProtocol(Number(rawCap), SERVER_CONFIG.activeCapMin, SERVER_CONFIG.activeCapMax));
    this.activeCap = cap;
    this.enforceActiveCap();
    this.processReturnQueue();
    this.broadcastSystem(`Aktif oyuncu limiti ${cap} olarak guncellendi.`);
    this.emitAdminState();
  }

  enforceActiveCap() {
    const activeHumans = [...this.players.values()]
      .filter((p) => p.role === PLAYER_ROLE.active && !p.isBot)
      .sort((a, b) => b.joinedAt - a.joinedAt);

    while (this.getActiveCount() > this.activeCap && activeHumans.length) {
      const moved = activeHumans.shift();
      if (!moved) {
        break;
      }
      if (moved.isAdmin) {
        continue;
      }
      this.setPlayerSpectator(moved, null);
      this.broadcastSystem(`${moved.nick} limit nedeniyle izleyiciye alindi.`);
    }
  }

  forceTeam(targetNick, team) {
    if (![TEAM.red, TEAM.blue].includes(team)) {
      return;
    }

    const player = this.findPlayerByNick(targetNick);
    if (!player) {
      return;
    }

    if (player.role === PLAYER_ROLE.spectator) {
      if (this.getActiveCount() >= this.activeCap) {
        this.broadcastSystem('Takim atamasi yapilamadi: aktif limit dolu.');
        return;
      }
      const removedFromQueue = this.removeFromReturnQueue(player.id);
      if (removedFromQueue) {
        this.syncReturnQueuePositions();
      }
      this.emitSpectatorQueueState(player, false, null, 'joined');
      player.role = PLAYER_ROLE.active;
      player.seatId = null;
      player.spectatorMode = null;
    }

    player.team = team;
    const spawn = this.pickSpawnForTeam(team);
    player.pos = { ...spawn.pos };
    player.vel = { x: 0, y: 0, z: 0 };
    player.yaw = spawn.yaw;
    player.simBasisYaw = player.yaw;
    player.input.headingYaw = this.getTeamHeadingYaw(team);
    player.input.basisYaw = player.yaw;
    player.input.movementMode = 'basis_yaw';
    player.input.lookYaw = player.yaw;
    player.input.facingYaw = player.yaw;
    player.isGoalkeeper = false;
    this.keeperZoneState.delete(player.id);
    if (this.goalkeepers.red === player.id) this.goalkeepers.red = null;
    if (this.goalkeepers.blue === player.id) this.goalkeepers.blue = null;

    this.broadcastSystem(`${player.nick} ${team.toUpperCase()} takimina atandi.`);
    this.emitAdminState();
  }

  makeSpectator(targetNick) {
    const player = this.findPlayerByNick(targetNick);
    if (!player) {
      return;
    }

    this.setPlayerSpectator(player, null);
    this.broadcastSystem(`${player.nick} izleyiciye alindi.`);
    this.emitAdminState();
  }

  findPlayerByNick(nick) {
    if (!nick) {
      return null;
    }

    const lowered = `${nick}`.toLowerCase();
    for (const p of this.players.values()) {
      const candidates = [
        p.nick,
        p.displayNick,
        p.requestedNick
      ].filter(Boolean).map((s) => `${s}`.toLowerCase());
      if (candidates.includes(lowered)) {
        return p;
      }
    }
    return null;
  }

  setPlayerSpectator(player, seatId = null) {
    const seat = this.pickSpectatorSeat(seatId);
    const removedFromQueue = this.removeFromReturnQueue(player.id);

    if (this.ball.ownerId === player.id) {
      this.ball.ownerId = null;
    }

    if (this.goalkeepers.red === player.id) this.goalkeepers.red = null;
    if (this.goalkeepers.blue === player.id) this.goalkeepers.blue = null;
    this.keeperZoneState.delete(player.id);

    player.role = PLAYER_ROLE.spectator;
    player.team = TEAM.spectator;
    player.seatId = seat.seatId;
    player.spectatorMode = 'seat';
    player.pos = { ...seat.pos };
    player.vel = { x: 0, y: 0, z: 0 };
    player.yaw = seat.yaw;
    player.simBasisYaw = player.yaw;
    player.input = createInputState();
    player.input.headingYaw = seat.yaw;
    player.input.basisYaw = seat.yaw;
    player.input.movementMode = 'basis_yaw';
    player.input.lookYaw = seat.yaw;
    player.input.facingYaw = seat.yaw;
    player.actionState.isSliding = false;
    player.actionState.slideUntil = 0;
    player.actionState.slideSpeed = 0;
    player.isGoalkeeper = false;

    if (removedFromQueue) {
      this.syncReturnQueuePositions();
    }

    this.processReturnQueue();
  }

  setSpectatorToActive(player, options = {}) {
    if (!player || player.role !== PLAYER_ROLE.spectator) {
      return false;
    }

    if (this.getActiveCount() >= this.activeCap) {
      return false;
    }

    const removedFromQueue = this.removeFromReturnQueue(player.id);

    const team = this.pickBalancedTeam();
    const spawn = this.pickSpawnForTeam(team);

    player.role = PLAYER_ROLE.active;
    player.team = team;
    player.seatId = null;
    player.spectatorMode = null;
    player.pos = { ...spawn.pos };
    player.vel = { x: 0, y: 0, z: 0 };
    player.yaw = spawn.yaw;
    player.simBasisYaw = player.yaw;
    player.input = createInputState();
    player.input.headingYaw = this.getTeamHeadingYaw(team);
    player.input.basisYaw = player.yaw;
    player.input.movementMode = 'basis_yaw';
    player.input.lookYaw = player.yaw;
    player.input.facingYaw = player.yaw;
    player.actionState = createActionState();
    player.cooldowns = createCooldowns();
    player.isGoalkeeper = false;
    this.keeperZoneState.delete(player.id);

    if (removedFromQueue) {
      this.syncReturnQueuePositions();
    }

    this.broadcastSystem(`${player.nick} tekrar ${team.toUpperCase()} takimina dondu.`);
    if (!options?.silentAdminState) {
      this.emitAdminState();
    }
    return true;
  }

  addBot(team = null) {
    if (this.botIds.length >= SERVER_CONFIG.botLimit) {
      this.broadcastSystem(`Bot limiti dolu (${SERVER_CONFIG.botLimit}).`);
      return;
    }

    if (this.getActiveCount() >= this.activeCap) {
      this.broadcastSystem('Bot eklenemedi: aktif limit dolu.');
      return;
    }

    const botTeam = [TEAM.red, TEAM.blue].includes(team)
      ? team
      : this.pickBalancedTeam();

    const spawn = this.pickSpawnForTeam(botTeam);
    const id = `bot-${this.botCounter++}`;

    const botPlayer = {
      id,
      nick: `Bot${this.botCounter}`,
      role: PLAYER_ROLE.bot,
      team: botTeam,
      isBot: true,
      isAdmin: false,
      faceSeed: Math.floor(Math.random() * 1000000000),
      pos: { ...spawn.pos },
      vel: { x: 0, y: 0, z: 0 },
      yaw: spawn.yaw,
      simBasisYaw: spawn.yaw,
      pitch: 0,
      stamina: 1,
      input: createInputState(),
      actionState: createActionState(),
      cooldowns: createCooldowns(),
      isGoalkeeper: false,
      seatId: null,
      spectatorMode: null,
      joinedAt: nowMs(),
      lastChatAt: 0,
      socketId: null,
      botState: {
        nextActionAt: 0,
        targetBias: randomFloat(-5, 5)
      }
    };
    botPlayer.input.headingYaw = this.getTeamHeadingYaw(botTeam);
    botPlayer.input.basisYaw = botPlayer.yaw;
    botPlayer.input.movementMode = 'basis_yaw';
    botPlayer.input.lookYaw = botPlayer.yaw;
    botPlayer.input.facingYaw = botPlayer.yaw;

    this.players.set(id, botPlayer);
    this.botIds.push(id);

    this.broadcastSystem(`${botPlayer.nick} eklendi (${botTeam.toUpperCase()}).`);
    this.emitAdminState();
  }

  removeBot(botId = null, options = {}) {
    let targetId = botId;

    if (!targetId) {
      targetId = this.botIds[this.botIds.length - 1] ?? null;
    }

    if (!targetId || !this.players.has(targetId)) {
      return;
    }

    const bot = this.players.get(targetId);
    if (!bot || !bot.isBot) {
      return;
    }

    this.players.delete(targetId);
    this.botIds = this.botIds.filter((id) => id !== targetId);
    this.keeperZoneState.delete(targetId);
    if (this.goalkeepers.red === targetId) this.goalkeepers.red = null;
    if (this.goalkeepers.blue === targetId) this.goalkeepers.blue = null;

    if (this.ball.ownerId === targetId) {
      this.ball.ownerId = null;
    }

    this.broadcastSystem(`${bot.nick} kaldirildi.`);
    if (!options?.skipQueueProcess) {
      this.processReturnQueue();
    }
    if (!options?.silentAdminState) {
      this.emitAdminState();
    }
  }

  removeAllBots() {
    for (const id of [...this.botIds]) {
      this.removeBot(id);
    }
  }

  kickPlayer(targetNick) {
    const player = this.findPlayerByNick(targetNick);
    if (!player || player.isBot) {
      return;
    }

    const socket = this.io.sockets.sockets.get(player.id);
    if (socket) {
      socket.disconnect(true);
    }

    this.broadcastSystem(`${player.nick} sunucudan cikarildi.`);
  }

  broadcastSystem(text) {
    this.broadcastMatchEvent('system', {
      text
    });
  }

  broadcastMatchEvent(type, data) {
    const payload = {
      type,
      data,
      ts: nowMs()
    };

    this.frameEvents.push(payload);
  }

  computeMatchEndStats() {
    const score = { ...this.score };
    let winner = 'draw';
    if (score.red > score.blue) winner = TEAM.red;
    else if (score.blue > score.red) winner = TEAM.blue;

    let top = null;
    for (const [playerId, stats] of this.goalsByPlayerId.entries()) {
      if (!stats || !Number.isFinite(stats.goals) || stats.goals <= 0) {
        continue;
      }

      if (!top) {
        top = { playerId, ...stats };
        continue;
      }

      const aGoals = Number(stats.goals) || 0;
      const bGoals = Number(top.goals) || 0;
      const aFirst = Number(stats.firstGoalAt) || Number.MAX_SAFE_INTEGER;
      const bFirst = Number(top.firstGoalAt) || Number.MAX_SAFE_INTEGER;

      if (aGoals > bGoals || (aGoals === bGoals && aFirst < bFirst)) {
        top = { playerId, ...stats };
      }
    }

    return {
      winner,
      score,
      topScorerId: top?.playerId || null,
      topScorerNick: '',
      topScorerGoals: Number(top?.goals) || 0
    };
  }

  maybeProcessMatchClock(now) {
    if (!this.matchDurationMs) {
      return;
    }

    if (this.matchEndFlow || this.goalFlow || this.pendingRestart) {
      return;
    }

    if (this.isFlowFrozen(now)) {
      return;
    }

    this.matchClockMs += TICK_MS;
    if (this.matchClockMs < this.matchDurationMs) {
      return;
    }

    this.triggerMatchEnd(now);
  }

  triggerMatchEnd(now) {
    if (this.matchEndFlow || this.goalFlow || this.pendingRestart || this.flowState !== FLOW_STATES.live) {
      return;
    }

    const endsAt = now + 6000;
    this.matchEndFlow = { endsAt };
    this.matchPausedUntil = endsAt;
    this.setFlowState(FLOW_STATES.matchEnd, endsAt);

    this.broadcastMatchEvent('matchEnd', this.computeMatchEndStats());
    this.emitSnapshots();
  }

  maybeProcessMatchEndFlow(now) {
    if (!this.matchEndFlow) {
      return;
    }

    if (now < this.matchEndFlow.endsAt) {
      return;
    }

    this.matchEndFlow = null;
    this.resetMatchState();
    this.matchClockMs = 0;
    this.goalsByPlayerId.clear();
    this.emitSnapshots();
  }

  tick() {
    this.serverTick += 1;
    const now = nowMs();

    this.maybeProcessMatchEndFlow(now);
    this.maybeProcessMatchClock(now);

    this.maybeProcessGoalFlow(now);
    this.updateBots(now);
    this.updateGoalkeepers(now);
    this.updatePlayers(now);
    this.resolvePlayerCollisions();

    this.updateBall(now);
    this.maybeProcessRestart(now);
    this.maybeProcessGoalFlow(now);

    this.captureReplayFrame(now);
  }

  updateBots(now) {
    if (this.isFlowFrozen(now)) {
      return;
    }

    for (const bot of this.getActivePlayers()) {
      if (!bot.isBot) {
        continue;
      }

      const toBallX = this.ball.pos.x - bot.pos.x;
      const toBallZ = this.ball.pos.z - bot.pos.z;
      const distBall = Math.hypot(toBallX, toBallZ);

      let targetX = this.ball.pos.x;
      let targetZ = this.ball.pos.z;

      if (distBall > 18) {
        targetX = bot.team === TEAM.red ? -6 : 6;
        targetZ = bot.team === TEAM.red ? -12 : 12;
      }

      const moveWorldX = targetX - bot.pos.x;
      const moveWorldZ = targetZ - bot.pos.z;
      const moveNorm = normalize2D(moveWorldX, moveWorldZ);
      const desiredYaw = Math.atan2(moveNorm.x, moveNorm.z);

      bot.input.moveX = 0;
      bot.input.moveZ = moveNorm.len > 0.01 ? 1 : 0;
      bot.input.headingYaw = this.getTeamHeadingYaw(bot.team);
      bot.input.movementMode = 'basis_yaw';
      bot.input.basisYaw = desiredYaw;
      bot.input.lookYaw = desiredYaw;
      bot.input.facingYaw = desiredYaw;
      bot.input.lookPitch = 0;
      bot.input.sprint = distBall > 6;
      bot.input.seq += 1;
      bot.input.tick = this.serverTick;
      bot.input.updatedAt = now;

      if (this.ball.ownerId === bot.id && now > bot.botState.nextActionAt) {
        const towardsGoal = bot.team === TEAM.red
          ? (this.field.halfDepth - bot.pos.z)
          : (bot.pos.z + this.field.halfDepth);

        if (towardsGoal < 14) {
          this.handleKickLikeAction(bot, ACTION_TYPES.shoot, 0.8, randomFloat(-0.2, 0.2));
        } else {
          this.handleKickLikeAction(bot, ACTION_TYPES.pass, 0.35, randomFloat(-0.15, 0.15));
        }

        bot.botState.nextActionAt = now + 900;
      }
    }
  }

  updateGoalkeepers(now) {
    const activeIds = new Set(this.getActivePlayers().map((p) => p.id));

    for (const [playerId, state] of this.keeperZoneState.entries()) {
      if (!activeIds.has(playerId)) {
        this.keeperZoneState.delete(playerId);
        continue;
      }

      if (state.team !== TEAM.red && state.team !== TEAM.blue) {
        this.keeperZoneState.delete(playerId);
      }
    }

    for (const player of this.getActivePlayers()) {
      const inZone = this.isInKeeperZone(player);
      const existing = this.keeperZoneState.get(player.id) || {
        team: player.team,
        inZone: false,
        enteredAt: 0,
        graceUntil: 0
      };

      existing.team = player.team;

      if (inZone) {
        if (!existing.inZone) {
          existing.enteredAt = now;
        }
        existing.inZone = true;
        existing.graceUntil = now + GAMEPLAY_CONFIG.keeperZoneExitGraceMs;
      } else if (existing.inZone) {
        existing.inZone = false;
        existing.graceUntil = now + GAMEPLAY_CONFIG.keeperZoneExitGraceMs;
      }

      this.keeperZoneState.set(player.id, existing);
    }

    for (const team of [TEAM.red, TEAM.blue]) {
      const keeperId = this.goalkeepers[team];
      if (keeperId) {
        const keeper = this.players.get(keeperId);
        const keeperState = this.keeperZoneState.get(keeperId);
        const invalidKeeper = (
          !keeper
          || !(keeper.role === PLAYER_ROLE.active || keeper.role === PLAYER_ROLE.bot)
          || keeper.team !== team
          || !keeperState
          || (!keeperState.inZone && now > keeperState.graceUntil)
        );
        if (invalidKeeper) {
          this.goalkeepers[team] = null;
        }
      }

      if (!this.goalkeepers[team]) {
        const candidates = this.getActivePlayers(team)
          .filter((p) => {
            const state = this.keeperZoneState.get(p.id);
            if (!state) return false;
            return state.inZone;
          })
          .sort((a, b) => {
            const aState = this.keeperZoneState.get(a.id);
            const bState = this.keeperZoneState.get(b.id);
            const aEntered = aState?.enteredAt ?? Number.MAX_SAFE_INTEGER;
            const bEntered = bState?.enteredAt ?? Number.MAX_SAFE_INTEGER;
            if (aEntered === bEntered) {
              return a.joinedAt - b.joinedAt;
            }
            return aEntered - bEntered;
          });

        this.goalkeepers[team] = candidates[0]?.id ?? null;
      }
    }

    for (const p of this.players.values()) {
      p.isGoalkeeper = false;
    }

    const redKeeper = this.goalkeepers.red ? this.players.get(this.goalkeepers.red) : null;
    const blueKeeper = this.goalkeepers.blue ? this.players.get(this.goalkeepers.blue) : null;
    if (redKeeper) redKeeper.isGoalkeeper = true;
    if (blueKeeper) blueKeeper.isGoalkeeper = true;
  }

  updatePlayers(now) {
    const freeze = this.isFlowFrozen(now);
    const xLimit = this.field.halfWidth - 0.55;
    const zLimit = this.field.halfDepth - 0.55;
    const movementConfig = {
      ...GAMEPLAY_CONFIG,
      xLimit,
      zLimit
    };

    for (const player of this.getActivePlayers()) {
      const input = player.input;
      const movementMode = input.movementMode === 'locked_heading'
        ? 'locked_heading'
        : 'basis_yaw';
      const headingYaw = this.getTeamHeadingYaw(player.team);
      const desiredBasisYaw = movementMode === 'locked_heading'
        ? headingYaw
        : wrapAngleRad(input.basisYaw);
      const prevSimBasisYaw = wrapAngleRad(safeNumber(player.simBasisYaw, desiredBasisYaw));
      const maxBasisDelta = 0.35;
      const basisDiff = shortestAngleDiff(prevSimBasisYaw, desiredBasisYaw);
      const basisYaw = Math.abs(basisDiff) > maxBasisDelta
        ? wrapAngleRad(prevSimBasisYaw + Math.sign(basisDiff) * maxBasisDelta)
        : desiredBasisYaw;
      player.simBasisYaw = basisYaw;
      player.pitch = clamp(safeNumber(input.lookPitch, player.pitch), -1.0, 0.9);

      const action = player.actionState;
      const slidingByTimer = action.isSliding && action.slideUntil > now;

      if (freeze) {
        player.vel.x = 0;
        player.vel.z = 0;
        player.pos.y = GAMEPLAY_CONFIG.playerCenterY;
        if (action.slideUntil <= now) {
          action.isSliding = false;
          action.slideSpeed = 0;
        }
        continue;
      }

      const next = stepCharacterMotion(
        {
          posX: player.pos.x,
          posZ: player.pos.z,
          velX: player.vel.x,
          velZ: player.vel.z,
          yaw: player.yaw,
          stamina: player.stamina,
          slideActive: slidingByTimer,
          slideDirX: action.slideDirX,
          slideDirZ: action.slideDirZ,
          slideSpeed: action.slideSpeed
        },
        {
          moveX: input.moveX,
          moveZ: input.moveZ,
          sprint: input.sprint,
          basisYaw,
          headingYaw,
          movementMode,
          lookYaw: input.lookYaw
        },
        movementConfig,
        DT
      );

      player.pos.x = next.posX;
      player.pos.z = next.posZ;
      player.pos.y = GAMEPLAY_CONFIG.playerCenterY;
      player.vel.x = next.velX;
      player.vel.z = next.velZ;
      player.yaw = next.yaw;
      player.stamina = next.stamina;
      action.slideDirX = next.slideDirX;
      action.slideDirZ = next.slideDirZ;
      action.slideSpeed = next.slideSpeed;
      action.isSliding = next.slideActive && action.slideUntil > now;

      if (action.slideUntil <= now || action.slideSpeed <= GAMEPLAY_CONFIG.slideStopSpeed) {
        action.isSliding = false;
        action.slideSpeed = 0;
      }
    }
  }

  resolvePlayerCollisions() {
    const players = this.getActivePlayers();
    const minDist = GAMEPLAY_CONFIG.playerRadius * 2;

    for (let i = 0; i < players.length; i += 1) {
      for (let j = i + 1; j < players.length; j += 1) {
        const a = players[i];
        const b = players[j];

        const dx = b.pos.x - a.pos.x;
        const dz = b.pos.z - a.pos.z;
        const dist = Math.hypot(dx, dz);

        if (dist >= minDist || dist <= 1e-6) {
          continue;
        }

        const overlap = minDist - dist;
        const nx = dx / dist;
        const nz = dz / dist;

        a.pos.x -= nx * overlap * 0.5;
        a.pos.z -= nz * overlap * 0.5;
        b.pos.x += nx * overlap * 0.5;
        b.pos.z += nz * overlap * 0.5;
      }
    }
  }

  updateBall(now) {
    if (this.isFlowFrozen(now)) {
      this.ball.vel.x = 0;
      this.ball.vel.y = 0;
      this.ball.vel.z = 0;
      this.ball.spin.y *= 0.96;
      return;
    }

    this.applySlideSteals();

    if (this.ball.ownerId && this.players.has(this.ball.ownerId)) {
      const owner = this.players.get(this.ball.ownerId);
      if (owner.role === PLAYER_ROLE.spectator) {
        this.ball.ownerId = null;
      } else {
        let dirX = Math.sin(owner.yaw);
        let dirZ = Math.cos(owner.yaw);
        const ownerSpeed = Math.hypot(owner.vel.x, owner.vel.z);
        if (ownerSpeed > 1.2) {
          dirX = owner.vel.x / ownerSpeed;
          dirZ = owner.vel.z / ownerSpeed;
        }

        const carryDist = 0.72 + Math.min(0.18, ownerSpeed * 0.008);

        this.ball.pos.x = owner.pos.x + dirX * carryDist;
        this.ball.pos.z = owner.pos.z + dirZ * carryDist;
        this.ball.pos.y = this.field.groundY;

        this.ball.vel.x = owner.vel.x * 0.55;
        this.ball.vel.z = owner.vel.z * 0.55;
        this.ball.vel.y = 0;
        return;
      }
    }

    this.ball.vel.y += GAMEPLAY_CONFIG.ballGravity * DT;

    this.ball.pos.x += this.ball.vel.x * DT;
    this.ball.pos.y += this.ball.vel.y * DT;
    this.ball.pos.z += this.ball.vel.z * DT;

    this.ball.vel.x *= GAMEPLAY_CONFIG.ballDampingAir;
    this.ball.vel.z *= GAMEPLAY_CONFIG.ballDampingAir;

    const spin = this.ball.spin.y;
    if (Math.abs(spin) > 0.05) {
      const rotate = spin * DT * 0.045;
      const vx = this.ball.vel.x;
      const vz = this.ball.vel.z;
      this.ball.vel.x = vx * Math.cos(rotate) - vz * Math.sin(rotate);
      this.ball.vel.z = vx * Math.sin(rotate) + vz * Math.cos(rotate);
      this.ball.spin.y *= 0.985;
    }

    if (this.ball.pos.y <= this.field.groundY) {
      this.ball.pos.y = this.field.groundY;

      if (Math.abs(this.ball.vel.y) > 1.5) {
        this.ball.vel.y = -this.ball.vel.y * 0.56;
      } else {
        this.ball.vel.y = 0;
      }

      this.ball.vel.x *= GAMEPLAY_CONFIG.ballDampingGround;
      this.ball.vel.z *= GAMEPLAY_CONFIG.ballDampingGround;
    }

    this.resolveBallBoundaries(now);
    this.applyBallPlayerInteractions();
    this.tryAcquirePossession();
  }

  resolveBallBoundaries(now) {
    const hw = this.field.halfWidth;
    const hz = this.field.halfDepth;

    if (this.ball.pos.x > hw) {
      this.ball.pos.x = hw;
      this.ball.vel.x = -Math.abs(this.ball.vel.x) * GAMEPLAY_CONFIG.wallRestitution;
      this.ball.vel.z *= GAMEPLAY_CONFIG.wallTangentialFriction;
      this.ball.spin.y *= 0.96;
    } else if (this.ball.pos.x < -hw) {
      this.ball.pos.x = -hw;
      this.ball.vel.x = Math.abs(this.ball.vel.x) * GAMEPLAY_CONFIG.wallRestitution;
      this.ball.vel.z *= GAMEPLAY_CONFIG.wallTangentialFriction;
      this.ball.spin.y *= 0.96;
    }

    if (Math.abs(this.ball.pos.z) > hz) {
      if (
        this.pendingRestart
        || this.flowState !== FLOW_STATES.live
        || now < this.goalLockUntil
      ) {
        this.ball.pos.z = clamp(this.ball.pos.z, -hz, hz);
        this.ball.vel.z = 0;
        return;
      }

      const isGoalMouth = Math.abs(this.ball.pos.x) <= this.field.goalHalfWidth
        && this.ball.pos.y <= this.field.goalHeight;

      if (isGoalMouth) {
        const scoredTeam = this.ball.pos.z < 0 ? TEAM.blue : TEAM.red;
        this.handleGoal(scoredTeam, now);
        return;
      }

      const lastTouch = this.ball.lastTouch?.team || TEAM.red;
      const signZ = Math.sign(this.ball.pos.z) || 1;

      if (signZ < 0) {
        if (lastTouch === TEAM.red) {
          this.queueRestart({
            kind: 'corner',
            team: TEAM.blue,
            pos: {
              x: (Math.sign(this.ball.pos.x) || 1) * (hw - 0.3),
              y: this.field.groundY,
              z: -hz + 0.3
            },
            reason: 'corner'
          }, now);
        } else {
        this.queueRestart({
          kind: 'goalKick',
          team: TEAM.red,
          pos: { x: 0, y: this.field.groundY, z: -hz + 5.5 },
          reason: 'goal-kick'
        }, now);
        }
      } else if (lastTouch === TEAM.blue) {
        this.queueRestart({
          kind: 'corner',
          team: TEAM.red,
          pos: {
            x: (Math.sign(this.ball.pos.x) || 1) * (hw - 0.3),
            y: this.field.groundY,
            z: hz - 0.3
          },
          reason: 'corner'
        }, now);
      } else {
      this.queueRestart({
        kind: 'goalKick',
        team: TEAM.blue,
        pos: { x: 0, y: this.field.groundY, z: hz - 5.5 },
        reason: 'goal-kick'
      }, now);
      }
      return;
    }

    if (this.ball.pos.y < -10) {
      this.queueRestart({
        kind: 'reset',
        team: null,
        pos: { x: 0, y: 1.8, z: 0 },
        reason: 'reset'
      }, now);
    }
  }

  queueRestart(payload, now) {
    if (this.pendingRestart) {
      return;
    }

    const restartPos = {
      x: clamp(safeNumber(payload?.pos?.x, 0), -this.field.halfWidth + 0.35, this.field.halfWidth - 0.35),
      y: safeNumber(payload?.pos?.y, this.field.groundY),
      z: clamp(safeNumber(payload?.pos?.z, 0), -this.field.halfDepth + 0.35, this.field.halfDepth - 0.35)
    };

    this.pendingRestart = {
      ...payload,
      pos: restartPos,
      at: now + GAMEPLAY_CONFIG.restartFreezeMs
    };

    this.ball.ownerId = null;
    this.ball.vel.x = 0;
    this.ball.vel.y = 0;
    this.ball.vel.z = 0;
    this.ball.spin.y = 0;

    this.matchPausedUntil = this.pendingRestart.at;
    this.setFlowState(FLOW_STATES.goalFreeze, this.pendingRestart.at);

    this.broadcastMatchEvent('ballOut', {
      reason: payload.reason,
      team: payload.team,
      restartAt: this.pendingRestart.at
    });
  }

  maybeProcessRestart(now) {
    if (!this.pendingRestart || now < this.pendingRestart.at) {
      return;
    }

    const restart = this.pendingRestart;
    this.pendingRestart = null;

    this.ball.pos = { ...restart.pos };
    this.ball.vel = { x: 0, y: 0, z: 0 };
    this.ball.spin.y = 0;
    this.ball.ownerId = null;

    if (restart.kind === 'kickoff') {
      this.ball.pos = { x: 0, y: this.field.groundY, z: 0 };
    }

    this.broadcastMatchEvent('restart', {
      kind: restart.kind,
      team: restart.team
    });
    this.setFlowState(FLOW_STATES.live, 0);
    this.matchPausedUntil = 0;
    this.emitSnapshots();
  }

  maybeProcessGoalFlow(now) {
    if (!this.goalFlow) {
      return;
    }

    if (
      this.goalFlow.phase === FLOW_STATES.goalFreeze
      && now >= this.goalFlow.replayStartAt
    ) {
      if (this.goalFlow.replayPayload) {
        if (!this.goalFlow.replayEmitted) {
          this.goalFlow.replayEmitted = true;
          this.io.to(this.roomId).emit(EVENTS.replayClip, this.goalFlow.replayPayload);
        }
        this.goalFlow.phase = FLOW_STATES.replay;
        this.setFlowState(FLOW_STATES.replay, this.goalFlow.replayEndsAt);
      } else {
        this.goalFlow.phase = FLOW_STATES.kickoffCountdown;
        this.setFlowState(FLOW_STATES.kickoffCountdown, this.goalFlow.kickoffEndsAt);
      }
      this.emitSnapshots();
      return;
    }

    if (
      this.goalFlow.phase === FLOW_STATES.replay
      && now >= this.goalFlow.replayEndsAt
    ) {
      this.goalFlow.phase = FLOW_STATES.kickoffCountdown;
      this.setFlowState(FLOW_STATES.kickoffCountdown, this.goalFlow.kickoffEndsAt);
      this.emitSnapshots();
      return;
    }

    if (
      this.goalFlow.phase === FLOW_STATES.kickoffCountdown
      && now >= this.goalFlow.kickoffEndsAt
    ) {
      const kickoffTeam = this.goalFlow.kickoffTeam;
      this.goalFlow = null;
      this.matchPausedUntil = 0;
      this.setFlowState(FLOW_STATES.live, 0);
      this.goalLockUntil = now + 120;

      this.broadcastMatchEvent('restart', {
        kind: 'kickoff',
        team: kickoffTeam
      });
      this.emitSnapshots();
    }
  }

  handleGoal(team, now) {
    if (
      this.pendingRestart
      || this.goalFlow
      || this.flowState !== FLOW_STATES.live
      || now < this.goalLockUntil
    ) {
      return;
    }

    this.goalSeq += 1;
    const goalSeq = this.goalSeq;

    this.score[team] += 1;

    const scorerId = this.ball.lastTouch?.id || null;
    if (scorerId) {
      const prev = this.goalsByPlayerId.get(scorerId) || {
        goals: 0,
        firstGoalAt: now
      };
      if (!prev.goals) {
        prev.firstGoalAt = now;
      }
      prev.goals = (Number(prev.goals) || 0) + 1;
      this.goalsByPlayerId.set(scorerId, prev);
    }
    const kickoffTeam = team === TEAM.red ? TEAM.blue : TEAM.red;

    const replayPayload = this.buildReplayClipPayload(now, goalSeq);
    const replayDurationMs = replayPayload ? replayPayload.durationMs : 0;
    const goalFreezeUntil = now + GAMEPLAY_CONFIG.goalFreezeMs;
    const replayEndsAt = replayPayload ? (goalFreezeUntil + replayDurationMs) : goalFreezeUntil;
    const kickoffEndsAt = replayEndsAt + GAMEPLAY_CONFIG.kickoffCountdownMs;

    this.goalFlow = {
      goalSeq,
      kickoffTeam,
      phase: FLOW_STATES.goalFreeze,
      replayPayload,
      replayStartAt: goalFreezeUntil,
      replayEndsAt,
      kickoffEndsAt,
      replayEmitted: false
    };

    this.matchPausedUntil = kickoffEndsAt;
    this.goalLockUntil = kickoffEndsAt + GAMEPLAY_CONFIG.goalLockMs;
    this.setFlowState(FLOW_STATES.goalFreeze, goalFreezeUntil);

    this.broadcastMatchEvent('goal', {
      team,
      scorerId,
      score: { ...this.score },
      goalSeq
    });

    this.ball.pos = { x: 0, y: this.field.groundY, z: 0 };
    this.ball.ownerId = null;
    this.ball.vel = { x: 0, y: 0, z: 0 };
    this.ball.spin.y = 0;

    this.resetPlayerSpawnsAfterGoal();
    this.emitSnapshots();
  }

  resetPlayerSpawnsAfterGoal() {
    for (const player of this.getActivePlayers()) {
      const spawn = this.pickSpawnForTeam(player.team);
      player.pos = { ...spawn.pos };
      player.vel = { x: 0, y: 0, z: 0 };
      player.yaw = spawn.yaw;
      player.simBasisYaw = player.yaw;
      player.input.moveX = 0;
      player.input.moveZ = 0;
      player.input.sprint = false;
      player.input.headingYaw = this.getTeamHeadingYaw(player.team);
      player.input.basisYaw = player.yaw;
      player.input.movementMode = 'basis_yaw';
      player.input.lookYaw = player.yaw;
      player.input.facingYaw = player.yaw;
      player.actionState.isSliding = false;
      player.actionState.slideSpeed = 0;
      player.actionState.slideUntil = 0;
      player.pos.y = GAMEPLAY_CONFIG.playerCenterY;
    }
  }

  applySlideSteals() {
    const now = nowMs();
    const ownerId = this.ball.ownerId && this.players.has(this.ball.ownerId)
      ? this.ball.ownerId
      : null;
    const owner = ownerId ? this.players.get(ownerId) : null;
    const ownerTeam = owner ? owner.team : null;

    for (const player of this.getActivePlayers()) {
      if (!player.actionState.isSliding || player.actionState.slideUntil < now) {
        continue;
      }

      // Don't "steal" from yourself, and avoid same-team steals (feels broken).
      if (ownerId && player.id === ownerId) {
        continue;
      }
      if (ownerTeam && player.team === ownerTeam) {
        continue;
      }

      // Slightly larger window when the ball is owned (ball is carried ahead of the owner).
      const radius = ownerId
        ? (GAMEPLAY_CONFIG.slideStealRadius * 1.12)
        : GAMEPLAY_CONFIG.slideStealRadius;

      const dist = Math.hypot(this.ball.pos.x - player.pos.x, this.ball.pos.z - player.pos.z);
      if (dist <= radius) {
        this.ball.ownerId = player.id;
        this.ball.lastTouch = { id: player.id, team: player.team };
        this.ball.vel.x = 0;
        this.ball.vel.y = 0;
        this.ball.vel.z = 0;
        this.ball.spin.y = 0;
        return;
      }
    }
  }

  applyBallPlayerInteractions() {
    if (this.ball.ownerId) {
      return;
    }

    for (const player of this.getActivePlayers()) {
      const dx = this.ball.pos.x - player.pos.x;
      const dz = this.ball.pos.z - player.pos.z;
      const dist = Math.hypot(dx, dz);
      const minDist = GAMEPLAY_CONFIG.playerRadius + GAMEPLAY_CONFIG.ballRadius;

      if (dist <= 1e-6 || dist >= minDist) {
        continue;
      }

      const nx = dx / dist;
      const nz = dz / dist;
      const overlap = minDist - dist;

      this.ball.pos.x += nx * overlap;
      this.ball.pos.z += nz * overlap;

      this.ball.vel.x += nx * 6;
      this.ball.vel.z += nz * 6;
    }
  }

  tryAcquirePossession() {
    if (this.ball.ownerId || this.pendingRestart || this.flowState !== FLOW_STATES.live) {
      return;
    }

    const ballSpeed = Math.hypot(this.ball.vel.x, this.ball.vel.z);
    if (ballSpeed > 11.5) {
      return;
    }

    for (const player of this.getActivePlayers()) {
      const dx = this.ball.pos.x - player.pos.x;
      const dz = this.ball.pos.z - player.pos.z;
      const dist = Math.hypot(dx, dz);

      if (dist > GAMEPLAY_CONFIG.possessionRadius) {
        continue;
      }

      const dir = normalize2D(dx, dz);
      const fwdX = Math.sin(player.yaw);
      const fwdZ = Math.cos(player.yaw);
      const dot = dir.x * fwdX + dir.z * fwdZ;

      if (dot < GAMEPLAY_CONFIG.possessionFacingDot) {
        continue;
      }

      this.ball.ownerId = player.id;
      this.ball.lastTouch = { id: player.id, team: player.team };
      this.ball.vel.x *= 0.2;
      this.ball.vel.z *= 0.2;
      this.ball.vel.y = 0;
      this.ball.pos.y = this.field.groundY;
      break;
    }
  }

  captureReplayFrame(now) {
    if (!SERVER_CONFIG.enableReplay) {
      return;
    }
    if (this.flowState !== FLOW_STATES.live) {
      return;
    }

    const frame = {
      ts: now,
      tick: this.serverTick,
      ball: {
        pos: { ...this.ball.pos },
        vel: { ...this.ball.vel },
        ownerId: this.ball.ownerId,
        lastTouch: this.ball.lastTouch
      },
      players: this.getActivePlayers().map((p) => ({
        id: p.id,
        nick: p.nick,
        team: p.team,
        faceSeed: Number.isFinite(p.faceSeed) ? p.faceSeed : 0,
        pos: { ...p.pos },
        yaw: p.yaw,
        role: p.role
      }))
    };

    this.replayBuffer.push(frame);

    const cutoff = now - MATCH_DEFAULTS.replayBufferMs;
    while (this.replayBuffer.length && this.replayBuffer[0].ts < cutoff) {
      this.replayBuffer.shift();
    }
  }

  buildReplayClipPayload(now, goalSeq) {
    if (!SERVER_CONFIG.enableReplay) {
      return null;
    }

    const fromMs = MATCH_DEFAULTS.replayClipMs;
    const cutoff = now - fromMs;
    const frames = this.replayBuffer.filter((f) => f.ts >= cutoff && f.ts <= now);

    if (frames.length < 2) {
      return null;
    }

    const maxFrames = 100;
    const stride = Math.max(1, Math.ceil(frames.length / maxFrames));
    const keyframes = [];

    for (let i = 0; i < frames.length; i += stride) {
      keyframes.push(frames[i]);
    }

    const last = frames[frames.length - 1];
    if (keyframes[keyframes.length - 1] !== last) {
      keyframes.push(last);
    }

    const durationMs = Math.max(1200, last.ts - frames[0].ts);

    return {
      clipId: `goal-${goalSeq}-${this.replayCounter++}`,
      goalSeq,
      fromMs,
      durationMs,
      keyframes
    };
  }

  emitSnapshots() {
    const snapshotNow = nowMs();
    const playersPublic = this.serializePlayersFor(false);
    const playersAdmin = this.serializePlayersFor(true);
    const ballPublic = this.serializeBallFor(false);
    const ballAdmin = this.serializeBallFor(true);
    const score = { ...this.score };
    const events = this.frameEvents.splice(0, this.frameEvents.length);

    const sockets = this.io.sockets.sockets;
    for (const socket of sockets.values()) {
      const player = this.players.get(socket.id);
      if (!player) {
        continue;
      }

      const receiverIsAdmin = this.isSuperAdmin(socket.id);
      socket.emit(EVENTS.snapshot, {
        roomId: this.roomId,
        serverTick: this.serverTick,
        ackSeq: player.input.seq,
        players: receiverIsAdmin ? playersAdmin : playersPublic,
        ball: receiverIsAdmin ? ballAdmin : ballPublic,
        score,
        events,
        flowState: this.flowState,
        flowEndsAt: this.flowEndsAt,
        matchClockMs: this.matchClockMs,
        matchDurationMs: this.matchDurationMs,
        serverNowMs: snapshotNow,
        simVersion: SIM_VERSION,
        perfFlags: this.getPerfFlags(),
        featureGates: this.getFeatureGates()
      });
    }
  }

  resetMatchState() {
    this.score.red = 0;
    this.score.blue = 0;
    this.ball = createBallState();
    this.goalsByPlayerId.clear();
    this.matchClockMs = 0;
    this.matchEndFlow = null;
    this.pendingRestart = null;
    this.matchPausedUntil = 0;
    this.goalFlow = null;
    this.goalLockUntil = 0;
    this.setFlowState(FLOW_STATES.live, 0);
    this.replayBuffer = [];
    this.replayCounter = 1;
    this.goalkeepers.red = null;
    this.goalkeepers.blue = null;
    this.keeperZoneState.clear();
    this.returnQueue = [];

    for (const player of this.getActivePlayers()) {
      const spawn = this.pickSpawnForTeam(player.team);
      player.pos = { ...spawn.pos };
      player.vel = { x: 0, y: 0, z: 0 };
      player.yaw = spawn.yaw;
      player.simBasisYaw = player.yaw;
      player.input = createInputState();
      player.input.headingYaw = this.getTeamHeadingYaw(player.team);
      player.input.basisYaw = player.yaw;
      player.input.movementMode = 'basis_yaw';
      player.input.lookYaw = player.yaw;
      player.input.facingYaw = player.yaw;
      player.actionState = createActionState();
      player.cooldowns = createCooldowns();
      player.stamina = 1;
      player.isGoalkeeper = false;
    }

    this.broadcastSystem('Mac yeniden baslatildi.');
  }
}

