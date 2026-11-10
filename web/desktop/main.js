// Hollowmoor for the desktop: a window around the game, with its files served
// from inside the app. Online play talks to the game server over the internet.
const { app, BrowserWindow, Menu, protocol, net, shell, ipcMain } = require('electron');
const path = require('path');
const { pathToFileURL } = require('url');

const ROOT = path.join(__dirname, 'app');
// app://hollowmoor/ behaves like a normal web origin (module scripts, storage, fetch)
protocol.registerSchemesAsPrivileged([{ scheme: 'app', privileges: { standard: true, secure: true, supportFetchAPI: true, corsEnabled: true, stream: true } }]);

// keep the vigil running when the window is not in front (the host runs the match for everyone)
app.commandLine.appendSwitch('disable-renderer-backgrounding');
app.commandLine.appendSwitch('disable-background-timer-throttling');
app.commandLine.appendSwitch('disable-backgrounding-occluded-windows');
app.commandLine.appendSwitch('force_high_performance_gpu');

let win = null;
function createWindow() {
  win = new BrowserWindow({
    width: 1600, height: 900, minWidth: 960, minHeight: 540,
    backgroundColor: '#07080a', show: false, autoHideMenuBar: true, title: 'Hollowmoor',
    webPreferences: { preload: path.join(__dirname, 'preload.js'), contextIsolation: true, nodeIntegration: false, backgroundThrottling: false },
  });
  win.once('ready-to-show', () => { win.maximize(); win.show(); });
  win.loadURL('app://hollowmoor/index.html');
  // F11 or Alt+Enter: fullscreen
  win.webContents.on('before-input-event', (e, input) => {
    if (input.type !== 'keyDown') return;
    if (input.key === 'F11' || (input.key === 'Enter' && input.alt)) { win.setFullScreen(!win.isFullScreen()); e.preventDefault(); }
  });
  win.webContents.setWindowOpenHandler(({ url }) => { if (/^https?:/.test(url)) shell.openExternal(url); return { action: 'deny' }; });
  win.on('closed', () => { win = null; });
}

if (!app.requestSingleInstanceLock()) app.quit();
else {
  app.on('second-instance', () => { if (win) { if (win.isMinimized()) win.restore(); win.focus(); } });
  app.whenReady().then(() => {
    // Windows and Linux: no menu bar. macOS: the standard menus, so Cmd+Q, Cmd+H and fullscreen work as expected.
    Menu.setApplicationMenu(process.platform !== 'darwin' ? null : Menu.buildFromTemplate([
      { label: 'Hollowmoor', submenu: [{ role: 'about' }, { type: 'separator' }, { role: 'hide' }, { role: 'hideOthers' }, { role: 'unhide' }, { type: 'separator' }, { role: 'quit' }] },
      { label: 'View', submenu: [{ role: 'togglefullscreen' }] },
      { label: 'Window', submenu: [{ role: 'minimize' }, { role: 'front' }] },
    ]));
    protocol.handle('app', (request) => {
      const url = new URL(request.url);
      const file = path.normalize(path.join(ROOT, decodeURIComponent(url.pathname)));
      if (!file.startsWith(ROOT)) return new Response('not found', { status: 404 });
      return net.fetch(pathToFileURL(file).toString());
    });
    ipcMain.handle('fullscreen', (e, on) => { if (win) win.setFullScreen(on === undefined ? !win.isFullScreen() : !!on); return win ? win.isFullScreen() : false; });
    ipcMain.handle('quit', () => app.quit());
    createWindow();
    app.on('activate', () => { if (!win) createWindow(); });
  });
  app.on('window-all-closed', () => app.quit());
}
