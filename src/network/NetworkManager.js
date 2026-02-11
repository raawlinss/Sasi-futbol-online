import * as THREE from 'three';
import io from 'socket.io-client';
import { RemotePlayer } from './RemotePlayer.js';
import {
  CLIENT_VERSION,
  EVENTS,
  FLOW_STATES,
  QUICK_COMMAND_TEXT
} from '../../shared/protocol/index.js';

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function angleLerp(a, b, t) {
  const d = Math.atan2(Math.sin(b - a), Math.cos(b - a));
  return a + d * t;
}

function ballPos(frame) {
  return frame?.ball?.pos || { x: 0, y: 0.35, z: 0 };
}

export class NetworkManager {
  constructor(world) {
    this.world = world;
    this.upAxis = new THREE.Vector3(0, 1, 0);
    const params = new URLSearchParams(window.location.search || '');
    const forcedUrl = `${params.get('socket') || ''}`.trim() || `${localStorage.getItem('SOCKET_URL') || ''}`.trim();
    const defaultDevUrl = `${window.location.protocol}//${window.location.hostname}:3000`;
    const fileLike = window.location.protocol === 'file:';
    // Vite dev/preview ports are not stable (can be 5173, 5174, 4173, ...). If we're not on the game server port,
    // default to :3000 unless user overrides via ?socket=... or localStorage.SOCKET_URL.
    const port = `${window.location.port || ''}`;
    const likelyDevFrontend = !!port && port !== '3000' && !fileLike;
    const socketUrl = forcedUrl || (fileLike ? 'http://localhost:3000' : (likelyDevFrontend ? defaultDevUrl : ''));
    // Allow both polling + websocket; some networks block websocket and would make rooms "do nothing".
    this.socket = socketUrl ? io(socketUrl) : io();
    this.socketUrl = socketUrl || '';
    this.socketConnected = false;
    this.pendingRoomAction = null;
    this.serverHello = null;

    this.myId = null;
    this.roomId = null;
    this.nickname = null;
    this.matchConfig = null;
    this.remotePlayers = {};
    this.adminState = null;
    this.rooms = [];
    this.lastPlayersData = {};

    this.myRole = 'active';
    this.flowState = FLOW_STATES.live;
    this.flowEndsAt = 0;

    this.matchClockMs = 0;
    this.matchDurationMs = 0;
    this.matchClockLocalAt = performance.now();

    this.lastSnapshotAt = performance.now();
    this.lastServerTick = -1;
    this.serverNowMs = 0;
    this.lastServerNowMs = 0;
    this.simVersion = 'unknown';
    this.snapshotCount = 0;
    this.seenEventKeys = [];
    this.seenEventSet = new Set();
    this.statsAccumulator = 0;
    this.lastCorrectionP95 = 0;
    this.lastFrameP95 = 0;
    this.lastFpsAvg = 0;
    this.lastLobbySignature = '';
    this.lastReplayEndedAt = 0;
    this.lastReplayGoalSeq = 0;
    this.lastReplayClipId = null;
    this.matchEndHideTimer = null;
    this.featureGates = { replay: true, clouds: true, atmosphere: true };
    this.perfFlags = {
      stabilizationMode: false,
      replayEnabled: true,
      cloudsEnabled: true,
      atmosphereEnabled: true
    };
    this.spectatorQueueState = { queued: false, position: null, reason: '' };
    this.replayCameraPos = new THREE.Vector3();
    this.replayLookAt = new THREE.Vector3();
    this.upAxis = new THREE.Vector3(0, 1, 0);
    this.flowStatusText = '';

    this.replay = {
      active: false,
      goalSeq: 0,
      clipId: null,
      startedAt: 0,
      durationMs: 0,
      cursor: 0,
      keyframes: [],
      pendingSnapshot: null
    };

    this.ui = {
      redList: document.getElementById('red-list'),
      blueList: document.getElementById('blue-list'),
      spectatorList: document.getElementById('spectator-list'),
      chatMessages: document.getElementById('chat-messages'),
      flowStatus: document.getElementById('flow-status'),
      serverStats: document.getElementById('server-stats'),
      matchTimer: document.getElementById('match-timer'),
      adminPanel: document.getElementById('admin-panel'),
      spectatorPanel: document.getElementById('spectator-panel'),
      seatSelect: document.getElementById('seat-select'),
      replayOverlay: document.getElementById('replay-overlay'),
      replayText: document.getElementById('replay-text'),
      matchEndOverlay: document.getElementById('match-end-overlay'),
      matchEndWinner: document.getElementById('match-end-winner'),
      matchEndTopScorer: document.getElementById('match-end-topscorer'),
      lobbySpectatorToggle: document.getElementById('lobby-spectator-toggle')
    };

    window.matchFlowState = FLOW_STATES.live;
    window.matchFlowEndsAt = 0;
    window.__perfFlags = {
      ...this.perfFlags,
      featureGates: { ...this.featureGates }
    };
    this.world?.applyPerfFlags?.(window.__perfFlags);

    this.setupEvents();
  }

