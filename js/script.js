function login() {

    const username = document.getElementById("username")?.value.trim();
    const password = document.getElementById("password")?.value.trim();

    if (username === "admin" && password === "1234") {

        alert("Login Successful!");

        window.location.href = "dashboard.html";

    } else {

        alert("Invalid Username or Password");

    }

}

// ----------------------
// ADD / UPDATE STUDENT
// ----------------------

function addStudent() {

    const name = document.getElementById("name").value.trim();

    const roll = document.getElementById("roll").value.trim();

    const course = document.getElementById("course").value.trim();

    const email = document.getElementById("email")?.value.trim() || "";

    const phone = document.getElementById("phone")?.value.trim() || "";

    const gender = document.getElementById("gender")?.value || "";

    if (!name || !roll || !course) {

        alert("Please fill all required fields.");

        return;

    }

    let students = JSON.parse(localStorage.getItem("students")) || [];

    let editIndex = localStorage.getItem("editIndex");

    let duplicate = students.some((student, index) => {

        return student.roll === roll && index !== Number(editIndex);

    });

    if (duplicate) {

        alert("Roll Number already exists!");

        return;

    }

    const student = {

        id: editIndex !== null
            ? students[editIndex].id
            : Date.now(),

        name,
        roll,
        course,
        email,
        phone,
        gender,

        createdAt:

            editIndex !== null

            ? students[editIndex].createdAt

            : new Date().toLocaleString()

    };

    if (editIndex !== null) {

        students[editIndex] = student;

        localStorage.setItem("students", JSON.stringify(students));

        localStorage.removeItem("editIndex");

        localStorage.removeItem("editStudent");

        alert("Student Updated Successfully!");

        window.location.href = "view_students.html";

        return;

    }

    students.push(student);

    localStorage.setItem("students", JSON.stringify(students));

    alert("Student Added Successfully!");

    document.getElementById("studentForm")?.reset();

}

// ======================================
// DISPLAY STUDENTS
// ======================================

function displayStudents() {

    let students = JSON.parse(localStorage.getItem("students")) || [];

    let tableBody =
        document.querySelector("#studentTable tbody") ||
        document.getElementById("studentBody");

    if (!tableBody) return;

    tableBody.innerHTML = "";

    students.forEach(function(student, index) {

        tableBody.innerHTML += `

        <tr>

            <td>${student.name}</td>

            <td>${student.roll}</td>

            <td>${student.course}</td>

            <td>${student.email || "-"}</td>

            <td>${student.phone || "-"}</td>

            <td>${student.gender || "-"}</td>

            <td>

                <button onclick="viewStudent(${index})">

                    👁 View

                </button>

                <button onclick="editStudent(${index})">

                    ✏ Edit

                </button>

                <button onclick="deleteStudent(${index})">

                    🗑 Delete

                </button>

            </td>

        </tr>

        `;

    });

}

// ======================================
// DELETE STUDENT
// ======================================

function deleteStudent(index){

    let students =
        JSON.parse(localStorage.getItem("students")) || [];

    if(!confirm("Delete this student?")){

        return;

    }

    students.splice(index,1);

    localStorage.setItem(

        "students",

        JSON.stringify(students)

    );

    displayStudents();

}

// ======================================
// SEARCH STUDENT
// ======================================

function searchStudent(){

    let input =
        document.getElementById("search");

    if(!input) return;

    let filter =
        input.value.toLowerCase();

    let rows =
        document.querySelectorAll("#studentTable tbody tr");

    rows.forEach(function(row){

        let text =
            row.innerText.toLowerCase();

        row.style.display =
            text.includes(filter)

            ? ""

            : "none";

    });

}

// ======================================
// EDIT STUDENT
// ======================================

function editStudent(index){

    let students = JSON.parse(localStorage.getItem("students")) || [];

    localStorage.setItem("editIndex", index);

    localStorage.setItem(
        "editStudent",
        JSON.stringify(students[index])
    );

    window.location.href = "add_student.html";

}

// ======================================
// VIEW STUDENT
// ======================================

