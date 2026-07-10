class Auth {

    static login() {

        let username = document.getElementById("username").value.trim();
        let password = document.getElementById("password").value.trim();

        if (username === "admin" && password === "1234") {

            alert("Login Successful!");

            window.location.href = "dashboard.html";

        } else {

            alert("Invalid Username or Password");

        }

    }

    static logout() {

        if (confirm("Are you sure you want to logout?")) {

            window.location.href = "index.html";

        }

    }

}