  setupEvents() {
    this.socket.on('connect', () => {
      this.myId = this.socket.id;
      this.socketConnected = true;
      window.dispatchEvent(new CustomEvent('socket:state', { detail: { connected: true, url: this.socketUrl || window.location.origin } }));
      this.updateStats();
    });

    this.socket.on('disconnect', () => {
      this.socketConnected = false;
      window.dispatchEvent(new CustomEvent('socket:state', { detail: { connected: false, url: this.socketUrl || window.location.origin } }));
    });

    this.socket.on('connect_error', (err) => {
      this.socketConnected = false;
      window.dispatchEvent(new CustomEvent('socket:error', { detail: { message: err?.message || 'connect_error' } }));
    });

    this.socket.on(EVENTS.serverHello, (payload) => {
      this.serverHello = payload || null;
      window.dispatchEvent(new CustomEvent('server:hello', { detail: { hello: this.serverHello } }));
    });

    this.socket.on(EVENTS.initSnapshot, (data) => {
      this.myId = data.myId;
      this.roomId = `${data.roomId || ''}` || null;
      this.matchConfig = data.matchConfig;
      if (this.world?.setMatchConfig && data.matchConfig) {
        this.world.setMatchConfig(data.matchConfig);
      }
      this.applySnapshot(data, true, true);

      if (data.adminState) {
        this.updateAdminState(data.adminState);
      }

      window.dispatchEvent(new CustomEvent('join:accepted', { detail: { myId: this.myId } }));
    });

    this.socket.on(EVENTS.snapshot, (data) => {
      this.lastSnapshotAt = performance.now();
      if (typeof data?.roomId === 'string' && data.roomId) {
        this.roomId = data.roomId;
      }
      this.applySnapshot(data, false, false);
    });

    this.socket.on(EVENTS.matchEvent, (eventPayload) => {
      this.handleMatchEvent(eventPayload);
    });

    this.socket.on(EVENTS.replayClip, (clipData) => {
      this.handleReplayClip(clipData);
    });

    this.socket.on(EVENTS.adminState, (adminState) => {
      this.updateAdminState(adminState);
    });

    this.socket.on(EVENTS.spectatorQueueState, (queueState) => {
      this.handleSpectatorQueueState(queueState);
    });

    // Rooms removed in V1.4 (single instance). Legacy room events can be ignored safely.

    this.socket.on(EVENTS.playerLeft, (id) => {
      if (this.remotePlayers[id]) {
        this.remotePlayers[id].remove();
        delete this.remotePlayers[id];
      }
    });

    this.socket.on(EVENTS.joinDenied, (payload) => {
      window.dispatchEvent(new CustomEvent('join:denied', { detail: payload || {} }));
    });
  }

  update(now, delta) {
    this.statsAccumulator += delta;
    this.updateFlowStatus();
    this.updateMatchTimer(now);
    if (this.statsAccumulator >= 0.5) {
      this.updateStats();
      this.statsAccumulator = 0;
    }

    if (this.replay.active) {
      this.stepReplay(now);
      return;
    }

    // Avoid per-frame allocations from Object.keys().
    for (const id in this.remotePlayers) {
      this.remotePlayers[id].tick(delta);
    }
  }

  joinGame(nickname, adminPassword = null) {
    this.nickname = `${nickname || ''}`.trim();
    this.socket.emit(EVENTS.join, {
      nickname: this.nickname,
      clientVersion: CLIENT_VERSION,
      adminPassword: adminPassword ? `${adminPassword}` : undefined
    });
  }

  hello(nickname) {
    this.nickname = `${nickname || ''}`.trim();
    this.socket.emit(EVENTS.hello, {
      nickname: this.nickname,
      clientVersion: CLIENT_VERSION
    });
  }

  leaveToLogin() {
    this.resetForLobby('leaveToLogin', '');
    try {
      this.socket.disconnect();
    } catch {
      // ignore
    }
    setTimeout(() => {
      try {
        this.socket.connect();
      } catch {
        // ignore
      }
    }, 200);
  }

  roomCreate(payload) {
    if (!this.socketConnected) {
      window.dispatchEvent(new CustomEvent('room:error', { detail: { message: 'Socket bagli degil. Server calisiyor mu?' } }));
      return;
    }
    if (this.pendingRoomAction) {
      clearTimeout(this.pendingRoomAction.timer);
      this.pendingRoomAction = null;
    }
    this.pendingRoomAction = {
      kind: 'create',
      startedAt: performance.now(),
      timer: setTimeout(() => {
        this.pendingRoomAction = null;
        const url = this.socketUrl || window.location.origin;
        const hello = this.serverHello?.app ? `${this.serverHello.app}/${this.serverHello.protocol || ''}` : 'yok';
        window.dispatchEvent(new CustomEvent('room:error', { detail: { message: `Oda olusturma yaniti gelmedi. Baglanti URL: ${url} | serverHello: ${hello} | PORT/socket URL kontrol et.` } }));
      }, 2500)
    };
    this.socket.emit(
      EVENTS.roomCreate,
      {
        ...(payload || {}),
        nickname: this.nickname || undefined
      },
      (resp) => {
        if (!resp || typeof resp !== 'object') return;
        if (resp.ok === false) {
          if (this.pendingRoomAction) {
            clearTimeout(this.pendingRoomAction.timer);
            this.pendingRoomAction = null;
          }
          window.dispatchEvent(new CustomEvent('room:error', { detail: { message: `${resp.error || 'Oda olusturulamadi.'}` } }));
        }
      }
    );
  }

  roomJoin(roomId) {
    if (!this.socketConnected) {
      window.dispatchEvent(new CustomEvent('room:error', { detail: { message: 'Socket bagli degil. Server calisiyor mu?' } }));
      return;
    }
    if (this.pendingRoomAction) {
      clearTimeout(this.pendingRoomAction.timer);
      this.pendingRoomAction = null;
    }
    this.pendingRoomAction = {
      kind: 'join',
      startedAt: performance.now(),
      timer: setTimeout(() => {
        this.pendingRoomAction = null;
        const url = this.socketUrl || window.location.origin;
        const hello = this.serverHello?.app ? `${this.serverHello.app}/${this.serverHello.protocol || ''}` : 'yok';
        window.dispatchEvent(new CustomEvent('room:error', { detail: { message: `Odaya giris yaniti gelmedi. Baglanti URL: ${url} | serverHello: ${hello} | Oda var mi / server stabil mi kontrol et.` } }));
      }, 2500)
    };
    this.socket.emit(
      EVENTS.roomJoin,
      {
        roomId,
        nickname: this.nickname || undefined
      },
      (resp) => {
        if (!resp || typeof resp !== 'object') return;
        if (resp.ok === false) {
          if (this.pendingRoomAction) {
            clearTimeout(this.pendingRoomAction.timer);
            this.pendingRoomAction = null;
          }
          window.dispatchEvent(new CustomEvent('room:error', { detail: { message: `${resp.error || 'Odaya girilemedi.'}` } }));
        }
      }
    );
  }

