# Hollowmoor desktop app

An Electron shell around the built game. The game's files are served from inside the app; online play talks to the game server.

```sh
cd web && npm install && npm run build      # build the game first
cd desktop && npm install
npm start                                   # run it
npm run pack:win                            # out/Hollowmoor-win32-x64/Hollowmoor.exe
npm run pack:linux                          # out/Hollowmoor-linux-x64/Hollowmoor
npm run dist                                # installers for the system you are on (electron-builder)
```

`F11` (or Alt+Enter, or the Settings toggle) switches fullscreen. *Quit to Desktop* is on the title menu.

To have the app find your game server without typing its address, put the address in `web/server-url.txt` before `npm run build` (see [../server/README.md](../server/README.md)).

The Windows and Linux builds can be made on any system. A signed macOS build has to be made on a Mac.
