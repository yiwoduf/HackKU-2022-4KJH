const { remote } = require('electron');
let mainWindow = remote.getCurrentWindow();

let loginWithSchoolBtn = document.getElementById('loginWithSchool-btn');
// let changeModeTochatBtn = document.getElementById('changeModeToChat-btn'),
//     changeModeToscheduleBtn = document.getElementById('changeModeToSchedule-btn'),
//     changeModeToannouncementBtn = document.getElementById('changeModeToAnnouncement-btn');

loginWithSchoolBtn.addEventListener('click', e => {
  mainWindow.loadURL('http://localhost:8080/renderer/main.html')
})
// changeModeTochatBtn.addEventListener('click', e => {
//   mainWindow.loadURL('http://localhost:8080/renderer/scheduleMode.html');
// });

// createAccountBtn.addEventListener('click', e => {
//   mainWindow.loadURL('http://localhost:8080/renderer/login3.html');
// });

//Listen for keyboard submit
// itemUrl.addEventListener('keyup', e => {
//     if (e.key === 'Enter') addItem.click()
// })