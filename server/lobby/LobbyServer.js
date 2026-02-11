import { EVENTS, safeNumber } from '../../shared/protocol/index.js';
import { SERVER_CONFIG } from '../game/config.js';
import { RoomManager } from './RoomManager.js';

function trimNick(rawNick) {
  const text = `${rawNick ?? ''}`.trim();
  const cleaned = text.replace(/[^a-zA-Z0-9_\- ]/g, '').slice(0, 16);
  return cleaned;
}

function ensureNick(session, payload) {
  if (!session) return null;
  if (session.nick) return session.nick;

  const incomingNick = typeof payload === 'string'
    ? payload
    : payload?.nickname;

  let nick = trimNick(incomingNick);
  if (nick.length < 3) {
    nick = `Player${Math.floor(Math.random() * 1000)}`;
  }
  session.nick = nick;
  return nick;
}

export class LobbyServer {
  constructor(io) {
    this.io = io;
    this.sessions = new Map();
    this.rooms = new RoomManager(io, this.sessions);
  }

  start() {
    this.io.on('connection', (socket) => this.onConnection(socket));
  }

  onConnection(socket) {
    this.sessions.set(socket.id, {
      id: socket.id,
      nick: null,
      roomId: null
    });

    socket.on(EVENTS.hello, (payload) => this.handleHello(socket, payload));
    socket.on(EVENTS.roomCreate, (payload, ack) => this.handleRoomCreate(socket, payload, ack));
    socket.on(EVENTS.roomJoin, (payload, ack) => this.handleRoomJoin(socket, payload, ack));
    socket.on(EVENTS.roomLeave, () => this.handleRoomLeave(socket));
    socket.on(EVENTS.roomOwnerCommand, (payload) => this.handleRoomOwnerCommand(socket, payload));

    socket.on(EVENTS.inputFrame, (payload) => this.forwardToRoom(socket, 'handleInputFrame', payload));
    socket.on(EVENTS.actionRequest, (payload) => this.forwardToRoom(socket, 'handleActionRequest', payload));
    socket.on(EVENTS.chatSend, (payload) => this.forwardToRoom(socket, 'handleChat', payload));
    socket.on(EVENTS.quickCommand, (payload) => this.forwardToRoom(socket, 'handleQuickCommand', payload));
    socket.on(EVENTS.spectatorRequest, (payload) => this.forwardToRoom(socket, 'handleSpectatorRequest', payload));
    socket.on(EVENTS.adminCommand, (payload) => this.forwardToRoom(socket, 'handleAdminCommand', payload));

    socket.on('disconnect', () => this.handleDisconnect(socket));

    socket.emit(EVENTS.serverHello, {
      app: 'FutbolOnline',
      protocol: 'rooms-v1',
      ts: Date.now()
    });
    socket.emit(EVENTS.roomsList, { rooms: this.rooms.listRooms() });
  }

  handleHello(socket, payload) {
    const session = this.sessions.get(socket.id);
    if (!session) return;
    ensureNick(session, payload);

    socket.emit(EVENTS.roomsList, { rooms: this.rooms.listRooms() });
  }

  handleRoomCreate(socket, payload, ack) {
    const session = this.sessions.get(socket.id);
    if (!session) {
      ack?.({ ok: false, error: 'no_session' });
      return;
    }

    ensureNick(session, payload);
    if (!session.nick) {
      ack?.({ ok: false, error: 'nickname_required' });
      return;
    }

    try {
      const roomId = this.rooms.createRoom(socket, session, payload);
      const joined = this.rooms.joinRoom(socket, session, roomId);
      ack?.({ ok: joined, roomId, error: joined ? '' : 'join_failed' });
    } catch (e) {
      ack?.({ ok: false, error: e?.message || 'room_create_failed' });
    }
  }

  handleRoomJoin(socket, payload, ack) {
    const session = this.sessions.get(socket.id);
    if (!session) {
      ack?.({ ok: false, error: 'no_session' });
      return;
    }

    ensureNick(session, payload);
    if (!session.nick) {
      ack?.({ ok: false, error: 'nickname_required' });
      return;
    }

    const roomId = `${payload?.roomId || ''}`;
    if (!roomId) {
      ack?.({ ok: false, error: 'room_id_required' });
      return;
    }
    const ok = this.rooms.joinRoom(socket, session, roomId);
    ack?.({ ok, roomId, error: ok ? '' : 'room_not_found' });
  }

  handleRoomLeave(socket) {
    this.rooms.leaveRoom(socket);
  }

  handleRoomOwnerCommand(socket, payload) {
    const session = this.sessions.get(socket.id);
    if (!session?.roomId) return;
    const room = this.rooms.getRoom(session.roomId);
    if (!room) return;

    const isSuperAdmin = session.nick === SERVER_CONFIG.adminNick;
    const isOwner = socket.id === room.ownerId;
    if (!isOwner && !isSuperAdmin) {
      return;
    }

    const cmd = `${payload?.cmd || ''}`;
    const args = payload?.args || {};

    switch (cmd) {
      case 'closeRoom':
        this.rooms.closeRoom(room.roomId, 'owner_closed');
        break;
      case 'restartMatch':
        room.game?.resetMatchState?.();
        break;
      case 'kickFromRoom':
        this.rooms.kickFromRoom(room.roomId, args.targetNick);
        break;
      case 'forceTeam':
        room.game?.forceTeam?.(args.targetNick, args.team);
        break;
      case 'makeSpectator':
        room.game?.makeSpectator?.(args.targetNick);
        break;
      case 'setCap': {
        const cap = Math.floor(safeNumber(args.cap, room.maxActive));
        room.game?.applyActiveCap?.(cap);
        break;
      }
      default:
        break;
    }
  }

  forwardToRoom(socket, handlerName, payload) {
    const session = this.sessions.get(socket.id);
    if (!session?.roomId) return;
    const room = this.rooms.getRoom(session.roomId);
    if (!room?.game?.[handlerName]) return;
    room.game[handlerName](socket.id, payload);
  }

  handleDisconnect(socket) {
    const session = this.sessions.get(socket.id);
    const roomId = session?.roomId || null;
    if (roomId) {
      const room = this.rooms.getRoom(roomId);
      if (room && socket.id === room.ownerId) {
        this.rooms.closeRoom(roomId, 'owner_left');
      } else {
        this.rooms.leaveRoom(socket);
      }
    }
    this.sessions.delete(socket.id);
  }
}
