// HOLLOWMOOR online — Cloudflare Worker.
//
// The game is host-authoritative: one player's machine runs the vigil and the
// others send it their inputs. This Worker only introduces players to each
// other and relays their messages:
//
//   GET  /api/health        liveness + protocol version
//   GET  /api/new           a fresh room code
//   GET  /api/quick         an open public room to join (or a fresh code)
//   WS   /room/<CODE>       join a room; the first one in is the host
//   *                       the game itself (static files from ../dist)
//
// Wire format inside a room: "<to>|<json>" from a client, where <to> is
//   h = the host, a = everyone else, <peer id> = one player, ! = this server.
// The server forwards it as "<from id>|<json>" without reading the JSON.
// Messages from the server itself arrive as "!|<json>".

const VERSION = 1;
const MAX_PEERS = 5;
const MAX_MSG = 24 * 1024;
const ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const CORS = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': '*' };

const json = (o, status = 200) => new Response(JSON.stringify(o), { status, headers: { 'content-type': 'application/json', 'cache-control': 'no-store', ...CORS } });
const newCode = () => { const b = crypto.getRandomValues(new Uint8Array(5)); let s = ''; for (const x of b) s += ALPHABET[x % ALPHABET.length]; return s; };
const cleanCode = (c) => String(c || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 8);

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method === 'OPTIONS') return new Response(null, { headers: CORS });
    if (url.pathname === '/api/health') return json({ ok: true, v: VERSION });
    if (url.pathname === '/api/new') return json({ code: newCode() });
    if (url.pathname === '/api/quick') {
      const reg = env.REGISTRY.get(env.REGISTRY.idFromName('global'));
      const r = await reg.fetch('https://registry/quick');
      const { code } = await r.json();
      return json({ code: code || newCode(), fresh: !code });
    }
    if (url.pathname.startsWith('/room/')) {
      const code = cleanCode(url.pathname.slice(6));
      if (code.length < 4) return json({ error: 'bad room code' }, 400);
      if (request.headers.get('Upgrade') !== 'websocket') return json({ error: 'expected a websocket' }, 426);
      const room = env.ROOMS.get(env.ROOMS.idFromName(code));
      const u = new URL(request.url); u.searchParams.set('code', code);
      return room.fetch(new Request(u, request));
    }
    if (env.ASSETS) return env.ASSETS.fetch(request);
    return new Response('Hollowmoor server', { headers: CORS });
  },
};

// One room: up to five sockets, relayed to each other.
export class Room {
  constructor(ctx, env) { this.ctx = ctx; this.env = env; }

  info(ws) { return ws.deserializeAttachment() || {}; }

  async fetch(request) {
    const url = new URL(request.url);
    const code = url.searchParams.get('code');
    const name = (url.searchParams.get('name') || 'Mourner').replace(/[\u0000-\u001f<>]/g, '').slice(0, 18) || 'Mourner';
    if (Number(url.searchParams.get('v')) !== VERSION) return this.refuse('version');
    const socks = this.ctx.getWebSockets();
    const locked = socks.length > 0 && (await this.ctx.storage.get('locked'));
    if (locked) return this.refuse('locked');
    if (socks.length >= MAX_PEERS) return this.refuse('full');
    const host = !socks.some((s) => this.info(s).host);
    const id = newCode().slice(0, 4) + socks.length;
    const pair = new WebSocketPair();
    const [client, server] = Object.values(pair);
    this.ctx.acceptWebSocket(server);
    server.serializeAttachment({ id, name, host, code });
    if (host) await this.ctx.storage.put({ locked: false, code });
    const peers = socks.map((s) => { const a = this.info(s); return { id: a.id, name: a.name, host: !!a.host }; });
    server.send('!|' + JSON.stringify({ t: 'hello', id, host, code, peers, v: VERSION }));
    const joined = '!|' + JSON.stringify({ t: 'join', id, name });
    for (const s of socks) { try { s.send(joined); } catch { /* gone */ } }
    return new Response(null, { status: 101, webSocket: client });
  }

  // Accept and close at once with a reason the game can show (a plain HTTP error is invisible to a browser's WebSocket).
  refuse(reason) {
    const pair = new WebSocketPair();
    const [client, server] = Object.values(pair);
    server.accept();
    server.send('!|' + JSON.stringify({ t: 'refused', reason }));
    server.close(4000, reason);
    return new Response(null, { status: 101, webSocket: client });
  }

  async webSocketMessage(ws, msg) {
    if (typeof msg !== 'string' || msg.length > MAX_MSG) return;
    const i = msg.indexOf('|');
    if (i < 1 || i > 8) return;
    const to = msg.slice(0, i), from = this.info(ws);
    if (to === '!') return this.control(from, msg.slice(i + 1));
    const out = from.id + msg.slice(i);
    for (const s of this.ctx.getWebSockets()) {
      if (s === ws) continue;
      const a = this.info(s);
      if (to === 'a' || (to === 'h' && a.host) || to === a.id) { try { s.send(out); } catch { /* gone */ } }
    }
  }

  // Requests to the server itself (host only): lock the room while a vigil is under way, list it for quick play.
  async control(from, body) {
    if (!from.host) return;
    let m; try { m = JSON.parse(body); } catch { return; }
    if (m.t === 'meta') {
      await this.ctx.storage.put('locked', !!m.locked);
      const reg = this.env.REGISTRY.get(this.env.REGISTRY.idFromName('global'));
      const n = this.ctx.getWebSockets().length;
      await reg.fetch('https://registry/update', { method: 'POST', body: JSON.stringify({ code: from.code, n, open: !!m.public && !m.locked && n < MAX_PEERS }) });
    }
  }

  async webSocketClose(ws) { await this.gone(ws); }
  async webSocketError(ws) { await this.gone(ws); }

  async gone(ws) {
    const a = this.info(ws);
    try { ws.close(); } catch { /* already closed */ }
    const rest = this.ctx.getWebSockets().filter((s) => s !== ws);
    if (a.host || !rest.length) {
      // the host carried the vigil: without them the room is over
      for (const s of rest) { try { s.send('!|' + JSON.stringify({ t: 'closed', reason: 'host' })); s.close(4001, 'host left'); } catch { /* gone */ } }
      await this.ctx.storage.deleteAll();
      const reg = this.env.REGISTRY.get(this.env.REGISTRY.idFromName('global'));
      if (a.code) await reg.fetch('https://registry/update', { method: 'POST', body: JSON.stringify({ code: a.code, n: 0, open: false }) });
      return;
    }
    const left = '!|' + JSON.stringify({ t: 'leave', id: a.id });
    for (const s of rest) { try { s.send(left); } catch { /* gone */ } }
  }
}

// The list of public rooms that are waiting for players. Kept in memory only:
// hosts re-announce their room every few seconds while it is open.
export class Registry {
  constructor() { this.rooms = new Map(); }
  async fetch(request) {
    const url = new URL(request.url), now = Date.now();
    for (const [code, r] of this.rooms) if (now - r.t > 30000) this.rooms.delete(code);
    if (url.pathname === '/update') {
      const m = await request.json();
      if (m.open) this.rooms.set(m.code, { n: m.n, t: now }); else this.rooms.delete(m.code);
      return json({ ok: true });
    }
    // fullest open room first, so lobbies fill up
    let best = null;
    for (const [code, r] of this.rooms) if (r.n < MAX_PEERS && (!best || r.n > best.n)) best = { code, n: r.n };
    return json({ code: best ? best.code : null });
  }
}
