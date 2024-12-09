document.getElementById("signUpForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    const user = { name, username, password };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Sign up successful!");
    window.location.href = "signin.html";
});