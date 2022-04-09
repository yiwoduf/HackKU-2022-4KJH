const { remote } = require('electron');
let mainWindow = remote.getCurrentWindow();

let changeModeTochatBtn = document.getElementById('changeModeTochat-btn'),
    changeModeToscheduleBtn = document.getElementById('changeModeToschedule-btn'),
    changeModeToannouncementBtn = document.getElementById('changeModeToannouncement-btn');

changeModeTochatBtn.addEventListener('click', e => {
  mainWindow.loadURL('http://localhost:8080/renderer/scheduleMode.html');
});

// createAccountBtn.addEventListener('click', e => {
//   mainWindow.loadURL('http://localhost:8080/renderer/login3.html');
// });

//Listen for keyboard submit
// itemUrl.addEventListener('keyup', e => {
//     if (e.key === 'Enter') addItem.click()
// })