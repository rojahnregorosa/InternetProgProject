# Ignite Gym Website

Welcome to Ignite Gym's official website! This project showcases a modern, responsive, and interactive website designed for a gym. Users can explore various services, sign up for memberships, and manage their accounts seamlessly.

---

## Features

### General
- **Responsive Design**: Optimized for desktop and mobile devices.
- **Modern UI/UX**: A visually appealing and user-friendly interface.

### Pages
1. **Home Page**:
   - Highlight of the gym's offerings.
   - Membership plans with clear details.
   - Reasons to choose Ignite Gym.
   - "Subscribe" button redirects to the sign-up page.

2. **About Us Page**:
   - Detailed information about the gym's mission and facilities.
   - Embedded YouTube video replacing static images.

3. **Services Page**:
   - Comprehensive list of services provided by Ignite Gym.

4. **Contact Page**:
   - Interactive form for users to send inquiries.
   - Client-side validation for form inputs.

5. **Sign-Up Page**:
   - Allows new users to register with their full name, email, age, membership type, and password.
   - Stores user data securely in `localStorage`.

6. **Sign-In Page**:
   - Enables registered users to log in using their email and password.
   - Upon login, the user's name is displayed in the header, replacing "Sign Up" and "Sign In" buttons.

7. **Account Overview Page**:
   - Displays the logged-in user's membership details, email, and calculated date of birth based on the provided age.
   - Includes options for upgrading and renewing membership (buttons are placeholders).

### Functionalities
- **Header**:
  - Dynamically updates to show the logged-in user's name in bold and red.
  - Provides a logout option that clears session data.
- **Form Validation**:
  - Real-time validation for sign-up, sign-in, and contact forms.
- **Session and Local Storage**:
  - User data is stored in `localStorage` during registration.
  - Session information is managed using `sessionStorage`.
- **Membership Details**:
  - Displays the user's membership type and calculates the end date as one year from the sign-up date.
