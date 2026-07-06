// Login Function
function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        alert("Login Successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid Username or Password");
    }
}

// Add Student Function
function addStudent() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let course = document.getElementById("course").value;

    if (name === "" || roll === "" || course === "") {
        alert("Please fill all fields.");
        return;
    }

    let students = JSON.parse(localStorage.getItem("students")) || [];

    students.push({
        name: name,
        roll: roll,
        course: course
    });

    localStorage.setItem("students", JSON.stringify(students));

    alert("Student Added Successfully!");

    document.getElementById("studentForm").reset();
}
// Display Students on Dashboard
function displayStudents() {
    let students = JSON.parse(localStorage.getItem("students")) || [];

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