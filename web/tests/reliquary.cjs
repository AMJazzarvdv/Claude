// Playing the Reliquary yourself, against four Mourners the game plays.
const { chromium } = require('playwright');
const BASE = process.env.BASE || 'http://localhost:8123';
const results = [];
const check = (name, ok, info = '') => results.push(`${ok ? 'PASS' : 'FAIL'}  ${name} ${typeof info === 'string' ? info : JSON.stringify(info)}`);

(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROME || undefined, args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await browser.newPage({ viewport: { width: 640, height: 360 } });
  await page.addInitScript(() => { window.__noRender = true; });
  page.on('pageerror', (e) => results.push('pageerror: ' + e.message + ' ' + ((e.stack || '').split('\n')[1] || '')));
  await page.goto(BASE + '/index.html', { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => window.__G && window.__G.state === 'title', null, { timeout: 120000 });
  const ev = (fn, arg) => page.evaluate(fn, arg);
  await page.click('[data-go=select]');
  await page.click('#roleRow [data-r=killer]');
  await page.click('#startBtn');
  await page.waitForFunction(() => ['intro', 'playing'].includes(window.__G.state), null, { timeout: 60000 });
  await ev(() => window.__G.endIntro());
  let r = await ev(() => { const G = window.__G; return { role: G.role, input: !!G.killer.input, hidden: !G.killer.model.visible, hud: !document.getElementById('killerHud').hidden, me: G.me === G.killer, bots: G.survivors.every((s) => !s.human) }; });
  check('Start as the Reliquary: first person, its HUD, four Mourners played by the game', r.role === 'killer' && r.input && r.hidden && r.hud && r.me && r.bots, r);

  await ev(() => {
    const G = window.__G; G.state = 'sim';
    const k = G.killer;
    for (const s of G.survivors) { s.updateAI = () => { s.speed = 0; }; }
    window.step = (sec) => { for (let i = 0; i < Math.round(sec * 30); i++) { G.update(1 / 30); window.__input.pressed.clear(); } };
    window.tap = (code) => { window.__input.pressed.add(code); G.update(1 / 30); window.__input.pressed.clear(); };
    window.spot = () => { for (let n = 0; n < 400; n++) { const sp = G.world.randomFreePoint(Math.random, 0, 30, 0, 0); let ok = true; for (let a = 0; a < 8 && ok; a++) ok = G.world.raycast(k.pos.clone().set(sp.x, 1.2, sp.z), k.pos.clone().set(sp.x + Math.sin(a * 0.785) * 7, 1.2, sp.z + Math.cos(a * 0.785) * 7)) >= 0.999; if (ok) return k.pos.clone().set(sp.x, 0, sp.z); } return k.pos.clone(); };
    // open ground; the Mourners parked far away, facing away
    window.arena = () => { const sp = window.spot(); k.pos.copy(sp); k.stunT = 0; k.action = null; k.cooldown = 0; k.carrying = null; G.camYaw = 0; G.camPitch = 0; G.survivors.forEach((s, i) => { s.cancelAction(); if (s.alive && s.health !== 'hooked') { s.pos.set((sp.x > 0 ? -44 : 40) + i * 1.2, 0, sp.z > 0 ? -44 : 44); s.yaw = 0; } }); return sp; };
  });

  // moves while unseen
  r = await ev(() => { const G = window.__G, k = G.killer; const sp = window.arena(); window.__input.keys.add('KeyW'); window.step(1); window.__input.keys.delete('KeyW'); return { moved: +Math.hypot(k.pos.x - sp.x, k.pos.z - sp.z).toFixed(2), yaw: k.yaw, pet: k.petrified }; });
  check('Unseen, it walks where you steer', r.moved > 3.5 && !r.pet, r);
  // stone while seen
  r = await ev(() => {
    const G = window.__G, k = G.killer, s = G.survivors[0]; const sp = window.arena();
    s.pos.set(sp.x, 0, sp.z + 5); s.yaw = Math.PI; // looking back at it
    window.step(0.2); const p0 = k.pos.clone();
    window.__input.keys.add('KeyW'); window.step(1); window.__input.keys.delete('KeyW');
    return { pet: k.petrified, moved: +k.pos.distanceTo(p0).toFixed(3), text: document.getElementById('kSeenText').textContent, prompt: document.getElementById('promptText').textContent };
  });
  check('Seen, it is stone: no step is taken and the HUD says so', r.pet && r.moved < 0.01 && /WATCHED/.test(r.text), r);
  // strike
  r = await ev(() => {
    const G = window.__G, k = G.killer, s = G.survivors[0]; const sp = window.arena();
    s.pos.set(sp.x, 0, sp.z + 1.9); s.yaw = 0; // back turned
    window.step(0.1); window.tap('Mouse0'); window.step(0.5);
    const h1 = s.health, cd = k.cooldown;
    k.cooldown = 0; window.tap('Mouse0'); window.step(0.5);
    return { h1, cd: +cd.toFixed(1), h2: s.health, score: k.score.brutality };
  });
  check('Left mouse strikes: wounded, then down', r.h1 === 'injured' && r.cd > 1 && r.h2 === 'downed' && r.score >= 900, r);
  // lift and bind
  r = await ev(() => {
    const G = window.__G, k = G.killer, s = G.survivors[0];
    k.cooldown = 0; k.pos.set(s.pos.x, 0, s.pos.z - 1.2); window.step(0.1);
    const prompt = window.__G.promptText;
    window.tap('KeyE'); window.step(1.3);
    const carried = s.health, post = G.posts[0];
    k.pos.set(post.hang.x, 0, post.hang.z + 1.2); G.camYaw = Math.PI; window.step(0.1);
    const p2 = window.__G.promptText;
    window.tap('KeyE'); window.step(1.2);
    return { prompt, carried, p2, h: s.health, hooks: s.hookCount, dev: k.score.devotion, marks: document.querySelectorAll('#markers i.bound').length };
  });
  check('E lifts the fallen and binds them to a post', /Lift/.test(r.prompt) && r.carried === 'carried' && /Bind/.test(r.p2) && r.h === 'hooked' && r.hooks === 1 && r.dev >= 800, r);
  // Sentinel and stepping through it
  r = await ev(() => {
    const G = window.__G, k = G.killer; const sp = window.arena();
    const n0 = G.sentinels.length; k.plantCD = 0; window.step(0.1); window.tap('KeyQ'); window.step(1.7);
    const planted = G.sentinels.length - n0;
    const st = G.sentinels[G.sentinels.length - 1];
    k.pos.set(st.pos.x, 0, st.pos.z - 9); k.transferCD = 0;
    G.camYaw = Math.atan2(st.pos.x - k.pos.x, st.pos.z - k.pos.z); G.camPitch = Math.atan2(1.4 - 2.2, 9);
    window.step(0.1);
    const prompt = window.__G.promptText, aim = document.querySelectorAll('#markers i.aim').length;
    const from = k.pos.clone(); window.tap('KeyF'); window.step(0.1);
    return { planted, prompt, aim, jumped: +k.pos.distanceTo(from).toFixed(1), cd: k.transferCD > 20, sp: !!sp };
  });
  check('Q leaves a Sentinel; F steps into the one you aim at', r.planted === 1 && /Step into/.test(r.prompt) && r.aim === 1 && r.jumped > 8 && r.cd, r);
  // sounds are marked
  r = await ev(() => { const G = window.__G, k = G.killer; G.pings = []; G.noise(k.pos.clone().add({ x: 6, y: 0, z: 0 }), 30, 'pallet'); G.noise(k.pos.clone().add({ x: 90, y: 0, z: 0 }), 30, 'pallet'); window.step(0.1); return { pings: G.pings.length, marks: document.querySelectorAll('#markers i.ping').length }; });
  check('Noises within earshot are marked on screen', r.pings === 1 && r.marks === 1, r);
  // canonize, and the end
  r = await ev(() => {
    const G = window.__G, k = G.killer, s = G.survivors[1]; const sp = window.arena();
    s.pos.set(sp.x, 0, sp.z + 1.3); s.health = 'downed'; s.hookCount = 2; s.bleed = 200;
    window.step(0.1); const prompt = window.__G.promptText;
    window.tap('KeyE'); window.step(3.5);
    const canon = s.canonized;
    for (const o of G.survivors) if (o.alive) o.die('sacrificed');
    for (let i = 0; i < 200 && G.state !== 'ended'; i++) G.update(1 / 30);
    return { prompt, canon, state: G.state, verdict: document.getElementById('verdict').textContent, cats: [...document.querySelectorAll('#score .l')].map((e) => e.textContent).join(',') };
  });
  check('E canonizes the twice-bound; the vigil ends with the Reliquary\'s results', /Canonize/.test(r.prompt) && r.canon && r.state === 'ended' && r.verdict === 'A MERCILESS VIGIL' && /Brutality/.test(r.cats), r);
  console.log(results.join('\n'));
  await browser.close();
})().catch((e) => { console.log(results.join('\n')); console.error(e); process.exit(1); });
