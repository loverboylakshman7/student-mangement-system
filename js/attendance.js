// ==========================
// Attendance Management
// ==========================

document.addEventListener("DOMContentLoaded", loadAttendance);

function loadAttendance() {

    let students = JSON.parse(localStorage.getItem("students")) || [];

    let tbody = document.querySelector("#attendanceTable tbody");

    tbody.innerHTML = "";

    students.forEach((student, index) => {

        let row = `
        <tr>

            <td>${student.roll}</td>

            <td>${student.name}</td>

            <td>

                <select onchange="saveAttendance(${index},this.value)">

                    <option value="Present">Present</option>

                    <option value="Absent">Absent</option>

                    <option value="Leave">Leave</option>

                </select>

            </td>

        </tr>
        `;

        tbody.innerHTML += row;

    });

}

function saveAttendance(index,status){

    let attendance = JSON.parse(localStorage.getItem("attendance")) || [];

    attendance[index]=status;

    localStorage.setItem("attendance",JSON.stringify(attendance));

}