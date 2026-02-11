import express from 'express';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import { SERVER_CONFIG } from './server/game/config.js';
import { GameServer } from './server/game/GameServer.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: '*' }
});

const distDir = path.join(__dirname, 'dist');
const hasDist = fs.existsSync(distDir);

app.get('/health', (req, res) => {
  res.json({ ok: true, ts: Date.now() });
});

app.use('/shared', express.static(path.join(__dirname, 'shared')));

if (hasDist && process.env.NODE_ENV === 'production') {
  app.use(express.static(distDir));
  app.get(/.*/, (req, res) => {
    res.sendFile(path.join(distDir, 'index.html'));
  });
} else {
  app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
  app.use('/src', express.static(path.join(__dirname, 'src')));
  app.use(express.static(__dirname));

  app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
}

// V1.4: single match instance, direct join flow (no rooms).
const game = new GameServer(io, 'main', { roomId: 'main' });
game.start();
io.on('connection', (socket) => game.onConnection(socket));

httpServer.listen(SERVER_CONFIG.port, SERVER_CONFIG.host, () => {
  console.log('======================================================');
  console.log('RAWLINS SASI FUTBOL V1.4 - SINGLE SERVER');
  console.log(`Host: http://${SERVER_CONFIG.host}:${SERVER_CONFIG.port}`);
  console.log(`Admin nick: ${SERVER_CONFIG.adminNick}`);
  console.log(`Stabilization mode: ${SERVER_CONFIG.stabilizationMode}`);
  console.log(`Replay enabled: ${SERVER_CONFIG.enableReplay}`);
  console.log(`Production static mode: ${hasDist && process.env.NODE_ENV === 'production'}`);
  console.log('======================================================');
});