  roomLeave() {
    this.socket.emit(EVENTS.roomLeave, {});
    this.resetForLobby('roomLeave', 'left');
  }

  sendRoomOwnerCommand(cmd, args = {}) {
    this.socket.emit(EVENTS.roomOwnerCommand, { cmd, args });
  }

  sendInputFrame(payload) {
    this.socket.emit(EVENTS.inputFrame, payload);
  }

  sendActionRequest(payload) {
    this.socket.emit(EVENTS.actionRequest, payload);
  }

  sendChat(text) {
    this.socket.emit(EVENTS.chatSend, { text });
  }

  sendQuickCommand(code) {
    this.socket.emit(EVENTS.quickCommand, { code });
  }

  sendSpectatorRequest(mode, seatId = null) {
    this.socket.emit(EVENTS.spectatorRequest, { mode, seatId });
  }

  sendAdminCommand(cmd, args = {}) {
    this.socket.emit(EVENTS.adminCommand, { cmd, args });
  }

  sendAdminMove(targetNick, team) {
    this.sendAdminCommand('forceTeam', { targetNick, team });
  }

  setActiveCap(cap) {
    this.sendAdminCommand('setCap', { cap });
  }

  addBot(team = null) {
    this.sendAdminCommand('addBot', { team });
  }

  removeBot() {
    this.sendAdminCommand('removeBot', {});
  }

  setFlowState(flowState, flowEndsAt = 0) {
    const normalized = Object.values(FLOW_STATES).includes(flowState)
      ? flowState
      : FLOW_STATES.live;
    this.flowState = normalized;
    this.flowEndsAt = Number.isFinite(flowEndsAt) ? flowEndsAt : 0;
    window.matchFlowState = this.flowState;
    window.matchFlowEndsAt = this.flowEndsAt;
    this.updateFlowStatus();
  }

  updateFlowStatus() {
    const flowEl = this.ui.flowStatus;
    if (!flowEl) return;

    if (this.flowState === FLOW_STATES.live) {
      if (this.flowStatusText !== '') {
        this.flowStatusText = '';
        flowEl.classList.remove('active');
        flowEl.textContent = '';
      }
      return;
    }

    const now = Date.now();
    const remainingMs = Math.max(0, (Number(this.flowEndsAt) || 0) - now);
    const sec = Math.max(0, Math.ceil(remainingMs / 1000));

    let label = 'REPLAY';
    if (this.flowState === FLOW_STATES.kickoffCountdown) {
      label = `BASLANGIC ${sec}`;
    } else if (this.flowState === FLOW_STATES.matchEnd) {
      label = `MAC BITTI ${sec}`;
    } else if (this.flowState !== FLOW_STATES.replay) {
      label = `DURAKLAMA ${sec}`;
    }

    if (label !== this.flowStatusText) {
      this.flowStatusText = label;
      flowEl.textContent = label;
    }

    flowEl.classList.add('active');
  }

  updateMatchTimer(nowPerf = performance.now()) {
    const el = this.ui.matchTimer;
    if (!el) return;

    if (!window.inRoom) {
      if (!el.classList.contains('hidden')) el.classList.add('hidden');
      return;
    }

    const durationMs = Number(this.matchDurationMs || 0);
    if (!Number.isFinite(durationMs) || durationMs <= 0) {
      if (!el.classList.contains('hidden')) el.classList.add('hidden');
      return;
    }

    const running = this.flowState === FLOW_STATES.live;
    let clockMs = Number(this.matchClockMs || 0);
    if (running) {
      const dtMs = Math.max(0, Number(nowPerf) - Number(this.matchClockLocalAt || 0));
      clockMs += dtMs;
    }
    clockMs = Math.max(0, Math.min(durationMs, clockMs));

    const leftMs = Math.max(0, durationMs - clockMs);
    const leftSec = Math.max(0, Math.ceil(leftMs / 1000));
    const m = Math.floor(leftSec / 60);
    const s = leftSec % 60;
    el.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    el.classList.remove('hidden');
  }

  applyFeatureGates(featureGates) {
    if (!featureGates || typeof featureGates !== 'object') {
      return;
    }
    this.featureGates = {
      ...this.featureGates,
      ...featureGates
    };
    this.applyPerfFlags({
      replayEnabled: this.featureGates.replay !== false,
      cloudsEnabled: this.featureGates.clouds !== false,
      atmosphereEnabled: this.featureGates.atmosphere !== false
    });
  }

  applyPerfFlags(perfFlags) {
    if (!perfFlags || typeof perfFlags !== 'object') {
      return;
    }
    this.perfFlags = {
      ...this.perfFlags,
      ...perfFlags
    };

    window.__perfFlags = {
      ...this.perfFlags,
      featureGates: { ...this.featureGates }
    };
    this.world?.applyPerfFlags?.(window.__perfFlags);
  }

  buildEventKey(eventPayload) {
    const type = eventPayload?.type || 'unknown';
    const ts = Number(eventPayload?.ts || 0);
    const data = eventPayload?.data || {};
    const tail = JSON.stringify(data).slice(0, 180);
    return `${type}|${ts}|${tail}`;
  }

  rememberEventKey(key) {
    if (this.seenEventSet.has(key)) {
      return false;
    }
    this.seenEventSet.add(key);
    this.seenEventKeys.push(key);
    while (this.seenEventKeys.length > 300) {
      const old = this.seenEventKeys.shift();
      if (old) {
        this.seenEventSet.delete(old);
      }
    }
    return true;
  }

