# Headless tests

Run against a static server of a built game (default `http://localhost:8123`, override with `BASE`):

```sh
npm run build && (cd dist && python3 -m http.server 8123 &)
NODE_PATH=$(npm root -g) node tests/mechanics.cjs        # 14 core mechanic checks (PASS/FAIL lines)
NODE_PATH=$(npm root -g) node tests/features.cjs         # 16 checks: intro, ascension, Toll, canonization, items, chests, crows, lightning
NODE_PATH=$(npm root -g) node tests/balance.cjs 3 600     # 3 AI-only matches x 600 s: bells, hooks, killer state mix
NODE_PATH=$(npm root -g) node tests/match-log.cjs 300     # timeline of one match
```
Requires the `playwright` package and Chromium (`CHROME` overrides the path).
