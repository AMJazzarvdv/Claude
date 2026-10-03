// Checks for the second wave of features: intro, ascension, Toll of Stone,
// canonization, items, chests, crows, lightning, blink afterimages.
const { chromium } = require('playwright');
const BASE = process.env.BASE || 'http://localhost:8123';
const results = [];
const check = (name, ok, info = '') => results.push(`${ok ? 'PASS' : 'FAIL'}  ${name} ${info}`);

(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROME || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await browser.newPage({ viewport: { width: 800, height: 450 } });
  page.on('pageerror', (e) => results.push('pageerror: ' + e.message + ' ' + (e.stack || '').split('\n')[1]));
  await page.goto(BASE + '/index.html', { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => window.__G && window.__G.state === 'title', null, { timeout: 120000 });
  const ev = (fn, arg) => page.evaluate(fn, arg);

  // difficulty picker
  await page.click('[data-go=select]');
  await page.click('.diff[data-d=penance]');
  let r = await ev(() => document.querySelector('.diff.sel')?.dataset.d);
  check('Difficulty picker selects Penance', r === 'penance', r);
  await page.click('.diff[data-d=vigil]');

  // intro + skip
  await page.click('#startBtn');
  await page.waitForFunction(() => ['intro', 'playing'].includes(window.__G.state), null, { timeout: 60000 });
  r = await ev(() => ({ s: window.__G.state, card: document.getElementById('intro').classList.contains('on'), realm: document.getElementById('introRealm').textContent }));
  check('Match opens with the intro cinematic', r.s === 'intro' && r.card, JSON.stringify(r));
  await page.keyboard.press('Space');
  await page.waitForTimeout(300);
  r = await ev(() => window.__G.state);
  check('Space skips the intro', r === 'playing', r);

  // isolate: freeze teammates far away, only the player's gaze counts
  await ev(() => {
    const G = window.__G; G.state = 'sim';
    for (const s of G.survivors) if (!s.isPlayer) { s.updateAI = () => { s.speed = 0; }; s.pos.set(45, 0, 45 + s.id); }
    window.__see = G.canSee; G.canSee = function (s, pts) { return s.isPlayer ? window.__see.call(this, s, pts) : false; };
    window.step = (sec) => { for (let i = 0; i < Math.round(sec * 30); i++) { G.update(1 / 30); window.__input.pressed.clear(); } };
    // an open spot with a clear 12 m lane toward +z
    window.openSpot = () => {
      for (let k = 0; k < 400; k++) {
        const sp = G.world.randomFreePoint(Math.random, 0, 40, 0, 0);
        const a = { x: sp.x, y: 1.6, z: sp.z }, b = { x: sp.x, y: 1.6, z: sp.z + 12 }, c = { x: sp.x, y: 1.6, z: sp.z - 9 };
        const lane = (A, B) => G.world.raycast(new A.constructor ? G.player.pos.clone().set(A.x, A.y, A.z) : A, G.player.pos.clone().set(B.x, B.y, B.z)) >= 0.999;
        if (lane(a, b) && lane(a, c) && G.world.walkable(sp, { x: sp.x, z: sp.z + 9 })) return sp;
      }
      return G.world.randomFreePoint(Math.random, 0, 40, 0, 0);
    };
    window.face = (a, b) => Math.atan2(b.x - a.x, b.z - a.z);
  });

  // ascension
  r = await ev(() => { const G = window.__G; G.bellsRung = 2; window.step(0.1); return G.killer.tier; });
  check('Two bells ascend the Reliquary to Martyr', r === 2, 'tier ' + r);

  // Toll of Stone: hold its gaze >3 s at tier 2
  r = await ev(() => {
    const G = window.__G, p = G.player, k = G.killer;
    const sp = window.openSpot(); p.pos.set(sp.x, 0, sp.z); p.resolve = p.maxResolve; p.noBlink = 0;
    k.pos.set(p.pos.x, 0, p.pos.z + 8); k.stunT = 0; k.tollCD = 0; k.toll = null; k.state = 'patrol'; k.action = null;
    G.camYaw = 0; G.camPitch = 0.05;
    let charged = false, released = false, blinked = false;
    const orig = G.tollOfStone.bind(G); G.tollOfStone = (kk) => { released = true; orig(kk); };
    for (let i = 0; i < 30 * 8; i++) { p.resolve = p.maxResolve; G.update(1 / 30); if (k.toll) charged = true; if (released && p.blinkT > 0) { blinked = true; break; } }
    G.tollOfStone = orig;
    return { charged, released, blinked, cd: +k.tollCD.toFixed(1) };
  });
  check('Holding its gaze charges and releases the Toll of Stone', r.charged && r.released && r.blinked && r.cd > 20, JSON.stringify(r));
  // dodge: look away mid-charge cancels
  r = await ev(() => {
    const G = window.__G, p = G.player, k = G.killer;
    k.tollCD = 0; k.toll = null; k.watchedT = 0; k.stunT = 0;
    k.pos.set(p.pos.x, 0, p.pos.z + 8); G.camYaw = 0;
    let rel = false; const orig = G.tollOfStone.bind(G); G.tollOfStone = (kk) => { rel = true; orig(kk); };
    for (let i = 0; i < 30 * 6 && !k.toll; i++) { p.resolve = p.maxResolve; G.update(1 / 30); }
    const startedCharge = !!k.toll;
    G.camYaw = Math.PI; // look away
    for (let i = 0; i < 30 * 1.5; i++) { G.update(1 / 30); k.pos.set(p.pos.x, 0, p.pos.z + 14); }
    G.tollOfStone = orig;
    return { startedCharge, cancelled: !k.toll && !rel };
  });
  check('Looking away mid-charge cancels the Toll', r.startedCharge && r.cancelled, JSON.stringify(r));

  // blink afterimage
  r = await ev(() => {
    const G = window.__G, p = G.player, k = G.killer;
    k.pos.set(p.pos.x, 0, p.pos.z + 12); k.stunT = 0; k.toll = null; k.tollCD = 99; k.target = p; k.state = 'chase';
    G.camYaw = 0; window.step(0.2);
    p.forceBlink(0.6); window.step(0.5);
    for (let i = 0; i < 20 && !k.ghost.visible; i++) window.step(0.05);
    return { ghost: k.ghost.visible };
  });
  check('Moving during your blink leaves a pale afterimage', r.ghost, JSON.stringify(r));

  // lightning reveals its outline
  r = await ev(() => { const G = window.__G; G.state = 'playing'; G.auraT = 0; G.killer.pos.set(G.player.pos.x + 20, 0, G.player.pos.z); G.weather.strike(); G.state = 'sim'; G.weather.update(0.05, G.camera.position); window.step(0.1); return { aura: G.killer.aura.visible, flash: G.weather.flash > 0.3 }; });
  check('Lightning flashes and reveals the Reliquary\'s outline', r.aura && r.flash, JSON.stringify(r));

  // items: mirror lets the gaze count behind you
  r = await ev(() => {
    const G = window.__G, p = G.player, k = G.killer;
    G.giveItem(p, 'mirror');
    k.stunT = 0; k.toll = null; k.tollCD = 99; k.action = null;
    G.camYaw = 0; G.camPitch = 0;
    k.pos.set(p.pos.x, 0, p.pos.z - 8); // behind the player
    window.step(0.2);
    const withoutMirror = k.petrified;
    return { withoutMirror, item: p.item, hud: !document.getElementById('itemSlot').hidden };
  });
  await page.keyboard.down('KeyF');
  let r2 = await ev(() => { const G = window.__G, p = G.player, k = G.killer; const c0 = p.itemCharges; k.pos.set(p.pos.x, 0, p.pos.z - 8); window.step(0.5); return { up: p.mirrorUp, pet: k.petrified, used: +(c0 - p.itemCharges).toFixed(2), frame: !document.getElementById('mirrorFrame').hidden }; });
  await page.keyboard.up('KeyF');
  check('Hand Mirror: holding F freezes the Reliquary behind you', !r.withoutMirror && r.item === 'mirror' && r.hud && r2.up && r2.pet && r2.used > 0.3, JSON.stringify({ ...r, ...r2 }));

  // candle
  await ev(() => { const G = window.__G; G.consumeItem(G.player); G.giveItem(G.player, 'candle'); G.killer.pos.set(G.player.pos.x + 30, 0, G.player.pos.z); });
  await ev(() => { window.__input.pressed.add('KeyF'); window.step(0.1); });
  r = await ev(() => {
    const G = window.__G, p = G.player, k = G.killer;
    const placed = !!G.candle, light = G.candle?.light.intensity > 0;
    k.pos.set(G.candle.pos.x + 2, 0, G.candle.pos.z); k.frozenT = 9; k.watchers = 1; G.camYaw = window.face(p.pos, k.pos);
    window.step(0.1);
    return { placed, light, item: p.item, lament: k.lament, near: G.nearCandle(p.pos) };
  });
  check('Votive Candle: placed with light; no Lament in its glow', r.placed && r.light && r.item === null && !r.lament && r.near, JSON.stringify(r));

  // holy water shatters a sentinel
  r = await ev(() => {
    const G = window.__G, p = G.player, k = G.killer;
    k.pos.set(p.pos.x + 30, 0, p.pos.z + 30); k.stunT = 999;
    const sp = window.openSpot(); p.pos.set(sp.x, 0, sp.z);
    G.giveItem(p, 'holy');
    const st = G.sentinels[0];
    st.moveTo({ x: p.pos.x, z: p.pos.z + 6 }, 0, 'pray');
    G.camYaw = 0; G.camPitch = -0.05; window.step(0.1);
    return { n0: G.sentinels.length };
  });
  await ev(() => { window.__input.pressed.add('KeyF'); window.__G.update(1 / 30); window.__input.pressed.clear(); });
  r2 = await ev(() => { const G = window.__G; for (let i = 0; i < 60 && G.projectiles.length; i++) window.step(0.05); return { n1: G.sentinels.length, flying: G.projectiles.length, item: G.player.item }; });
  check('Holy Water thrown at a Sentinel shatters it', r2.n1 === r.n0 - 1 && r2.item === null, JSON.stringify({ ...r, ...r2 }));
  // holy water scalds the Reliquary
  r = await ev(() => {
    const G = window.__G, p = G.player, k = G.killer;
    const sp = window.openSpot(); p.pos.set(sp.x, 0, sp.z);
    G.giveItem(p, 'holy'); k.stunT = 0; k.pos.set(p.pos.x, 0, p.pos.z + 6); k.action = null; G.camYaw = 0; G.camPitch = -0.02;
    G.canSee = () => true; // keep it frozen in place while the flask flies
    window.step(0.1);
    return true;
  });
  await ev(() => { window.__input.pressed.add('KeyF'); window.__G.update(1 / 30); window.__input.pressed.clear(); });
  r2 = await ev(() => { const G = window.__G; for (let i = 0; i < 40 && G.projectiles.length; i++) window.step(0.05); G.canSee = function (s, pts) { return s.isPlayer ? window.__see.call(this, s, pts) : false; }; return { stun: +G.killer.stunT.toFixed(1), tcd: G.killer.transferCD > 20 }; });
  check('Holy Water scalds the Reliquary', r2.stun > 1 && r2.tcd, JSON.stringify(r2));

  // bandage
  await ev(() => { const G = window.__G, p = G.player; p.health = 'injured'; G.giveItem(p, 'bandage'); G.killer.pos.set(p.pos.x + 40, 0, p.pos.z); G.killer.stunT = 999; });
  await ev(() => { window.__input.pressed.add('KeyF'); window.__G.update(1 / 30); window.__input.pressed.clear(); });
  r = await ev(() => { const G = window.__G; const a = G.player.action?.type; window.step(6.3); return { a, h: G.player.health, item: G.player.item }; });
  check('Linen Bandages heal you in six seconds', r.a === 'bandage' && r.h === 'healthy' && r.item === null, JSON.stringify(r));

  // chest search
  r = await ev(() => {
    const G = window.__G, p = G.player, c = G.chests.find((x) => !x.opened);
    if (!c) return { none: true };
    p.pos.copy(c.pos).addScaledVector(c.front, 1.0); G.camYaw = window.face(p.pos, c.pos); G.camPitch = -0.2;
    window.step(0.05);
    return { prompt: G.promptText, n: G.chests.length };
  });
  await page.keyboard.down('KeyE');
  r2 = await ev(() => { const G = window.__G; const log = []; const og = G.giveItem.bind(G), oc = G.consumeItem.bind(G); G.giveItem = (a, b) => { log.push('give ' + b); og(a, b); }; G.consumeItem = (a) => { log.push('consume ' + a.item + ' ' + new Error().stack.split('\n')[2].trim()); oc(a); }; window.step(6.4); G.giveItem = og; G.consumeItem = oc; return { item: G.player.item, opened: G.chests.some((c) => c.opened), log: log.join(' | ') }; });
  await page.keyboard.up('KeyE');
  check('Searching a reliquary chest for 6 s yields an item', !r.none && r.n >= 3 && r2.opened && !!r2.item, JSON.stringify({ ...r, ...r2 }));

  // crows scatter and alert
  r = await ev(() => {
    const G = window.__G, p = G.player, c = G.crows.list.find((x) => x.state === 'perch');
    if (!c) return { none: true };
    const n0 = G.noises.length;
    p.pos.set(c.home.x + 3, 0, c.home.z); p.speed = 4; G.crows.update(0.016);
    return { state: c.state, noise: G.noises.length > n0, n: G.crows.list.length };
  });
  check('Running past crows scatters them and makes noise', r.state === 'fly' && r.noise && r.n >= 8, JSON.stringify(r));

  // regressions found in review
  r = await ev(() => {
    const G = window.__G, p = G.player, k = G.killer;
    k.pos.set(p.pos.x + 40, 0, p.pos.z); k.stunT = 999;
    p.health = 'injured'; p.healProg = 0; p.action = null; G.giveItem(p, 'bandage');
    p.startAction('bandage'); window.step(5); p.cancelAction();
    return { prog: +p.healProg.toFixed(2), item: p.item, h: p.health };
  });
  check('A cancelled bandage keeps neither its progress nor a free heal', r.prog === 0 && r.item === 'bandage' && r.h === 'injured', JSON.stringify(r));
  r = await ev(() => {
    const G = window.__G, p = G.player, k = G.killer;
    G.consumeItem(p); if (G.candle) { G.candle.dispose(); G.candle = null; }
    const sp = window.openSpot(); p.pos.set(sp.x, 0, sp.z); p.resolve = p.maxResolve; p.noBlink = 0;
    k.stunT = 0; k.action = null; k.pos.set(sp.x, 0, sp.z + 6); k.toll = { t: 0.3, dur: 1.8, lost: 0 }; k.tollCD = 0;
    G.camYaw = 0; G.camPitch = 0; p.yaw = 0; window.step(0.1);
    const charging = !!k.toll;
    G.giveItem(p, 'candle'); window.__input.pressed.add('KeyF'); G.update(1 / 30); window.__input.pressed.clear();
    window.step(0.1);
    const out = { charging, candle: !!G.nearCandle(k.pos), toll: !!k.toll };
    k.tollCD = 99; return out;
  });
  check('A candle set down mid-charge snuffs the Toll', r.charging && r.candle && !r.toll, JSON.stringify(r));
  r = await ev(() => {
    const G = window.__G, k = G.killer, from = k.pos.clone(), to = k.pos.clone().add({ x: 1.8, y: 0, z: 0 });
    k.stunT = 0; k.action = { type: 'vault', t: 0.75, dur: 1.5, from, to }; k.pos.y = 0.6;
    k.stun(1, 'holy');
    return { y: k.pos.y, action: k.action };
  });
  check('A stun mid-vault sets the Reliquary back on the ground', r.y === 0 && r.action === null, JSON.stringify(r));
  r = await ev(() => { const G = window.__G, k = G.killer; k.snapGhost(); return { vis: k.ghost.visible }; });
  check('The blink afterimage stays hidden until the eyes reopen', r.vis === false, JSON.stringify(r));
  r = await ev(() => { const G = window.__G, p = G.player; p.canonizing = true; const pts = [G.killer.headPos()]; const seen = window.__see.call(G, p, pts); p.canonizing = false; return { seen }; });
  check('Your own canonization camera does not hold the statue', r.seen === false, JSON.stringify(r));

  // canonization: a twice-bound survivor is turned to stone
  r = await ev(() => {
    const G = window.__G, p = G.player, k = G.killer;
    const sp = window.openSpot(); p.pos.set(sp.x, 0, sp.z);
    p.health = 'downed'; p.hookCount = 2; p.bleed = 200; p.item = null;
    k.stunT = 0; k.toll = null; k.tollCD = 99; k.action = null; k.carrying = null;
    k.pos.set(p.pos.x + 1.0, 0, p.pos.z); k.target = p; k.state = 'chase'; k.thinkT = 0;
    G.canSee = () => false; // nobody watches: let the stone work
    let started = false, mid = 0;
    for (let i = 0; i < 30 * 6 && p.health !== 'dead'; i++) { G.update(1 / 30); if (k.action?.type === 'canonize') { started = true; mid = Math.max(mid, p.stone || 0); } }
    return { started, mid: +mid.toFixed(2), health: p.health, canonized: !!p.canonized, memorials: G.memorials.length, visible: p.model.visible, end: G.endT !== null };
  });
  check('A twice-bound survivor is canonized into a statue', r.started && r.health === 'dead' && r.canonized && r.memorials === 1 && r.visible && r.end, JSON.stringify(r));
  r = await ev(() => { const G = window.__G; for (let i = 0; i < 30 * 4 && G.state !== 'ended'; i++) G.update(1 / 30); return document.getElementById('verdict').textContent; });
  check('Results show CANONIZED', r === 'CANONIZED', r);

  console.log(results.join('\n'));
  await browser.close();
})();
