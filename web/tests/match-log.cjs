const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROME || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await browser.newPage({ viewport: { width: 640, height: 360 } });
  page.on('pageerror', (e) => console.log('pageerror: ' + e.message + '\n' + e.stack));
  page.on('console', (m) => { if (m.type() === 'error') console.log('console: ' + m.text()); });
  await page.goto((process.env.BASE || 'http://localhost:8123') + '/index.html');
  await page.waitForFunction(() => window.__G && window.__G.state === 'title', null, { timeout: 120000 });
  await page.click('[data-go=select]'); await page.click('#startBtn');
  await page.waitForFunction(() => window.__G.state === 'playing', null, { timeout: 60000 });
  const total = Number(process.argv[2] || 240);
  for (let t = 0; t < total; t += 10) {
    const r = await page.evaluate(() => {
      const G = window.__G; const t0 = performance.now();
      G.state = 'sim';
      const log = [];
      const origToast = G.toast.bind(G);
      G.toast = (m, k) => { log.push(m); };
      for (let i = 0; i < 300; i++) { if (G.endT !== null && G.endT < 0.1) break; G.update(1 / 30); }
      G.toast = origToast;
      const k = G.killer;
      return {
        ms: Math.round(performance.now() - t0), time: G.time.toFixed(0), bellsRung: G.bellsRung,
        bells: G.bells.map(b => (b.progress * 100).toFixed(0) + (b.ringers.size ? '*' + b.ringers.size : '')).join(' '),
        surv: G.survivors.map(s => `${s.name.split(' ')[0]}:${s.health}${s.hookCount ? '/h' + s.hookCount : ''}:${s.ai.state}:${s.resolve.toFixed(0)}`).join(' | '),
        killer: `${k.state}${k.action ? '(' + k.action.type + ')' : ''} pos ${k.pos.x.toFixed(0)},${k.pos.z.toFixed(0)} tgt ${k.target ? k.target.name.split(' ')[0] : '-'} watchers ${k.watchers} frozen ${k.frozenT.toFixed(1)} sentinels ${G.sentinels.length}`,
        log, end: G.endT, gates: G.gatesPowered, collapse: G.collapseT,
      };
    });
    console.log(`[t=${r.time}s ${r.ms}ms] rung ${r.bellsRung} | ${r.bells}\n   ${r.surv}\n   K: ${r.killer}${r.gates ? ' GATES' : ''}${r.collapse !== null ? ' collapse ' + r.collapse.toFixed(0) : ''}`);
    if (r.log.length) console.log('   >> ' + r.log.join(' || '));
    if (r.end !== null) { console.log('END pending'); break; }
  }
  await browser.close();
})();
