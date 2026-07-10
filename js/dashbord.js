// ===============================
// Dashboard Statistics
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    loadDashboard();

    loadRecentActivities();

});

// ===============================
// Dashboard Cards
// ===============================

function loadDashboard() {

    const students = JSON.parse(localStorage.getItem("students")) || [];

    document.getElementById("totalStudents").textContent = students.length;

}

// ===============================
// Recent Activities
// ===============================

function loadRecentActivities() {

    console.log("Dashboard Loaded");

}

// ===============================
// Quick Notification
// ===============================

function showNotification(message) {

    alert(message);

}