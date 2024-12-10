document.addEventListener("DOMContentLoaded", function () {
    const signUpForm = document.getElementById("signUpForm");
    const signInForm = document.getElementById("signInForm");

    // Sign-Up Form
    if (signUpForm) {
        signUpForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const name = document.getElementById("name").value;
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirmPassword").value;

            if (password !== confirmPassword) {
                alert("Passwords do not match");
                return;
            }

            if (localStorage.getItem(username)) {
                alert("Username already exists. Please choose a different one.");
                return;
            }

            const user = { name, username, password };
            localStorage.setItem(username, JSON.stringify(user));
            alert("Registration successful! Please login.");
            window.location.href = "signin.html";
        });
    }

    // Sign-In Form
    if (signInForm) {
        signInForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            if (!username || !password) {
                alert("Please fill in all fields.");
                return;
            }

            const user = localStorage.getItem(username);

            if (user) {
                const parsedUser = JSON.parse(user);
                if (parsedUser.password === password) {
                    alert("Login successful!");
                    sessionStorage.setItem("loggedInUser", JSON.stringify(parsedUser));
                    setTimeout(() => {
                        window.location.href = "index.html";
                    }, 500);
                } else {
                    alert("Incorrect password");
                }
            } else {
                alert("User not found");
            }
        });
    }
});
