// Modules
const {app, BrowserWindow} = require('electron')

let mainWindow

// Create a new BrowserWindow when `app` is ready
function createWindow () {

  mainWindow = new BrowserWindow({
    x: 405, y: 720,
    width: 405, height: 720,
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
  //mainWindow.loadFile('renderer/main.html');

  // load pages
  mainWindow.loadFile('renderer/loading.html') //loading page
  setTimeout(() => {
    mainWindow.loadFile('renderer/login1.html') //login1 page
  }, 3000)
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

