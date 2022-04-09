const { remote } = require('electron');
let mainWindow = remote.getCurrentWindow();

//login2.html
if (mainWindow.title == "login2"){
  let loginWithSchoolBtn = document.getElementById('loginWithSchool-btn');
  loginWithSchoolBtn.addEventListener('click', e => {
    var popupSpan = document.getElementById('popup-span');
    popupSpan.classList.toggle("show");
    setTimeout(e => {
      popupSpan.style.display="none";
      mainWindow.loadURL('http://localhost:8080/renderer/main.html');
    }, 1500);
  });
}

//main.html
if (mainWindow.title == "main"){
  let changeModeToChatBtn = document.getElementById('changeModeToChat-btn'),
      changeModeToScheduleBtn = document.getElementById('changeModeToSchedule-btn'),
      changeModeToAnnouncementBtn = document.getElementById('changeModeToAnnouncement-btn'),
      scheduleDiv = document.getElementById('schedule-div'),
      chatDiv = document.getElementById('chat-div'),
      announcementDiv = document.getElementById('announcement-div');
  
  changeModeToChatBtn.addEventListener('click', e => {
    scheduleDiv.style.display="none";
    chatDiv.style.display="block";
    announcementDiv.style.display="none";
  });
  changeModeToScheduleBtn.addEventListener('click', e => {
    scheduleDiv.style.display="block";
    chatDiv.style.display="none";
    announcementDiv.style.display="none";
  });
  changeModeToAnnouncementBtn.addEventListener('click', e => {
    scheduleDiv.style.display="none";
    chatDiv.style.display="none";
    announcementDiv.style.display="block";
  });
}


//Listen for keyboard submit
// itemUrl.addEventListener('keyup', e => {
//     if (e.key === 'Enter') addItem.click()
// })