function viewStudent(index){

    let students = JSON.parse(localStorage.getItem("students")) || [];

    localStorage.setItem(
        "viewStudent",
        JSON.stringify(students[index])
    );

    window.location.href = "view_student.html";

}

// ======================================
// LOAD EDIT STUDENT
// ======================================

function loadEditStudent(){

    if(!window.location.pathname.includes("add_student.html"))
        return;

    let student =
        JSON.parse(localStorage.getItem("editStudent"));

    if(!student) return;

    document.getElementById("name").value =
        student.name;

    document.getElementById("roll").value =
        student.roll;

    document.getElementById("course").value =
        student.course;

    if(document.getElementById("email"))
        document.getElementById("email").value =
        student.email || "";

    if(document.getElementById("phone"))
        document.getElementById("phone").value =
        student.phone || "";

    if(document.getElementById("gender"))
        document.getElementById("gender").value =
        student.gender || "";

    let button =
        document.querySelector("button");

    if(button){

        button.innerHTML =
        "💾 Update Student";

    }

}

// ======================================
// LOAD STUDENT PROFILE
// ======================================

function loadStudentProfile(){

    if(!window.location.pathname.includes("view_student.html"))
        return;

    let student =
        JSON.parse(localStorage.getItem("viewStudent"));

    if(!student) return;

    document.getElementById("studentName").innerText =
        student.name;

    document.getElementById("studentRoll").innerText =
        student.roll;

    document.getElementById("studentCourse").innerText =
        student.course;

    if(document.getElementById("studentEmail"))
        document.getElementById("studentEmail").innerText =
        student.email || "-";

    if(document.getElementById("studentPhone"))
        document.getElementById("studentPhone").innerText =
        student.phone || "-";

    if(document.getElementById("studentGender"))
        document.getElementById("studentGender").innerText =
        student.gender || "-";

}

// ======================================
// EXPORT STUDENTS
// ======================================

function exportStudents(){

    let students = JSON.parse(localStorage.getItem("students")) || [];

    if(students.length===0){

        alert("No student data available.");

        return;

    }

    let csv =
    "Name,Roll Number,Course,Email,Phone,Gender,Created At\n";

    students.forEach(function(student){

        csv +=

`${student.name},
${student.roll},
${student.course},
${student.email || ""},
${student.phone || ""},
${student.gender || ""},
${student.createdAt || ""}
\n`;

    });

    let blob =
    new Blob([csv],{type:"text/csv"});

    let link =
    document.createElement("a");

    link.href =
    URL.createObjectURL(blob);

    link.download =
    "students.csv";

    link.click();

}

// ======================================
// CLEAR ALL STUDENTS
// ======================================

function clearAllStudents(){

    if(!confirm("Delete all students?")){

        return;

    }

    localStorage.removeItem("students");

    displayStudents();

    alert("All students deleted successfully.");

}

// ======================================
// TOTAL STUDENTS
// ======================================

function getTotalStudents(){

    let students =
    JSON.parse(localStorage.getItem("students")) || [];

    return students.length;

}

// ======================================
// UPDATE DASHBOARD CARD
// ======================================


function updateDashboard(){

    let students = JSON.parse(localStorage.getItem("students")) || [];

    let total = students.length;

    let male = students.filter(s => s.gender === "Male").length;

    let female = students.filter(s => s.gender === "Female").length;

    let courses = [...new Set(students.map(s => s.course))];

    if(document.getElementById("totalStudents"))
        document.getElementById("totalStudents").innerText = total;

    if(document.getElementById("maleStudents"))
        document.getElementById("maleStudents").innerText = male;

    if(document.getElementById("femaleStudents"))
        document.getElementById("femaleStudents").innerText = female;

    if(document.getElementById("courseCount"))
        document.getElementById("courseCount").innerText = courses.length;

}

// ======================================
// AUTO LOAD
// ======================================

document.addEventListener("DOMContentLoaded",function(){

    displayStudents();

    loadEditStudent();

    loadStudentProfile();

    updateDashboard();

});