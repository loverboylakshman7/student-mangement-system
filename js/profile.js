document.addEventListener("DOMContentLoaded", loadProfile);

function saveProfile() {

    const profile = {

        name: document.getElementById("adminName").value,

        email: document.getElementById("adminEmail").value,

        phone: document.getElementById("adminPhone").value,

        college: document.getElementById("collegeName").value

    };

    localStorage.setItem("adminProfile", JSON.stringify(profile));

    alert("Profile Saved Successfully!");

}

function loadProfile() {

    let profile = JSON.parse(localStorage.getItem("adminProfile"));

    if (!profile) return;

    document.getElementById("adminName").value = profile.name || "";

    document.getElementById("adminEmail").value = profile.email || "";

    document.getElementById("adminPhone").value = profile.phone || "";

    document.getElementById("collegeName").value = profile.college || "";

}