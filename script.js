// Utility: Selectors
const DOMSelectors = {
    signUpForm: document.getElementById("signUpForm"),
    signInForm: document.getElementById("signInForm"),
    contactForm: document.querySelector("#contact-form-section form"),
    submitButton: document.querySelector(".submit-btn"),
    authLinks: document.getElementById("auth-links"),
    userInfo: document.getElementById("user-info"),
    userNameSpan: document.getElementById("user-name"),
    logoutBtn: document.getElementById("logout-btn"),
    accountName: document.getElementById("account-name"),
    membershipType: document.getElementById("membership-type"),
    membershipEndDate: document.getElementById("membership-end-date"),
};

// Utility: Validation Functions
const validatePasswordsMatch = (password, confirmPassword) => password === confirmPassword;
const validateEmailFormat = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePhoneFormat = (phone) => /^\d{10}$/.test(phone);

// Utility: Session and Local Storage
const getLoggedInUser = () => JSON.parse(sessionStorage.getItem("loggedInUser"));
const setLoggedInUser = (user) => sessionStorage.setItem("loggedInUser", JSON.stringify(user));
const removeLoggedInUser = () => sessionStorage.removeItem("loggedInUser");

// Sign-Up Functionality
const handleSignUp = () => {
    const { signUpForm } = DOMSelectors;
    if (!signUpForm) return;

    signUpForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const age = document.getElementById("age").value.trim();
        const membership = document.getElementById("membership").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirmPassword").value.trim();

        if (!validatePasswordsMatch(password, confirmPassword)) {
            alert("Passwords do not match.");
            return;
        }

        if (localStorage.getItem(email)) {
            alert("Email already registered. Please use a different email.");
            return;
        }

        const user = { name, email, age, membership, password };
        localStorage.setItem(email, JSON.stringify(user));
        alert("Registration successful! Please login.");
        window.location.href = "signin.html";
    });
};

// Sign-In Functionality
const handleSignIn = () => {
    const { signInForm } = DOMSelectors;
    if (!signInForm) return;

    signInForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        const user = JSON.parse(localStorage.getItem(email));
        if (!user) {
            alert("User not found.");
            return;
        }

        if (user.password !== password) {
            alert("Incorrect password.");
            return;
        }

        alert("Login successful!");
        setLoggedInUser(user);
        window.location.href = "index.html";
    });
};

// Contact Form Functionality
const handleContactForm = () => {
    const { contactForm, submitButton } = DOMSelectors;
    if (!contactForm || !submitButton) return;

    submitButton.addEventListener("click", (event) => {
        event.preventDefault();

        const firstName = document.getElementById("first-name").value.trim();
        const lastName = document.getElementById("last-name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!firstName || !lastName || !email || !phone || !message) {
            alert("All fields are required.");
            return;
        }

        if (!validateEmailFormat(email)) {
            alert("Invalid email format.");
            return;
        }

        if (!validatePhoneFormat(phone)) {
            alert("Invalid phone format. Please enter a 10-digit phone number.");
            return;
        }

        console.log("Form Data:", { firstName, lastName, email, phone, message });
        alert("Your message has been sent!");
        contactForm.reset();
    });
};

// Header User Info
const initializeHeader = () => {
    const { authLinks, userInfo, userNameSpan, logoutBtn } = DOMSelectors;

    const loggedInUser = getLoggedInUser();
    if (loggedInUser) {
        userNameSpan.innerHTML = `<strong>${loggedInUser.name}</strong>`; 
        authLinks.style.display = "none";
        userInfo.style.display = "flex";
    } else {
        authLinks.style.display = "flex";
        userInfo.style.display = "none";
    }

    logoutBtn.addEventListener("click", () => {
        removeLoggedInUser();
        authLinks.style.display = "flex";
        userInfo.style.display = "none";
        window.location.href = "index.html";
    });
};

// Account Page Initialization
const initializeAccountPage = () => {
    const { accountName, membershipType, membershipEndDate } = DOMSelectors;
    const dateOfBirth = document.getElementById("date-of-birth"); // New field for Date of Birth
    const userEmail = document.getElementById("user-email"); // New field for Email
    const loggedInUser = getLoggedInUser();

    if (!loggedInUser) return;

    if (accountName) {
        accountName.innerHTML = `<span style="color: #f76c6c;">${loggedInUser.name.toUpperCase()}</span>`;
    }

    if (membershipType) {
        membershipType.innerHTML = `<strong>${loggedInUser.membership.charAt(0).toUpperCase() + loggedInUser.membership.slice(1)}</strong>`;
    }

    if (membershipEndDate) {
        const signupDate = new Date();
        const endDate = new Date(signupDate.setFullYear(signupDate.getFullYear() + 1));
        membershipEndDate.textContent = endDate.toISOString().split("T")[0];
    }

    if (dateOfBirth && loggedInUser.age) {
        const currentYear = new Date().getFullYear();
        const birthYear = currentYear - parseInt(loggedInUser.age, 10);
        dateOfBirth.textContent = `01/01/${birthYear}`; // Defaulting to Jan 1st as birth date
    }

    if (userEmail) {
        userEmail.textContent = loggedInUser.email;
    }
};

// Main Initialization
const initializeApp = () => {
    handleSignUp();
    handleSignIn();
    handleContactForm();
    initializeHeader();
    if (window.location.pathname.includes("account.html")) {
        initializeAccountPage();
    }
};

// Run Initialization
initializeApp();