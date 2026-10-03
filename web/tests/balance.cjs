const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROME || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const page = await browser.newPage({ viewport: { width: 480, height: 270 } });
  page.on('pageerror', (e) => console.log('pageerror: ' + e.message + '\n' + e.stack));
  await page.goto((process.env.BASE || 'http://localhost:8123') + '/index.html');
  await page.waitForFunction(() => window.__G && window.__G.state === 'title', null, { timeout: 120000 });
  for (let run = 0; run < Number(process.argv[2] || 2); run++) {
    await page.evaluate(() => { const G = window.__G; G.state = 'title'; });
    await page.evaluate(() => window.__G.startMatch(0, ['unblinking']));
    const out = await page.evaluate((secs) => {
      const G = window.__G; G.state = 'sim'; G.toast = () => {};
      G.player.updateAI = undefined; // player idle at spawn but hidden from the killer for this test
      G.player.health = 'escaped'; G.player.model.visible = false;
      const st = {}, kst = {}, reasons = {}; let ring = 0, n = 0, stuck = 0; const flatD = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
      const events = [];
      const ot = G.onSurvivorHooked.bind(G); G.onSurvivorHooked = (s) => { events.push(`${G.time.toFixed(0)} hook ${s.def.short}`); ot(s); };
      const od = G.onBellRung.bind(G); G.onBellRung = (b) => { events.push(`${G.time.toFixed(0)} bell`); od(b); };
      for (let i = 0; i < 30 * secs; i++) {
        G.update(1 / 30);
        if (i % 15 === 0) {
          for (const s of G.survivors) if (!s.isPlayer && s.alive) { const key = s.health === 'healthy' || s.health === 'injured' ? s.ai.state + (s.action ? ':' + s.action.type : '') : s.health; st[key] = (st[key] || 0) + 1; n++; if (s.ai.state === 'bell' && !s.action && s.speed < 0.1) { stuck++; const why = (s.healClaim ? 'waitHeal(' + s.healClaim.ai.state + ',' + s.healClaim.def.short + ',' + flatD(s.healClaim.pos, s.pos).toFixed(0) + ')' : '') + (s.healers.size ? 'beingHealed' : '') + (!s.ai.bell ? 'noBell' : '') + (s.ai.path && s.ai.path.length === 0 ? 'emptyPath' : '') + (s.ai.slot ? ' d=' + flatD(s.ai.slot, s.pos).toFixed(1) : ''); reasons[why.replace(/d=[0-9.]+/, 'd~' + (s.ai.slot ? Math.min(9, Math.round(flatD(s.ai.slot, s.pos))) : ''))] = (reasons[why.replace(/d=[0-9.]+/, 'd~' + (s.ai.slot ? Math.min(9, Math.round(flatD(s.ai.slot, s.pos))) : ''))] || 0) + 1; } }
          const kk = G.killer.petrified ? 'PETRIFIED' : G.killer.state + (G.killer.action ? ':' + G.killer.action.type : ''); kst[kk] = (kst[kk] || 0) + 1;
        }
        if (G.gatesPowered) { events.push(`${G.time.toFixed(0)} GATES`); break; }
        if (G.survivors.every((s) => !s.alive || s.isPlayer)) { events.push(`${G.time.toFixed(0)} all dead`); break; }
      }
      const pct = (o, tot) => Object.entries(o).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k} ${(100 * v / tot).toFixed(0)}%`).join(', ');
      const ktot = Object.values(kst).reduce((a, b) => a + b, 0);
      return { t: G.time.toFixed(0), rung: G.bellsRung, ai: pct(st, n), stuckIdle: (100 * stuck / n).toFixed(0) + '%', reasons: JSON.stringify(reasons), killer: pct(kst, ktot), events: events.join(' | '), final: G.survivors.map((s) => s.def.short + ':' + s.health).join(' ') };
    }, Number(process.argv[3] || 600));
    console.log(JSON.stringify(out, null, 1));
  }
  await browser.close();
})();
