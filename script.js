//Variables
const signUpForm = document.getElementById("signUpForm");
const signInForm = document.getElementById("signInForm");

//Sign up form
signUpForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if(password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    const user = {
        name: name,
        username: username,
        password: password,
    };

    localStorage.setItem(username, JSON.stringify(user));
    alert("Registration successful! Please login.");
    window.location.href = "signin.html";
});

//Sign in form
signInForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = localStorage.getItem(username);

    if (user) {
        const parsedUser = JSON.parse(user);
        if (parsedUser.password === password) {
          localStorage.setItem("user", JSON.stringify(parsedUser));
          window.location.href = "index.html";
        } else {
          alert("Incorrect password");
        }
      } else {
        alert("User not found");
      }
})