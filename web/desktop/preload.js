// The little the game needs from the desktop shell.
const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('desktop', {
  fullscreen: (on) => ipcRenderer.invoke('fullscreen', on),
  quit: () => ipcRenderer.invoke('quit'),
});
