function addStudent(){

let student={

name:document.getElementById("name").value.trim(),

roll:document.getElementById("roll").value.trim(),

course:document.getElementById("course").value.trim(),

email:document.getElementById("email").value.trim(),

phone:document.getElementById("phone").value.trim(),

gender:document.getElementById("gender").value

};

if(

!student.name ||

!student.roll ||

!student.course ||

!student.email ||

!student.phone ||

!student.gender

){

alert("Please fill all fields.");

return;

}

let students=JSON.parse(localStorage.getItem("students"))||[];

let exists=students.some(s=>s.roll===student.roll);

if(exists){

alert("Roll Number already exists!");

return;

}

students.push(student);

localStorage.setItem("students",JSON.stringify(students));

alert("Student Added Successfully!");

document.querySelector(".profile-form").reset?.();

location.href="view_student.html";

}