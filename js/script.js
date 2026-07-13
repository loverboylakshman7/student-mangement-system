   students.push(student); 


    if (name === "" || roll === "" || course === "") {
        alert("Please fill all fields.");
        return;
    }
 let exists = students.some(function(student, index) {
    return student.roll === roll && index !== Number(editIndex);
});

if (exists) {
    alert("Roll Number already exists!");
    return;
}

 students.push({
    id: Date.now(),
    name: name.trim(),
    roll: roll.trim(),
    course: course.trim(),
    createdAt: new Date().toLocaleString()
});

    
StudentManager.saveAllStudents(students);
    alert("Student Added Successfully!");

    document.getElementById("studentForm").reset();
}
// Display Students on Dashboard
function displayStudents() {
    let students = StudentManager.getAllStudents();

    let tableBody = document.querySelector("#studentTable tbody");

    if (!tableBody) return;

    tableBody.innerHTML = "";

    students.forEach(function(student, index) {
       
let row = `
    <tr>
        <td>${student.name}</td>
        <td>${student.roll}</td>
        <td>${student.course}</td>
     <td>
    <button onclick="viewStudent(${index})">View</button>
    <button onclick="editStudent(${index})">Edit</button>
    <button onclick="deleteStudent(${index})">Delete</button>
</td>  
    </tr>
`;
        tableBody.innerHTML += row;
    });

}

// Run when dashboard opens
displayStudents();
function deleteStudent(index) {
    let students = JSON.parse(localStorage.getItem("students")) || [];

    students.splice(index, 1);

    localStorage.setItem("students", JSON.stringify(students));

    displayStudents();
}
function editStudent(index) {
    let students = JSON.parse(localStorage.getItem("students")) || [];

    let student = students[index];

    localStorage.setItem("editIndex", index);

    localStorage.setItem("editStudent", JSON.stringify(student));

    window.location.href = "add_student.html";
}

if (window.location.pathname.includes("add_student.html")) {

    let student = JSON.parse(localStorage.getItem("editStudent"));

    if (student) {
        document.getElementById("name").value = student.name;
        document.getElementById("roll").value = student.roll;
        document.getElementById("course").value = student.course;

        document.querySelector("button").innerText = "Update Student";
    }
}
function searchStudent() {

    let input = document.getElementById("search").value.toLowerCase();

    let rows = document.querySelectorAll("#studentTable tbody tr");

    rows.forEach(function(row) {

        let name = row.cells[0].innerText.toLowerCase();

        if (name.includes(input)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }

    });

}
function viewStudent(index) {

    let students = JSON.parse(localStorage.getItem("students")) || [];

    localStorage.setItem("viewStudent", JSON.stringify(students[index]));

    window.location.href = "view_student.html";

}
if (window.location.pathname.includes("view_student.html")) {

    let student = JSON.parse(localStorage.getItem("viewStudent"));

    if (student) {

        document.getElementById("studentName").innerText = student.name;
        document.getElementById("studentRoll").innerText = student.roll;
        document.getElementById("studentCourse").innerText = student.course;

    }

}
function exportStudents() {

    let students = JSON.parse(localStorage.getItem("students")) || [];

    if (students.length === 0) {
        alert("No student data available!");
        return;
    }

    let csv = "Name,Roll Number,Course\n";

    students.forEach(function(student) {
        csv += `${student.name},${student.roll},${student.course}\n`;
    });

    let blob = new Blob([csv], { type: "text/csv" });

    let link = document.createElement("a");

    link.href = URL.createObjectURL(blob);

    link.download = "students.csv";

    link.click();
}
function clearAllStudents() {

    if (confirm("Are you sure you want to delete all students?")) {

        localStorage.removeItem("students");

        alert("All students have been deleted.");

        displayStudents();
    }

}

// ==============================
// Display Students in Table
// ==============================

function displayStudents() {

    let students = JSON.parse(localStorage.getItem("students")) || [];

    let table = document.getElementById("studentBody");

    if (!table) return;

    table.innerHTML = "";

    students.forEach(function(student, index) {

        table.innerHTML += `

        <tr>

            <td>${student.name}</td>

            <td>${student.roll}</td>

            <td>${student.course}</td>

            <td>${student.email}</td>

            <td>${student.phone}</td>

            <td>${student.gender}</td>

            <td>

<button onclick="viewStudent(${index})">

<i class="fa-solid fa-eye"></i>

</button>

<button onclick="editStudent(${index})">

<i class="fa-solid fa-pen"></i>

</button>

<button onclick="deleteStudent(${index})">

<i class="fa-solid fa-trash"></i>

</button>

            </td>

        </tr>

        `;

    });

}

displayStudents();