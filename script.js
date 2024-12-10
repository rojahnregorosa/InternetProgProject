document.addEventListener("DOMContentLoaded", function () {
    const signUpForm = document.getElementById("signUpForm");
    const signInForm = document.getElementById("signInForm");

    // Sign-Up Form
    if (signUpForm) {
        signUpForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const age = document.getElementById("age").value;
            const membership = document.getElementById("membership").value;
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirmPassword").value;

            // Validation: Check if passwords match
            if (password !== confirmPassword) {
                alert("Passwords do not match");
                return;
            }

            // Validation: Check if membership is selected
            if (!membership) {
                alert("Please select a membership type.");
                return;
            }

            // Check if the email already exists in localStorage
            if (localStorage.getItem(email)) {
                alert("Email already registered. Please use a different email.");
                return;
            }

            // Save user to localStorage
            const user = { name, email, age, membership, password };
            localStorage.setItem(email, JSON.stringify(user));

            alert("Registration successful! Please login.");
            window.location.href = "signin.html";
        });
    }

    // Sign-In Form
    if (signInForm) {
        signInForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            if (!email || !password) {
                alert("Please fill in all fields.");
                return;
            }

            const user = localStorage.getItem(email);

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


document.addEventListener("DOMContentLoaded", function () {
    // Select the form and the submit button
    const contactForm = document.querySelector("#contact-form-section form");
    const submitButton = document.querySelector(".submit-btn");

    // Function to validate input fields
    function validateForm() {
        const firstName = document.getElementById("first-name").value.trim();
        const lastName = document.getElementById("last-name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Phone number validation regex (optional)
        const phoneRegex = /^\d{10}$/;

        if (!firstName || !lastName || !email || !phone || !message) {
            alert("All fields are required.");
            return false;
        }

        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return false;
        }

        if (!phoneRegex.test(phone)) {
            alert("Please enter a valid 10-digit phone number.");
            return false;
        }

        return true;
    }

    // Function to handle form submission
    function handleSubmit(event) {
        event.preventDefault();

        // Validate the form
        if (!validateForm()) {
            return;
        }

        // Collect form data
        const formData = {
            firstName: document.getElementById("first-name").value.trim(),
            lastName: document.getElementById("last-name").value.trim(),
            email: document.getElementById("email").value.trim(),
            phone: document.getElementById("phone").value.trim(),
            message: document.getElementById("message").value.trim(),
        };

        // Log form data to the console
        console.log("Form submitted successfully!");
        console.log("Form Data:", formData);

        // Simulate a success message
        alert("Your message has been sent :)");
        contactForm.reset(); // Reset the form after submission
    }

    // Attach event listener to the submit button
    submitButton.addEventListener("click", handleSubmit);
});