  applySnapshot(data, isInit = false, force = false) {
    const serverTick = Number(data?.serverTick);
    if (Number.isFinite(serverTick)) {
      if (!isInit && serverTick <= this.lastServerTick) {
        return;
      }
      this.lastServerTick = Math.max(this.lastServerTick, serverTick);
    }

    let snapshotDtSec = null;
    const serverNowMs = Number(data?.serverNowMs);
    if (Number.isFinite(serverNowMs) && serverNowMs > 0) {
      if (!isInit && this.lastServerNowMs > 0 && serverNowMs < this.lastServerNowMs - 2) {
        return;
      }
      if (this.lastServerNowMs > 0) {
        snapshotDtSec = Math.max(0.01, Math.min(0.25, (serverNowMs - this.lastServerNowMs) / 1000));
      }
      this.lastServerNowMs = serverNowMs;
      this.serverNowMs = serverNowMs;
    }
    if (typeof data?.simVersion === 'string' && data.simVersion.length) {
      this.simVersion = data.simVersion;
    }

    this.setFlowState(data?.flowState, data?.flowEndsAt);
    this.applyPerfFlags(data?.perfFlags);
    this.applyFeatureGates(data?.featureGates);

    const matchClockMs = Number(data?.matchClockMs);
    if (Number.isFinite(matchClockMs)) {
      this.matchClockMs = Math.max(0, matchClockMs);
      this.matchClockLocalAt = performance.now();
    }
    const matchDurationMs = Number(data?.matchDurationMs);
    if (Number.isFinite(matchDurationMs)) {
      this.matchDurationMs = Math.max(0, matchDurationMs);
    }

    this.snapshotCount += 1;

    if (!force && this.replay.active && !isInit) {
      this.replay.pendingSnapshot = data;
      if (data.score) this.updateScoreboard(data.score);
      if (data.adminState) this.updateAdminState(data.adminState);
      return;
    }

    const players = data.players || {};
    this.lastPlayersData = players;
    if (this.world.ball && data.ball) {
      this.world.ball.updateFromServer(data.ball);
    }

    if (data.score) {
      this.updateScoreboard(data.score);
    }

    const myState = players[this.myId];
    if (myState && this.world.player?.setServerState) {
      this.world.player.setServerState(myState, data.ackSeq ?? null);
      this.applyLocalRoleState(myState);
    }

    const seen = new Set();
    for (const id of Object.keys(players)) {
      if (id === this.myId) continue;
      seen.add(id);

      if (!this.remotePlayers[id]) {
        this.remotePlayers[id] = new RemotePlayer(this.world, id, players[id]);
      }

      this.remotePlayers[id].updateVisuals(players[id], isInit, snapshotDtSec);
    }

    for (const id of Object.keys(this.remotePlayers)) {
      if (!seen.has(id)) {
        this.remotePlayers[id].remove();
        delete this.remotePlayers[id];
      }
    }

    const lobbySignature = this.buildLobbySignature(players);
    if (isInit || lobbySignature !== this.lastLobbySignature) {
      this.lastLobbySignature = lobbySignature;
      this.updateLobbyUI(players);
    }

    if (data.adminState) {
      this.updateAdminState(data.adminState);
    }

    if (Array.isArray(data.events)) {
      for (const eventPayload of data.events) {
        this.handleMatchEvent(eventPayload, true);
      }
    }
  }

  applyLocalRoleState(myState) {
    this.myRole = myState.role || 'active';
    window.isAdmin = !!myState.isAdmin;
    window.isSpectator = this.myRole === 'spectator' || !!myState.isSpectator;

    const banner = document.getElementById('nick-status-banner');
    const nickStatus = `${myState.nickStatus || ''}`;
    if (banner) {
      if (!window.isAdmin && nickStatus === 'pending') {
        banner.classList.remove('hidden');
      } else {
        banner.classList.add('hidden');
      }
    }
    if (!window.isSpectator && this.spectatorQueueState.queued) {
      this.spectatorQueueState = { queued: false, position: null, reason: 'joined' };
    }

    if (window.isAdmin) this.ui.adminPanel?.classList.remove('hidden');
    else this.ui.adminPanel?.classList.add('hidden');

    if (window.isSpectator) this.ui.spectatorPanel?.classList.remove('hidden');
    else this.ui.spectatorPanel?.classList.add('hidden');

    if (this.ui.lobbySpectatorToggle) {
      this.ui.lobbySpectatorToggle.textContent = window.isSpectator
        ? 'Takima Don'
        : 'Izleyici Moduna Gec';
    }
  }

  buildLobbySignature(playersData) {
    const parts = [];
    const ids = Object.keys(playersData).sort();
    for (const id of ids) {
      const p = playersData[id];
      parts.push(
        `${id}:${p.nick}:${p.team}:${p.role}:${p.isBot ? 1 : 0}:${p.isAdmin ? 1 : 0}`
      );
    }
    return parts.join('|');
  }

  updateLobbyUI(playersData) {
    const redList = this.ui.redList;
    const blueList = this.ui.blueList;
    const specList = this.ui.spectatorList;
    if (!redList || !blueList || !specList) return;

    redList.innerHTML = '';
    blueList.innerHTML = '';
    specList.innerHTML = '';

    const iAmAdmin = window.isAdmin === true;

    for (const id of Object.keys(playersData)) {
      const p = playersData[id];
      const li = document.createElement('li');
      li.className = 'player-item';

      const isMe = id === this.myId;
      const teamLabel = p.role === 'spectator' ? 'IZLEYICI' : p.team.toUpperCase();
      const status = `${isMe ? '(SEN) ' : ''}${p.nick} - ${teamLabel}${p.isBot ? ' [BOT]' : ''}`;

      const name = document.createElement('span');
      name.textContent = status;
      if (isMe) {
        name.style.fontWeight = '700';
        name.style.color = '#8bff8b';
      }
      li.appendChild(name);

      if (iAmAdmin && !p.isAdmin && !p.isBot) {
        li.appendChild(this.createAdminControls(p.nick));
      }

      if (p.role === 'spectator') {
        specList.appendChild(li);
      } else if (p.team === 'red') {
        redList.appendChild(li);
      } else if (p.team === 'blue') {
        blueList.appendChild(li);
      } else {
        specList.appendChild(li);
      }
    }
  }

