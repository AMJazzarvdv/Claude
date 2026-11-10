// Online play, end to end: a host and a guest in two browser pages, joined through the
// relay server (run `npx wrangler dev --port 8787` in web/server first).
//   BASE=http://localhost:8123 SERVER=http://127.0.0.1:8787 node tests/multiplayer.cjs [guestleaves]
const { chromium } = require('playwright');
const BASE = process.env.BASE || 'http://localhost:8123';
const SERVER = process.env.SERVER || 'http://127.0.0.1:8787';
const MODE = process.argv[2] || 'hostleaves';
const results = [];
const check = (name, ok, info = '') => results.push(`${ok ? 'PASS' : 'FAIL'}  ${name} ${typeof info === 'string' ? info : JSON.stringify(info)}`);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROME || undefined, args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const open = async (name) => {
    const ctx = await browser.newContext({ viewport: { width: 480, height: 270 } });
    await ctx.addInitScript(() => { window.__noRender = true; try { localStorage.setItem('hollowmoor.settings', JSON.stringify({ quality: 'low', vol: 0 })); } catch { /* ignore */ } });
    const page = await ctx.newPage();
    page.on('pageerror', (e) => results.push(`pageerror(${name}): ${e.message} ${(e.stack || '').split('\n')[1] || ''}`));
    await page.goto(`${BASE}/index.html?server=${encodeURIComponent(SERVER)}`, { waitUntil: 'domcontentloaded' });
    await page.waitForFunction(() => window.__G && window.__G.state === 'title', null, { timeout: 180000 });
    await page.click('[data-go=online]');
    await page.fill('#playerName', name);
    return page;
  };
  const H = await open('Hosty'), C = await open('Guesty');
  const until = async (page, fn, arg, ms = 30000) => { try { await page.waitForFunction(fn, arg, { timeout: ms, polling: 100 }); return true; } catch { return false; } };

  // ---- room and lobby
  await H.click('#createRoomBtn');
  check('Host opens a room and lands in the lobby', await until(H, () => document.getElementById('lobby').classList.contains('on')), await H.evaluate(() => document.getElementById('onlineStatus').textContent));
  const code = await H.evaluate(() => window.__net.lobby.code);
  await C.fill('#roomCode', code);
  await C.click('#joinBtn');
  check('Guest joins with the room code', await until(C, () => document.getElementById('lobby').classList.contains('on') && window.__net.lobby), await C.evaluate(() => document.getElementById('onlineStatus').textContent));
  await until(H, () => Object.keys(window.__net.lobby.players).length === 2);
  let r = await H.evaluate(() => ({ seats: window.__net.lobby.seats.map((s) => (s ? window.__net.lobby.players[s].name : null)), can: window.__net.canStart() }));
  check('Lobby seats both players; host waits for the guest to be ready', r.seats[0] === 'Hosty' && r.seats[1] === 'Guesty' && !r.can, r);
  // the guest moves to the third Mourner, then readies up
  await C.click('.seat[data-seat="2"]');
  await until(H, () => window.__net.lobby.seats[2] && !window.__net.lobby.seats[1]);
  await C.click('#lobbyGo');
  check('Guest picks another place and readies; host may begin', await until(H, () => window.__net.canStart()), await H.evaluate(() => window.__net.lobby.seats));
  await H.click('#lobbyGo');

  // ---- the vigil begins on both machines
  const inGame = (p) => until(p, () => ['intro', 'playing'].includes(window.__G.state), null, 120000);
  check('Both machines build the same vigil', (await inGame(H)) && (await inGame(C)));
  r = await Promise.all([H, C].map((p) => p.evaluate(() => { const W = window.__G.world; let h = 0; for (const b of W.boxes) h = (h * 31 + Math.round(b.minX * 100) + Math.round(b.maxZ * 100) * 7) | 0; return { n: W.boxes.length, h, mode: window.__G.mode, role: window.__G.role, me: window.__G.survivors.indexOf(window.__G.player) }; })));
  check('Host and guest generated identical worlds', r[0].n === r[1].n && r[0].h === r[1].h && r[0].mode === 'host' && r[1].mode === 'client' && r[0].me === 0 && r[1].me === 2, r);
  // the host skips the opening once the guest has loaded; the guest follows on the host's word
  for (let i = 0; i < 60 && (await H.evaluate(() => window.__G.state)) !== 'playing'; i++) { await H.keyboard.press('Space'); await sleep(500); }
  check('The vigil starts for both when the host is through the opening', (await until(H, () => window.__G.state === 'playing')) && (await until(C, () => window.__G.state === 'playing', null, 30000)));
  // keep the Reliquary and the bots out of the way so the checks are deterministic
  await H.evaluate(() => { const G = window.__G; G.killer.stunT = 9999; for (const s of G.survivors) if (!s.human) s.updateAI = () => { s.speed = 0; }; });
  await sleep(1500);

  // ---- replication
  r = await Promise.all([H, C].map((p) => p.evaluate(() => window.__G.survivors.map((s) => [s.pos.x, s.pos.z]))));
  const far = r[0].map((a, i) => Math.hypot(a[0] - r[1][i][0], a[1] - r[1][i][1]));
  check('Guest sees every survivor where the host has them', far.every((d) => d < 0.6), far.map((d) => d.toFixed(2)).join(' '));

  // ---- the guest walks: predicted at once on its own screen, accepted by the host
  const p0 = await H.evaluate(() => { const s = window.__G.survivors[2]; return [s.pos.x, s.pos.z]; });
  await C.evaluate(() => { const G = window.__G, W = G.world, p = G.player; let best = 0, by = 0; for (let a = 0; a < 6.28; a += 0.4) { const t = W.raycast(p.pos.clone().setY(1), p.pos.clone().add({ x: Math.sin(a) * 8, y: 1, z: Math.cos(a) * 8 })); if (t > best) { best = t; by = a; } } G.camYaw = by; window.__input.keys.add('KeyW'); });
  await sleep(2500);
  await C.evaluate(() => window.__input.keys.delete('KeyW'));
  await sleep(700);
  r = await Promise.all([H, C].map((p) => p.evaluate(() => { const s = window.__G.survivors[2]; return [s.pos.x, s.pos.z, s.speed]; })));
  const moved = Math.hypot(r[0][0] - p0[0], r[0][1] - p0[1]), apart = Math.hypot(r[0][0] - r[1][0], r[0][1] - r[1][1]);
  check('Guest walks with W; the host accepts where it went', moved > 1.5 && apart < 0.6, { moved: +moved.toFixed(2), apart: +apart.toFixed(2) });

  // ---- the guest's gaze holds the statue on the host
  await H.evaluate(() => {
    const G = window.__G, s = G.survivors[2], k = G.killer, W = G.world;
    let best = null;
    for (let a = 0; a < 6.28; a += 0.3) { const q = s.pos.clone().add({ x: Math.sin(a) * 6, y: 0, z: Math.cos(a) * 6 }); if (W.raycast(s.pos.clone().setY(1.6), q.clone().setY(1.6)) > 0.999 && W.grid[W.cellIndex(q.x, q.z)] === 0) { best = q; break; } }
    k.pos.copy(best || s.pos.clone().add({ x: 0, y: 0, z: 5 })); k.stunT = 0; k.update = function () { this.sync(0.03); }; // stands still: only being seen is tested
    G.survivors[0].pos.set(k.pos.x + 30, 0, k.pos.z + 30); // the host's own avatar looks elsewhere
  });
  await sleep(600);
  await C.evaluate(() => { const G = window.__G, p = G.player, k = G.killer; G.camYaw = Math.atan2(k.pos.x - p.pos.x, k.pos.z - p.pos.z); G.camPitch = 0; });
  const sawIt = await until(H, () => window.__G.survivors[2].watching && window.__G.killer.watchers > 0, null, 8000);
  r = await C.evaluate(() => ({ w: window.__G.player.watching, res: window.__G.player.resolve }));
  check('Guest looks at the Reliquary; the host counts the gaze', sawIt && r.w, r);
  await C.evaluate(() => { window.__G.camYaw += Math.PI; });
  check('Guest looks away; the gaze is released', await until(H, () => !window.__G.survivors[2].watching, null, 8000));
  await H.evaluate(() => { const G = window.__G; G.killer.pos.set(G.survivors[2].pos.x + 40, 0, G.survivors[2].pos.z); });

  // ---- actions run on the host from the guest's keys
  const bellId = await H.evaluate(() => { const G = window.__G, s = G.survivors[2], b = G.bells.find((x) => !x.done); const slot = b.freeSlot(s.pos); s.pos.copy(slot); window.__bell = b.id; return b.id; });
  await C.evaluate((id) => { window.__bell = id; }, bellId);
  await sleep(700);
  await C.evaluate(() => { const G = window.__G, b = G.bells[window.__bell]; G.camYaw = Math.atan2(b.pos.x - G.player.pos.x, b.pos.z - G.player.pos.z); });
  r = await Promise.all([H, C].map((p) => p.evaluate(() => { const s = window.__G.survivors[2]; return [s.pos.x, s.pos.z]; })));
  check('The host moved the guest; the guest took the new place', Math.hypot(r[0][0] - r[1][0], r[0][1] - r[1][1]) < 0.4, r);
  await C.evaluate(() => window.__input.keys.add('KeyE'));
  const ringing = await until(H, () => window.__G.survivors[2].action?.type === 'ring', null, 8000);
  await sleep(1500);
  r = await C.evaluate(() => ({ act: window.__G.player.action?.type, prog: window.__G.bells[window.__bell].progress, prompt: window.__G.promptText, n: window.__G.bells[window.__bell].nRing }));
  check('Guest holds E at a bell: the host rings it and the guest sees the bell move', ringing && r.act === 'ring' && r.prog > 0 && r.prompt === 'Ringing' && r.n === 1, r);
  await C.evaluate(() => window.__input.keys.delete('KeyE'));
  check('Guest lets go: the ringing stops', await until(H, () => !window.__G.survivors[2].action, null, 6000));

  // ---- events and private messages
  await H.evaluate(() => { const G = window.__G; G.toast('A line for everyone', 'good'); G.toastTo(G.survivors[2], 'A line for the guest', 'warn'); G.fx.dust(G.survivors[2].chest(), 5); G.audio.chime(G.survivors[2].chest(), 600, 0.2); });
  check('Messages from the host reach the guest (to all, and to one)', await until(C, () => { const t = [...document.querySelectorAll('#toasts .toast')].map((e) => e.textContent); return t.includes('A line for everyone') && t.includes('A line for the guest'); }, null, 6000));
  r = await H.evaluate(() => [...document.querySelectorAll('#toasts .toast')].map((e) => e.textContent));
  check('A private message is not shown to others', r.includes('A line for everyone') && !r.includes('A line for the guest'), r);
  await H.evaluate(() => window.__G.survivors[2].hit());
  check('A hit on the guest shows on the guest: wounded, with the jolt', await until(C, () => window.__G.player.health === 'injured' && window.__G.hitShake > 0, null, 6000), await C.evaluate(() => ({ h: window.__G.player.health, shake: window.__G.hitShake })));
  // an item from a chest
  await H.evaluate(() => { const G = window.__G; G.giveItem(G.survivors[2], 'mirror'); });
  check('An item given on the host appears in the guest\'s hand and HUD', await until(C, () => window.__G.player.item === 'mirror' && !document.getElementById('itemSlot').hidden && !!window.__G.player.heldModel, null, 6000));
  // pallets and gates
  await H.evaluate(() => { const G = window.__G; G.pallets[0].drop(null); G.bellsRung = 5; G.gatesPowered = true; G.gates[0].doOpen(); });
  check('Pallets and gates change on the guest too', await until(C, () => window.__G.pallets[0].state === 'down' && window.__G.world.dynBoxes.includes(window.__G.pallets[0].box) && window.__G.gates[0].open && window.__G.gatesPowered, null, 6000));

  if (MODE === 'guestleaves') {
    await C.close();
    check('When a guest leaves, the game plays their survivor', await until(H, () => !window.__G.survivors[2].human && !window.__G.survivors[2].input, null, 10000), await H.evaluate(() => window.__G.state));
  } else {
    // ---- the end: everyone out, results on both screens, back to the room
    await H.evaluate(() => { const G = window.__G; for (const s of G.survivors) if (s.alive) s.escape('gate'); });
    const ended = (await until(H, () => window.__G.state === 'ended', null, 20000)) && (await until(C, () => window.__G.state === 'ended', null, 20000));
    r = await C.evaluate(() => ({ v: document.getElementById('verdict').textContent, total: document.getElementById('emberTotal').textContent, btn: document.getElementById('againBtn').textContent }));
    check('The vigil ends for both with results and scores', ended && r.v === 'ESCAPED' && r.btn === 'Return to the Lobby' && Number(r.total.replace(/\D/g, '')) >= 5000, r);
    await H.click('#againBtn');
    check('The host returns to the room and brings the guest', (await until(H, () => document.getElementById('lobby').classList.contains('on'))) && (await until(C, () => document.getElementById('lobby').classList.contains('on') && window.__G.state === 'title', null, 10000)));
    await H.close();
    check('When the host leaves, the guest is told and returns to the menu', await until(C, () => document.getElementById('online').classList.contains('on') && /host left/i.test(document.getElementById('onlineStatus').textContent), null, 10000), await C.evaluate(() => document.getElementById('onlineStatus').textContent));
  }
  console.log(results.join('\n'));
  await browser.close();
})().catch((e) => { console.log(results.join('\n')); console.error(e); process.exit(1); });
