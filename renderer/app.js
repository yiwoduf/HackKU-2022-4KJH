const { remote } = require('electron');
let mainWindow = remote.getCurrentWindow();

let loginWithSchoolBtn = document.getElementById('loginWithSchool-btn');
// let changeModeTochatBtn = document.getElementById('changeModeToChat-btn'),
//     changeModeToscheduleBtn = document.getElementById('changeModeToSchedule-btn'),
//     changeModeToannouncementBtn = document.getElementById('changeModeToAnnouncement-btn');

loginWithSchoolBtn.addEventListener('click', e => {
  var popupSpan = document.getElementById('popup-span');
  popupSpan.classList.toggle("show");
  setTimeout(e => {
    popupSpan.style.display="none";
    mainWindow.loadURL('http://localhost:8080/renderer/main.html');
  }, 1500);

});
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