  createAdminControls(targetNick) {
    const wrap = document.createElement('div');
    wrap.className = 'admin-controls';

    const mkButton = (label, cls, team) => {
      const btn = document.createElement('button');
      btn.className = `admin-btn ${cls}`;
      btn.textContent = label;
      btn.addEventListener('click', () => {
        this.sendAdminMove(targetNick, team);
      });
      return btn;
    };

    wrap.appendChild(mkButton('R', 'btn-to-red', 'red'));
    wrap.appendChild(mkButton('B', 'btn-to-blue', 'blue'));

    const spec = document.createElement('button');
    spec.className = 'admin-btn btn-to-spec';
    spec.textContent = 'S';
    spec.addEventListener('click', () => {
      this.sendAdminCommand('makeSpectator', { targetNick });
    });
    wrap.appendChild(spec);

    const kick = document.createElement('button');
    kick.className = 'admin-btn btn-kick';
    kick.textContent = 'K';
    kick.title = 'Kick';
    kick.addEventListener('click', () => {
      this.sendAdminCommand('kickPlayer', { targetNick });
    });
    wrap.appendChild(kick);

    return wrap;
  }

  updateScoreboard(score) {
    const redEl = document.getElementById('score-red');
    const blueEl = document.getElementById('score-blue');

    if (redEl) redEl.textContent = `${score.red}`;
    if (blueEl) blueEl.textContent = `${score.blue}`;
  }

  updateAdminState(adminState) {
    this.adminState = adminState;
    if (adminState?.featureGates) {
      this.applyFeatureGates(adminState.featureGates);
    }
    if (typeof adminState?.stabilizationMode === 'boolean') {
      this.applyPerfFlags({ stabilizationMode: adminState.stabilizationMode });
    }

    const capInfo = document.getElementById('admin-cap-info');
    if (capInfo) {
      const queueCount = Number.isFinite(adminState?.spectatorReturnQueue)
        ? adminState.spectatorReturnQueue
        : 0;
      const dur = Number.isFinite(adminState?.matchDurationMin) ? Math.max(0, Math.floor(adminState.matchDurationMin)) : 0;
      const durLabel = dur > 0 ? `${dur}dk` : 'Suresiz';
      const weather = `${adminState?.weatherMode || 'day'}`.toLowerCase() === 'night' ? 'night' : 'day';
      const weatherLabel = weather === 'night' ? 'Gece' : 'Gunduz';
      capInfo.textContent = `Aktif: ${adminState.activeCount}/${adminState.activeCap} | Izleyici: ${adminState.spectatorCount} | Bot: ${adminState.botCount} | Donus Kuyrugu: ${queueCount} | Sure: ${durLabel} | Hava: ${weatherLabel}`;
    }

    const activeCapInput = document.getElementById('admin-cap-input');
    if (activeCapInput && document.activeElement !== activeCapInput) {
      activeCapInput.value = `${adminState.activeCap}`;
    }

    const durationSelect = document.getElementById('admin-duration-select');
    if (durationSelect && document.activeElement !== durationSelect) {
      const dur = Number.isFinite(adminState?.matchDurationMin) ? Math.max(0, Math.floor(adminState.matchDurationMin)) : 0;
      durationSelect.value = `${dur}`;
    }

    const weatherSelect = document.getElementById('admin-weather-select');
    if (weatherSelect && document.activeElement !== weatherSelect) {
      const weather = `${adminState?.weatherMode || 'day'}`.toLowerCase() === 'night' ? 'night' : 'day';
      weatherSelect.value = weather;
    }

    const approvalList = document.getElementById('nick-approval-list');
    const approvalEmpty = document.getElementById('nick-approval-empty');
    if (approvalList && approvalEmpty) {
      const pending = Array.isArray(adminState?.pendingNickApprovals)
        ? adminState.pendingNickApprovals
        : [];

      approvalList.innerHTML = '';
      if (!pending.length) {
        approvalEmpty.style.display = 'block';
      } else {
        approvalEmpty.style.display = 'none';
        for (const item of pending) {
          const id = `${item?.id || ''}`;
          const requestedNick = `${item?.requestedNick || ''}`;
          if (!id) continue;

          const row = document.createElement('div');
          row.className = 'nick-approval-item';

          const label = document.createElement('div');
          label.innerHTML = `ID: <b>${id.slice(0, 6)}</b> | Nick: <b>${requestedNick || '-'}</b>`;
          row.appendChild(label);

          const actions = document.createElement('div');
          actions.className = 'nick-approval-actions';

          const approve = document.createElement('button');
          approve.className = 'btn-approve';
          approve.textContent = 'Approve';
          approve.addEventListener('click', () => {
            this.sendAdminCommand('approveNick', { targetId: id });
          });

          const reject = document.createElement('button');
          reject.className = 'btn-reject';
          reject.textContent = 'Reject';
          reject.addEventListener('click', () => {
            this.sendAdminCommand('rejectNick', { targetId: id });
          });

          actions.appendChild(approve);
          actions.appendChild(reject);
          row.appendChild(actions);

          approvalList.appendChild(row);
        }
      }
    }
  }

  resetForLobby(source = 'unknown', reason = '') {
    this.roomId = null;
    this.matchConfig = null;
    this.myRole = 'active';
    this.setFlowState(FLOW_STATES.live, 0);
    this.matchClockMs = 0;
    this.matchDurationMs = 0;
    this.matchClockLocalAt = performance.now();
    window.inRoom = false;
    window.isReplayActive = false;
    window.isSpectator = false;
    this.lastReplayEndedAt = 0;
    this.lastReplayGoalSeq = 0;
    this.lastReplayClipId = null;

    if (this.ui.matchEndOverlay) {
      this.ui.matchEndOverlay.classList.remove('active');
    }
    if (this.matchEndHideTimer) {
      clearTimeout(this.matchEndHideTimer);
      this.matchEndHideTimer = null;
    }

    for (const id of Object.keys(this.remotePlayers)) {
      this.remotePlayers[id]?.remove?.();
      delete this.remotePlayers[id];
    }

    if (this.world?.player) {
      this.world.player.pendingInputs.length = 0;
      this.world.player.isSpectator = true;
      this.world.player.role = 'spectator';
    }

    const redEl = document.getElementById('score-red');
    const blueEl = document.getElementById('score-blue');
    if (redEl) redEl.textContent = '0';
    if (blueEl) blueEl.textContent = '0';

    if (this.ui.matchTimer) {
      this.ui.matchTimer.classList.add('hidden');
      this.ui.matchTimer.textContent = '--:--';
    }

    const banner = document.getElementById('nick-status-banner');
    if (banner) {
      banner.classList.add('hidden');
    }

    this.pushChatLine(`[SISTEM] Ana menuye donuldu (${source}${reason ? `: ${reason}` : ''}).`, 'system');
  }

