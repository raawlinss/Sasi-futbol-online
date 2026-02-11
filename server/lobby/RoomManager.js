import { EVENTS, clamp as clampProtocol, safeNumber } from '../../shared/protocol/index.js';
import { SERVER_CONFIG } from '../game/config.js';
import { computePitchFromMaxActive } from './pitchSizing.js';
import { GameServer } from '../game/GameServer.js';

function nowMs() {
  return Date.now();
}

function cleanRoomName(name) {
  const raw = `${name ?? ''}`.trim();
  const cleaned = raw.replace(/[^a-zA-Z0-9_\- ]/g, '').slice(0, 24);
  return cleaned;
}

export class RoomManager {
  constructor(io, sessions) {
    this.io = io;
    this.sessions = sessions;
    this.rooms = new Map();
    this.roomCounter = 1;
  }

  listRooms() {
    const out = [];
    for (const room of this.rooms.values()) {
      const game = room.game;
      out.push({
        roomId: room.roomId,
        name: room.name,
        ownerNick: room.ownerNick,
        durationMin: room.durationMin,
        maxActive: room.maxActive,
        activeCount: game?.getActiveCount?.() ?? 0,
        spectatorCount: game?.getSpectatorCount?.() ?? 0,
        createdAt: room.createdAt
      });
    }
    return out;
  }

  broadcastRoomsList() {
    this.io.emit(EVENTS.roomsList, { rooms: this.listRooms() });
  }

  getRoom(roomId) {
    return this.rooms.get(roomId) || null;
  }

  createRoom(socket, session, payload) {
    const durationMin = clampProtocol(Math.floor(safeNumber(payload?.durationMin, 0)), 0, 30);
    const maxActive = clampProtocol(Math.floor(safeNumber(payload?.maxActive, 24)), 2, 60);
    const name = cleanRoomName(payload?.name) || `Oda ${this.roomCounter}`;
    const pitch = computePitchFromMaxActive(maxActive);

    const roomId = `room-${nowMs().toString(36)}-${this.roomCounter++}`;

    const room = {
      roomId,
      name,
      ownerId: socket.id,
      ownerNick: session.nick || SERVER_CONFIG.adminNick,
      durationMin,
      maxActive: pitch.maxActive,
      pitch,
      createdAt: nowMs(),
      game: new GameServer(this.io, roomId, {
        roomId,
        ownerId: socket.id,
        ownerNick: session.nick || SERVER_CONFIG.adminNick,
        durationMin,
        maxActive: pitch.maxActive,
        pitch
      })
    };

    room.game.start();
    this.rooms.set(roomId, room);
    this.broadcastRoomsList();
    return roomId;
  }

  closeRoom(roomId, reason) {
    const room = this.rooms.get(roomId);
    if (!room) return;

    const sockets = this.io.sockets.sockets;
    const playerIds = room.game?.getHumanIds?.() || [];

    for (const id of playerIds) {
      const s = sockets.get(id);
      if (s) {
        s.leave(roomId);
        s.emit(EVENTS.roomClosed, { roomId, reason });
      }
      const sess = this.sessions.get(id);
      if (sess) {
        sess.roomId = null;
      }
    }

    room.game?.stop?.();
    this.rooms.delete(roomId);
    this.broadcastRoomsList();
  }

  leaveRoom(socket) {
    const session = this.sessions.get(socket.id);
    if (!session?.roomId) return;

    const roomId = session.roomId;
    const room = this.rooms.get(roomId);
    session.roomId = null;

    if (!room) {
      socket.emit(EVENTS.roomLeft, { roomId });
      return;
    }

    if (socket.id === room.ownerId) {
      this.closeRoom(roomId, 'owner_left');
      return;
    }

    socket.leave(roomId);
    room.game?.removeSocket?.(socket.id, 'left');
    socket.emit(EVENTS.roomLeft, { roomId });
    this.broadcastRoomsList();
  }

  joinRoom(socket, session, roomId) {
    const room = this.rooms.get(roomId);
    if (!room) {
      return false;
    }

    if (session.roomId && session.roomId !== roomId) {
      this.leaveRoom(socket);
    }

    session.roomId = roomId;
    socket.join(roomId);
    const isSuperAdmin = session.nick === SERVER_CONFIG.adminNick;
    const isOwner = socket.id === room.ownerId;

    room.game?.addSocket?.(socket, session.nick, {
      isSuperAdmin,
      isOwner
    });

    socket.emit(EVENTS.roomJoined, { roomId });
    socket.emit(EVENTS.initSnapshot, room.game.buildInitSnapshot(socket.id));
    this.broadcastRoomsList();
    return true;
  }

  kickFromRoom(roomId, targetNick) {
    const room = this.rooms.get(roomId);
    if (!room) return false;

    const player = room.game?.findPlayerByNick?.(targetNick) || null;
    if (!player || player.isBot) {
      return false;
    }

    const socket = this.io.sockets.sockets.get(player.id);
    const session = this.sessions.get(player.id);

    room.game?.removeSocket?.(player.id, 'kicked');
    if (socket) {
      socket.leave(roomId);
      socket.emit(EVENTS.roomKicked, { roomId });
    }
    if (session) {
      session.roomId = null;
    }

    this.broadcastRoomsList();
    return true;
  }
}

