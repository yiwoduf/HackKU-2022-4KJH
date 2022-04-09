// Modules
const {app, BrowserWindow} = require('electron')
const windowStateKeeper = require('electron-window-state')

let mainWindow

// Create a new BrowserWindow when `app` is ready
function createWindow () {

  let state = windowStateKeeper({
    defaultWidth: 405, defaultHeight: 720
  })

  mainWindow = new BrowserWindow({
    x: state.x, y: state.y,
    width: state.width, height: state.height,
    minWidth: 350, maxWidth: 650, minHeight: 300,
    webPreferences: {
      // --- !! IMPORTANT !! ---
      // Disable 'contextIsolation' to allow 'nodeIntegration'
      // 'contextIsolation' defaults to "true" as from Electron v12
      contextIsolation: false,
      nodeIntegration: true,
      enableRemoteModule: true
    }
  })
  // Listen for window being closed
  mainWindow.on('closed',  () => {
    mainWindow = null
  })

  //mainWindow.webContents.openDevTools();
  mainWindow.loadFile('renderer/login2.html');
  //load pages
  // mainWindow.loadFile('renderer/loading.html') //loading page
  // setTimeout(() => {
  //   mainWindow.loadFile('renderer/login1.html') //login1 page
  // }, 1000)
}

app.on('ready', createWindow)

// Quit when all windows are closed - (Not macOS - Darwin)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// When app icon is clicked and app is running, (macOS) recreate the BrowserWindow
app.on('activate', () => {
  if (mainWindow === null) createWindow()
})