  pushChatLine(text, type = 'system') {
    const box = this.ui.chatMessages;
    if (!box) return;

    const line = document.createElement('div');
    line.className = `chat-line chat-${type}`;
    line.textContent = text;
    box.appendChild(line);

    while (box.children.length > 80) {
      box.removeChild(box.firstChild);
    }

    box.scrollTop = box.scrollHeight;
  }

  handleMatchEvent(eventPayload, fromSnapshot = false) {
    if (!eventPayload || !eventPayload.type) return;

    const eventKey = this.buildEventKey(eventPayload);
    if (!this.rememberEventKey(eventKey)) return;

    const { type, data } = eventPayload;
    const players = this.lastPlayersData || {};
    const resolveNick = (id) => {
      const p = players?.[id];
      return p?.nick || '';
    };

    if (type === 'goal') {
      const scorerName = data?.scorer || (data?.scorerId ? resolveNick(data.scorerId) : '');
      this.showGoalCelebration(data.team, scorerName);
      this.updateScoreboard(data.score);
      if (!fromSnapshot) {
        this.pushChatLine(`GOOL! ${data.team.toUpperCase()} - Gol: ${scorerName || '-'}`, 'system');
      }
      return;
    }

    if (type === 'matchEnd') {
      this.showMatchEndOverlay(data);
      if (!fromSnapshot) {
        const winner = `${data.winner || 'draw'}`.toUpperCase();
        const score = data.score ? `${data.score.red}-${data.score.blue}` : '--';
        this.pushChatLine(`[MAC] Bitti (${winner}) Skor: ${score}`, 'system');
      }
      return;
    }

    if (type === 'ballOut') {
      this.showBallOut(data);
      return;
    }

    if (type === 'weather') {
      const mode = `${data?.mode || 'day'}`.toLowerCase() === 'night' ? 'night' : 'day';
      this.world?.applyWeatherMode?.(mode);
      this.pushChatLine(`[SISTEM] Hava modu: ${mode === 'night' ? 'Gece' : 'Gunduz'}`, 'system');
      return;
    }

    if (type === 'chat') {
      const from = data?.from || (data?.fromId ? resolveNick(data.fromId) : '-');
      this.pushChatLine(`[${data.team}] ${from}: ${data.text}`, 'chat');
      return;
    }

    if (type === 'quickCommand') {
      const text = data.text || QUICK_COMMAND_TEXT[data.code] || data.code;
      const from = data?.from || (data?.fromId ? resolveNick(data.fromId) : '-');
      this.pushChatLine(`[KOMUT] ${from}: ${text}`, 'quick');

      const fromId = data?.fromId || null;
      if (fromId && this.world) {
        if (fromId === this.myId) {
          this.world.player?.showEmote?.(text, 3000);
        } else {
          this.remotePlayers?.[fromId]?.showEmote?.(text, 3000);
        }
      }
      return;
    }

    if (type === 'system') {
      if (data?.text) {
        this.pushChatLine(`[SISTEM] ${data.text}`, 'system');
        return;
      }

      const kind = `${data?.kind || ''}`;
      if (kind === 'playerJoined') {
        const nick = data?.nick || (data?.playerId ? resolveNick(data.playerId) : '');
        this.pushChatLine(`[SISTEM] ${nick || 'Bir oyuncu'} katildi.`, 'system');
        return;
      }
      if (kind === 'playerLeft') {
        const nick = data?.nick || (data?.playerId ? resolveNick(data.playerId) : '');
        this.pushChatLine(`[SISTEM] ${nick || 'Bir oyuncu'} ayrildi.`, 'system');
        return;
      }

      this.pushChatLine('[SISTEM] ...', 'system');
      return;
    }

    if (type === 'restart') {
      this.pushChatLine(`[OYUN] ${data.kind.toUpperCase()} yeniden basladi.`, 'system');
    }
  }

  showMatchEndOverlay(data) {
    const overlay = this.ui.matchEndOverlay;
    if (!overlay) return;

    const winner = `${data?.winner || 'draw'}`;
    const score = data?.score || { red: 0, blue: 0 };

    const winnerEl = this.ui.matchEndWinner;
    const topEl = this.ui.matchEndTopScorer;

    if (winnerEl) {
      if (winner === 'red') winnerEl.textContent = `KIRMIZI KAZANDI (${score.red}-${score.blue})`;
      else if (winner === 'blue') winnerEl.textContent = `MAVI KAZANDI (${score.red}-${score.blue})`;
      else winnerEl.textContent = `BERABERE (${score.red}-${score.blue})`;
    }

    const resolvedFromId = data?.topScorerId ? (this.lastPlayersData?.[data.topScorerId]?.nick || '') : '';
    const topNick = `${data?.topScorerNick || resolvedFromId || ''}`.trim();
    const topGoals = Number(data?.topScorerGoals || 0);
    if (topEl) {
      topEl.textContent = topNick
        ? `Gol Krali: ${topNick} (${topGoals})`
        : 'Gol Krali: -';
    }

    overlay.classList.add('active');
    if (this.matchEndHideTimer) {
      clearTimeout(this.matchEndHideTimer);
    }
    this.matchEndHideTimer = setTimeout(() => {
      overlay.classList.remove('active');
      this.matchEndHideTimer = null;
    }, 6000);
  }

