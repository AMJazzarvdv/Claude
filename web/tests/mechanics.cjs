// Focused mechanic tests driven through real keyboard input + game internals.
const { chromium } = require('playwright');
const results = [];
const check = (name, ok, info = '') => { results.push(`${ok ? 'PASS' : 'FAIL'}  ${name} ${info}`); };
(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROME || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await browser.newPage({ viewport: { width: 640, height: 360 } });
  page.on('pageerror', (e) => results.push('pageerror: ' + e.message + ' ' + e.stack.split('\n')[1]));
  await page.goto((process.env.BASE || 'http://localhost:8123') + '/index.html');
  await page.waitForFunction(() => window.__G && window.__G.state === 'title', null, { timeout: 120000 });
  await page.click('[data-go=select]'); await page.click('#startBtn');
  await page.waitForFunction(() => window.__G.state === 'playing', null, { timeout: 60000 });
  const ev = (fn, arg) => page.evaluate(fn, arg);
  const step = (sec) => ev((sec) => { const G = window.__G; for (let i = 0; i < sec * 30; i++) G.update(1 / 30); }, sec);
  // park the killer far away & stunned, freeze the AI teammates
  await ev(() => { const G = window.__G; G.state = 'sim'; G.killer.pos.set(-45, 0, -45); G.killer.stunT = 9999; for (const s of G.survivors) if (!s.isPlayer) { s.updateAI = () => { s.speed = 0; }; s.pos.set(40, 0, 40 + s.id); } window.__origCanSee = G.canSee; G.canSee = function (s, pts) { return s.isPlayer ? window.__origCanSee.call(this, s, pts) : false; }; });

  // 1. ring a bell by holding E
  await ev(() => { const G = window.__G, b = G.bells[1], p = G.player; p.pos.copy(b.slots[0]); G.camYaw = Math.atan2(b.pos.x - p.pos.x, b.pos.z - p.pos.z); G.camPitch = 0; });
  await page.keyboard.down('KeyE'); await step(0.1);
  let r = await ev(() => { const G = window.__G; return { act: G.player.action?.type, p0: G.bells[1].progress }; });
  await step(8);
  let r2 = await ev(() => ({ p1: window.__G.bells[1].progress, skill: window.__G.ui.skill.active || window.__G.skillT }));
  await page.keyboard.up('KeyE'); await step(0.1);
  check('Hold E rings bell (or a missed toll check knocks it back)', r.act === 'ring' && (r2.p1 > r.p0 + 0.05 || r2.p1 === 0), JSON.stringify({ ...r, ...r2 }));
  let r3 = await ev(() => window.__G.player.action);
  check('Releasing E stops ringing', r3 === null);

  // 2. vault a window with Space
  r = await ev(() => { const G = window.__G, w = G.world.windows[0], p = G.player; p.pos.set(w.x + w.nx * 0.9, 0, w.z + w.nz * 0.9); G.camYaw = Math.atan2(-w.nx, -w.nz); G.camPitch = 0; G.update(1 / 30); return { side: Math.sign((p.pos.x - w.x) * w.nx + (p.pos.z - w.z) * w.nz), prompt: G.promptText }; });
  await page.keyboard.press('Space'); await step(1.5);
  r2 = await ev(() => { const G = window.__G, w = G.world.windows[0], p = G.player; return Math.sign((p.pos.x - w.x) * w.nx + (p.pos.z - w.z) * w.nz); });
  check('Space vaults a window to the other side', r.side !== r2, JSON.stringify(r) + ' after side ' + r2);

  // 3. drop a pallet on the killer -> stun
  r = await ev(() => { const G = window.__G, pl = G.pallets[0], p = G.player, k = G.killer;
    p.pos.copy(pl.center).addScaledVector(pl.n, 0.6); G.camYaw = Math.atan2(-pl.n.x, -pl.n.z);
    k.stunT = 0; k.pos.copy(pl.center).addScaledVector(pl.n, -0.6); k.watchers = 0; G.update(1 / 30); return G.promptText; });
  await page.keyboard.press('Space'); await step(0.2);
  r2 = await ev(() => { const G = window.__G; return { state: G.pallets[0].state, stun: G.killer.stunT.toFixed(2) }; });
  check('Space drops pallet and stuns the Reliquary', r2.state === 'down' && Number(r2.stun) > 1, r + ' ' + JSON.stringify(r2));
  await ev(() => { window.__G.killer.stunT = 9999; window.__G.killer.pos.set(-45, 0, -45); });

  // 4. gaze: killer in front of the camera freezes; resolve drains; forced blink at zero
  r = await ev(() => { const G = window.__G, p = G.player, k = G.killer;
    const pt = G.world.randomFreePoint(Math.random, 0, 0.1, 0, 30); p.pos.set(pt.x, 0, pt.z); p.resolve = p.maxResolve;
    k.pos.set(p.pos.x, 0, p.pos.z + 7); k.stunT = 0; k.state = 'patrol';
    G.camYaw = 0; G.camPitch = 0.05;
    for (let i = 0; i < 6; i++) G.update(1 / 30);
    return { petrified: k.petrified, watching: p.watching, los: G.world.lineOfSight(G.camera.position, k.headPos()) }; });
  const before = await ev(() => window.__G.player.resolve);
  await step(3);
  const after = await ev(() => ({ res: window.__G.player.resolve, pet: window.__G.killer.petrified, moved: window.__G.killer.moving }));
  check('Watched Reliquary is petrified', r.petrified && r.watching, JSON.stringify(r));
  check('Watching drains Resolve', after.res < before - 15 && after.pet, `${before.toFixed(0)} -> ${after.res.toFixed(0)}`);
  let blinked = await ev(() => { const G = window.__G; let b = false; for (let i = 0; i < 30 * 15; i++) { G.update(1 / 30); if (G.player.blinkT > 0) { b = true; break; } } return { b, killerPetrifiedDuringBlink: G.killer.petrified }; });
  check('Resolve empties into a forced Blink', blinked.b, JSON.stringify(blinked));
  // looking away lets it move
  r = await ev(() => { const G = window.__G, k = G.killer; const p0 = k.pos.clone(); G.camYaw = Math.PI; for (let i = 0; i < 30; i++) G.update(1 / 30); return { moved: k.pos.distanceTo(p0).toFixed(2), pet: k.petrified }; });
  check("Unwatched Reliquary moves", Number(r.moved) > 1, JSON.stringify(r));

  // 5. killer downs and hooks a survivor (player), AI rescues
  r = await ev(() => { const G = window.__G, p = G.player, k = G.killer;
    G.camYaw = Math.PI; p.health = 'injured';
    const log = [];
    for (let i = 0; i < 30 * 30 && p.health !== 'hooked'; i++) { G.camYaw = Math.atan2(p.pos.x - k.pos.x, p.pos.z - k.pos.z); G.update(1 / 30); if (i % 60 === 0) log.push(`${k.state}/${k.action?.type || ''}/${p.health}/${k.petrified ? 'P' : ''}/${k.pos.distanceTo(p.pos).toFixed(1)}`); }
    return { h: p.health, hooks: p.hookCount, log: log.join(' ') }; });
  check('Reliquary downs, carries and binds the player', r.h === 'hooked' && r.hooks === 1, JSON.stringify(r));
  if (r.h === 'hooked') r = await ev(() => { const G = window.__G, p = G.player, k = G.killer;
    k.pos.set(-45, 0, -45); k.stunT = 9999;
    const mate = G.survivors[1]; delete mate.updateAI; G.canSee = window.__origCanSee; mate.pos.set(p.post.pos.x + 6, 0, p.post.pos.z);
    for (let i = 0; i < 30 * 40 && p.health === 'hooked'; i++) G.update(1 / 30);
    return { h: p.health, mateState: mate.ai.state }; });
  check('AI teammate unbinds a hooked survivor', r.h === 'injured', JSON.stringify(r));

  // 6. gates: power, open, escape
  r = await ev(() => { const G = window.__G, p = G.player;
    for (const b of G.bells) if (!b.done && G.bellsRung < 5) b.complete();
    for (let i = 0; i < 30 * 3; i++) G.update(1 / 30);
    const g = G.gates[0]; p.pos.copy(g.lever).addScaledVector(g.inward, 0.8); G.camYaw = Math.atan2(g.lever.x - p.pos.x, g.lever.z - p.pos.z);
    G.update(1 / 30); return { powered: G.gatesPowered, rung: G.bellsRung, prompt: G.promptText }; });
  check('Five bells power the Lychgates', r.powered && r.rung >= 5, JSON.stringify(r));
  await page.keyboard.down('KeyE'); await step(19); await page.keyboard.up('KeyE');
  r = await ev(() => ({ open: window.__G.gates[0].open, collapse: window.__G.collapseT }));
  check('Holding E opens the Lychgate and starts the collapse', r.open && r.collapse !== null, JSON.stringify(r));
  r = await ev(() => { const G = window.__G, p = G.player, g = G.gates[0];
    G.camYaw = Math.atan2(-g.inward.x, -g.inward.z);
    p.pos.copy(g.pos).addScaledVector(g.inward, 1.0); return true; });
  await page.keyboard.down('KeyW'); await step(4); await page.keyboard.up('KeyW');
  r = await ev(() => ({ h: window.__G.player.health, z: window.__G.player.pos.z.toFixed(1) }));
  check('Walking out through the open gate escapes', r.h === 'escaped', JSON.stringify(r));
  await step(3.2);
  r = await ev(() => ({ state: window.__G.state, end: document.getElementById('end').classList.contains('on'), verdict: document.getElementById('verdict').textContent }));
  check('Results screen appears', r.end && r.verdict === 'ESCAPED', JSON.stringify(r));
  console.log(results.join('\n'));
  await browser.close();
})();
