document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        clearErrors();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        if (username === "") {
            displayError("username", "Username is required.");
        }

        if (email === "") {
            displayError("email", "Email is required.");
        } else if (!isValidEmail(email)) {
            displayError("email", "Invalid email format.");
        }

        if (password === "") {
            displayError("password", "Password is required.");
        }

        if (confirmPassword === "") {
            displayError("confirm-password", "Please confirm your password.");
        } else if (password !== confirmPassword) {
            displayError("confirm-password", "Passwords do not match.");
        }

        // If no errors, submit the form (you can add AJAX here to send data to the server)
        if (!hasErrors()) {
            form.submit();
        }
    });

    function isValidEmail(email) {
        // Simple email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function displayError(fieldId, errorMessage) {
        const errorElement = document.getElementById(`${fieldId}-error`);
        errorElement.innerText = errorMessage;
    } // <-- Missing closing brace here

    function clearErrors() {
        const errorElements = document.querySelectorAll(".error");
        errorElements.forEach((element) => {
            element.innerText = "";
        });
    }

    function hasErrors() {
        const errorElements = document.querySelectorAll(".error");
        return Array.from(errorElements).some((element) => element.innerText !== "");
    }
});