  handleReplayClip(clipData) {
    if (this.featureGates.replay === false || this.perfFlags.replayEnabled === false) return;
    if (this.replay.active) return;
    if (performance.now() - this.lastReplayEndedAt < 500) return;

    const goalSeq = Number(clipData?.goalSeq || 0);
    const clipId = clipData?.clipId || null;
    if (goalSeq && goalSeq <= this.lastReplayGoalSeq) return;
    if (clipId && clipId === this.lastReplayClipId) return;

    const rawFrames = Array.isArray(clipData?.keyframes) ? clipData.keyframes : [];
    const frames = rawFrames.filter((f) => !!f);
    if (frames.length < 2) return;

    const baseTs = Number(frames[0].ts || 0);
    const normalizedFrames = frames.map((frame) => ({
      ...frame,
      _rt: Math.max(0, Number(frame.ts || 0) - baseTs)
    }));
    const lastRt = normalizedFrames[normalizedFrames.length - 1]._rt;

    this.replay.active = true;
    this.replay.goalSeq = goalSeq;
    this.replay.clipId = clipId;
    this.replay.startedAt = performance.now();
    this.replay.durationMs = Math.max(1200, clipData?.durationMs || lastRt || 5000);
    this.replay.cursor = 0;
    this.replay.keyframes = normalizedFrames;
    this.replay.pendingSnapshot = null;
    window.isReplayActive = true;

    const overlay = this.ui.replayOverlay;
    const txt = this.ui.replayText;
    if (overlay && txt) {
      txt.textContent = 'REPLAY';
      overlay.classList.add('active');
    }
  }

  stepReplay(now) {
    if (!this.replay.active) return;

    const elapsed = now - this.replay.startedAt;
    const frames = this.replay.keyframes;
    const playMs = Math.min(this.replay.durationMs, elapsed);

    while (
      this.replay.cursor < frames.length - 2
      && frames[this.replay.cursor + 1]._rt <= playMs
    ) {
      this.replay.cursor += 1;
    }

    const i0 = this.replay.cursor;
    const i1 = Math.min(frames.length - 1, i0 + 1);

    const f0 = frames[i0];
    const f1 = frames[i1];
    if (!f0 || !f1) {
      this.finishReplay();
      return;
    }

    const frameSpan = Math.max(1, f1._rt - f0._rt);
    const lt = Math.min(1, Math.max(0, (playMs - f0._rt) / frameSpan));

    const p0 = ballPos(f0);
    const p1 = ballPos(f1);
    const bx = lerp(p0.x, p1.x, lt);
    const by = lerp(p0.y, p1.y, lt);
    const bz = lerp(p0.z, p1.z, lt);

    if (this.world?.ball?.mesh) {
      this.world.ball.mesh.position.set(bx, by, bz);
      this.world.ball.body.position.set(bx, by, bz);
    }

    const map0 = {};
    const map1 = {};
    for (const p of (f0.players || [])) map0[p.id] = p;
    for (const p of (f1.players || [])) map1[p.id] = p;
    const ids = new Set([...Object.keys(map0), ...Object.keys(map1)]);

    for (const id of ids) {
      const a = map0[id] || map1[id];
      const b = map1[id] || map0[id];
      if (!a || !b) continue;

      const x = lerp(a.pos.x, b.pos.x, lt);
      const y = lerp(a.pos.y, b.pos.y, lt);
      const z = lerp(a.pos.z, b.pos.z, lt);
      const yaw = angleLerp(a.yaw || 0, b.yaw || 0, lt);

      if (id === this.myId && this.world?.player) {
        this.world.player.body.position.set(x, y, z);
        this.world.player.bodyYaw = yaw;
        this.world.player.mesh.position.set(x, y + this.world.player.visualOffsetY, z);
        this.world.player.mesh.quaternion.setFromAxisAngle(
          this.upAxis,
          yaw + (this.world.player.modelYawOffset || 0)
        );
      } else {
        if (!this.remotePlayers[id]) {
          this.remotePlayers[id] = new RemotePlayer(this.world, id, {
            id,
            nick: b.nick || a.nick || 'Player',
            team: b.team || a.team || 'red',
            role: b.role || a.role || 'active',
            pos: { x, y, z },
            yaw,
            vel: { x: 0, y: 0, z: 0 }
          });
        }

        this.remotePlayers[id].updateVisuals({
          id,
          nick: b.nick || a.nick || 'Player',
          team: b.team || a.team || 'red',
          role: b.role || a.role || 'active',
          pos: { x, y, z },
          yaw,
          vel: { x: 0, y: 0, z: 0 },
          actionState: { isSliding: false }
        }, true);
      }
    }

    const cam = this.world.camera;
    const shooterId = f1?.ball?.lastTouch?.id || f0?.ball?.lastTouch?.id || null;
    const shooterA = shooterId ? (map0[shooterId] || map1[shooterId]) : null;
    const shooterB = shooterId ? (map1[shooterId] || map0[shooterId]) : null;
    const progress = Math.min(1, Math.max(0, playMs / Math.max(1, this.replay.durationMs)));
    const phaseAEnd = 2.2 / 6.0;
    const phaseBEnd = 4.8 / 6.0;

    if (shooterA && shooterB) {
      const sx = lerp(shooterA.pos.x, shooterB.pos.x, lt);
      const sy = lerp(shooterA.pos.y, shooterB.pos.y, lt);
      const sz = lerp(shooterA.pos.z, shooterB.pos.z, lt);
      const syaw = angleLerp(shooterA.yaw || 0, shooterB.yaw || 0, lt);
      const shooterForwardX = Math.sin(syaw);
      const shooterForwardZ = Math.cos(syaw);

      if (progress <= phaseAEnd) {
        const backX = -shooterForwardX * 4.9;
        const backZ = -shooterForwardZ * 4.9;
        const sideX = Math.cos(syaw) * 1.6;
        const sideZ = -Math.sin(syaw) * 1.6;
        this.replayCameraPos.set(sx + backX + sideX, sy + 2.2, sz + backZ + sideZ);
        this.replayLookAt.set(
          lerp(sx, bx, 0.62),
          lerp(sy + 0.9, by + 0.25, 0.62),
          lerp(sz, bz, 0.62)
        );
      } else if (progress <= phaseBEnd) {
        const ballDirX = p1.x - p0.x;
        const ballDirZ = p1.z - p0.z;
        const ballLen = Math.hypot(ballDirX, ballDirZ);
        const dirX = ballLen > 1e-4 ? ballDirX / ballLen : shooterForwardX;
        const dirZ = ballLen > 1e-4 ? ballDirZ / ballLen : shooterForwardZ;
        this.replayCameraPos.set(bx - dirX * 3.4, by + 1.8, bz - dirZ * 3.4);
        this.replayLookAt.set(bx + dirX * 1.2, by + 0.25, bz + dirZ * 1.2);
      } else {
        const goalZ = shooterA.team === 'red' ? 39 : -39;
        this.replayCameraPos.set(0, 18.5, goalZ * 0.35);
        this.replayLookAt.set(lerp(bx, 0, 0.45), 1.5, lerp(bz, goalZ, 0.45));
      }
    } else {
      this.replayCameraPos.set(bx + 7.2, by + 3.4, bz + 7.2);
      this.replayLookAt.set(bx, by + 0.3, bz);
    }

    cam.position.lerp(this.replayCameraPos, 0.26);
    cam.lookAt(this.replayLookAt);

    if (elapsed >= this.replay.durationMs || i1 >= frames.length - 1) {
      this.finishReplay();
    }
  }

