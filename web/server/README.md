# Hollowmoor server (Cloudflare Worker)

Rooms, quick match and the hosted web build, in one Worker with two Durable Objects (`Room`, `Registry`). It fits the Workers free plan.

## Deploy

```sh
cd web && npm install && npm run build      # the Worker serves web/dist
cd server && npm install
npx wrangler login                          # or set CLOUDFLARE_API_TOKEN (template: "Edit Cloudflare Workers")
npx wrangler deploy
```

Wrangler prints the address, for example `https://hollowmoor.<your-subdomain>.workers.dev`. Opening it plays the game, and *Play Online* there uses the same address for rooms.

For the desktop app and any copy hosted elsewhere, stamp that address into the build and rebuild:

```sh
echo "https://hollowmoor.<your-subdomain>.workers.dev" > web/server-url.txt
cd web && npm run build && npm run artifact
```

## Run locally

```sh
npx wrangler dev --port 8787
```

Then open the game with `?server=http://127.0.0.1:8787` added to its address.

## What it does

| Route | Purpose |
|---|---|
| `GET /api/health` | liveness and protocol version |
| `GET /api/new` | a fresh room code |
| `GET /api/quick` | an open public room to join, or a fresh code |
| `WS /room/<CODE>?name=…&v=1` | join a room; the first one in hosts |
| anything else | the game's files |

Inside a room a client sends `"<to>|<json>"` (`h` the host, `a` everyone else, a peer id, or `!` this server) and the server forwards `"<from>|<json>"` without reading the JSON. A room holds at most five players, locks while a vigil is under way, and closes when its host leaves.
