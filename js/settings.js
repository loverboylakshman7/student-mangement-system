function toggleDarkMode(){

document.body.classList.toggle("dark-mode");

}

function backupData(){

let data={

students:JSON.parse(localStorage.getItem("students"))||[],

attendance:JSON.parse(localStorage.getItem("attendance"))||[],

profile:JSON.parse(localStorage.getItem("adminProfile"))||{}

};

localStorage.setItem("backup",JSON.stringify(data));

alert("Backup Created Successfully!");

}

function restoreData(){

let backup=JSON.parse(localStorage.getItem("backup"));

if(!backup){

alert("No Backup Found");

return;

}

localStorage.setItem("students",JSON.stringify(backup.students));

localStorage.setItem("attendance",JSON.stringify(backup.attendance));

localStorage.setItem("adminProfile",JSON.stringify(backup.profile));

alert("Backup Restored Successfully!");

}

function logout(){

window.location.href="login.html";

}