  finishReplay() {
    if (!this.replay.active) return;
    if (this.replay.goalSeq) {
      this.lastReplayGoalSeq = Math.max(this.lastReplayGoalSeq, this.replay.goalSeq);
    }
    if (this.replay.clipId) {
      this.lastReplayClipId = this.replay.clipId;
    }
    this.replay.active = false;
    window.isReplayActive = false;
    this.lastReplayEndedAt = performance.now();

    if (this.ui.replayOverlay) {
      this.ui.replayOverlay.classList.remove('active');
    }

    this.replay.cursor = 0;
    this.replay.goalSeq = 0;
    this.replay.clipId = null;
    this.replay.keyframes = [];

    if (this.replay.pendingSnapshot) {
      const pending = this.replay.pendingSnapshot;
      this.replay.pendingSnapshot = null;
      this.applySnapshot(pending, false, true);
    }
  }

  showGoalCelebration(team, scorerName) {
    const overlay = document.getElementById('goal-overlay');
    const subtext = document.getElementById('goal-subtext');
    const playerText = document.getElementById('goal-player-name');

    if (!overlay || !subtext) return;

    overlay.style.color = team === 'red' ? '#ff4444' : '#4488ff';
    subtext.textContent = team === 'red' ? 'KIRMIZI TAKIM GOLU!' : 'MAVI TAKIM GOLU!';

    if (playerText) {
      playerText.textContent = scorerName ? `Gol: ${scorerName}` : '';
    }

    overlay.classList.add('active');
    setTimeout(() => {
      overlay.classList.remove('active');
    }, 2400);
  }

  showBallOut(data) {
    const overlay = document.getElementById('ball-out-overlay');
    const text = document.getElementById('ball-out-text');
    if (!overlay || !text) return;

    const reason = data?.reason || 'DISARI';
    text.textContent = `TOP DISARI: ${reason.toUpperCase()}`;
    overlay.classList.add('active');
    setTimeout(() => overlay.classList.remove('active'), 1300);
  }

  handleSpectatorQueueState(queueState) {
    if (!queueState || typeof queueState !== 'object') {
      return;
    }

    const queued = !!queueState.queued;
    const position = Number.isFinite(queueState.position)
      ? Math.max(1, Math.floor(queueState.position))
      : null;
    const reason = `${queueState.reason || ''}`;
    const prev = this.spectatorQueueState || { queued: false, position: null, reason: '' };
    const changed = prev.queued !== queued || prev.position !== position || prev.reason !== reason;
    this.spectatorQueueState = { queued, position, reason };

    if (!changed) {
      return;
    }

    if (queued) {
      const posText = position ? `#${position}` : '-';
      this.pushChatLine(`[SISTEM] Takima donus sirasina alindin. Sira: ${posText}`, 'system');
      return;
    }

    if (reason === 'joined') {
      this.pushChatLine('[SISTEM] Takima geri dondun.', 'system');
    }
  }

  updateStats() {
    const stats = this.ui.serverStats;
    if (!stats) return;

    const correctionP95 = this.world?.player?.consumeCorrectionP95?.();
    if (Number.isFinite(correctionP95)) {
      this.lastCorrectionP95 = correctionP95;
    }

    const age = Math.max(0, performance.now() - this.lastSnapshotAt);
    const ping = Math.round(this.socket.io.engine?.ping || 0);
    const perf = this.world?.getPerfMetrics?.() || {};
    if (Number.isFinite(perf.frameP95)) {
      this.lastFrameP95 = perf.frameP95;
    }
    if (Number.isFinite(perf.fpsAvg)) {
      this.lastFpsAvg = perf.fpsAvg;
    }
    const quality = (ping <= 60 && age <= 120)
      ? 'Iyi'
      : (ping <= 120 && age <= 220 ? 'Orta' : 'Dusuk');
    const corr = this.lastCorrectionP95.toFixed(2);
    const frameP95 = Number.isFinite(this.lastFrameP95) ? this.lastFrameP95.toFixed(1) : '--';
    const fpsAvg = Number.isFinite(this.lastFpsAvg) ? this.lastFpsAvg.toFixed(0) : '--';
    const stabilization = this.perfFlags.stabilizationMode ? 'Aciq' : 'Qapali';
    stats.textContent = `Ping: ${ping}ms | Snapshot gecikmesi: ${Math.round(age)}ms | Corr p95: ${corr}m | FPS: ${fpsAvg} | Frame p95: ${frameP95}ms | Snap: ${this.snapshotCount} | Stab: ${stabilization} | Sim: ${this.simVersion} | Ag: ${quality}`;
  }
}
