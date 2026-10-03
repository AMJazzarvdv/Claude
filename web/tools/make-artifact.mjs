// Produces a single self-contained HTML file (game code inlined) for hosting
// as a claude.ai Artifact or any static page. Usage: npm run artifact [out]
import { readFileSync, writeFileSync } from 'node:fs';

const out = process.argv[2] || 'dist/hollowmoor.html';
let html = readFileSync('dist/index.html', 'utf8');
const js = readFileSync('dist/game.js', 'utf8');
if (/<\/script/i.test(js)) throw new Error('bundle contains a closing script tag; cannot inline');
html = html
  .replace(/<!doctype html>\s*/i, '')
  .replace(/<html[^>]*>\s*/i, '').replace(/<\/html>\s*/i, '')
  .replace(/<head>\s*/i, '').replace(/<\/head>\s*/i, '')
  .replace(/<body>\s*/i, '').replace(/<\/body>\s*/i, '')
  .replace(/<meta charset[^>]*>\s*/i, '').replace(/<meta name="viewport"[^>]*>\s*/i, '')
  .replace('<script type="module" src="game.js"></script>', () => `<script type="module">${js}</script>`);
writeFileSync(out, html);
console.log(`wrote ${out} (${(html.length / 1024).toFixed(0)} KB)`);
