document.addEventListener("DOMContentLoaded", loadReport);

function loadReport(){

let students=JSON.parse(localStorage.getItem("students"))||[];

let attendance=JSON.parse(localStorage.getItem("attendance"))||[];

document.getElementById("studentCount").textContent=students.length;

let present=attendance.filter(a=>a==="Present").length;

let absent=attendance.filter(a=>a==="Absent").length;

document.getElementById("presentCount").textContent=present;

document.getElementById("absentCount").textContent=absent;

}

function exportCSV(){

let students=JSON.parse(localStorage.getItem("students"))||[];

let csv="Name,Roll,Course\n";

students.forEach(student=>{

csv+=`${student.name},${student.roll},${student.course}\n`;

});

let blob=new Blob([csv],{type:"text/csv"});

let link=document.createElement("a");

link.href=URL.createObjectURL(blob);

link.download="Student_Report.csv";

link.click();

}

function printReport(){

window.print();

}