// Variables
const signUpForm = document.getElementById("signUpForm");
const signInForm = document.getElementById("signInForm");
const usernameInputSignUp = document.getElementById("usernameSignUp");
const passwordInputSignUp = document.getElementById("passwordSignUp");
const confirmPasswordInput = document.getElementById("confirmPassword");
const usernameInputSignIn = document.getElementById("usernameSignIn");
const passwordInputSignIn = document.getElementById("passwordSignIn");
const welcomeMessage = document.getElementById("welcomeMessage");
const logoutButton = document.getElementById("logoutButton");

// Sign up form
signUpForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const username = usernameInputSignUp.value;
    const password = passwordInputSignUp.value;
    const confirmPassword = confirmPasswordInput.value;

    // Password match check
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    // Create user object and store in localStorage
    const user = { name, username, password };
    localStorage.setItem("user", JSON.stringify(user));

    // Debugging log to check if user data is saved correctly
    console.log("User saved in localStorage:", JSON.parse(localStorage.getItem("user")));

    alert("Sign up successful!");
    window.location.href = "signin.html"; // Redirect to sign-in page
});

// Sign in form
signInForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting and refreshing the page
    console.log("Sign In form submitted"); // Log for debugging

    const username = usernameInputSignIn.value;
    const password = passwordInputSignIn.value;

    console.log("Username:", username);
    console.log("Password:", password);

    // Retrieve user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    console.log("Stored user data:", storedUser); // Log stored user for debugging

    // Check if username and password match
    if (storedUser && storedUser.username === username && storedUser.password === password) {
        alert("Sign in successful!");
        setTimeout(function() {
            window.location.href = "index.html"; // Redirect after the alert is closed
        }, 200); // Delay the redirect slightly after the alert
    } else {
        alert("Invalid username or password.");
    }
});
