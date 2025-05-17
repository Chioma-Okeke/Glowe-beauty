const form = document.getElementById("contactForm");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const header = document.getElementById("navbar");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

function isValidEmail(email) {
    return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
}

window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight) {
        header.style.backgroundColor = "#d63384";
    } else {
        header.style.backgroundColor = "transparent";
    }
});

form.addEventListener("submit", function (e) {
    let valid = true;
    nameError.style.display =
        emailError.style.display =
        messageError.style.display =
            "none";

    if (!name.value.trim()) {
        nameError.textContent = "Name is required";
        nameError.style.display = "block";
        valid = false;
    }

    if (!email.value.trim()) {
        emailError.textContent = "Email is required";
        emailError.style.display = "block";
        valid = false;
    } else if (!isValidEmail(email.value.trim())) {
        emailError.textContent = "Enter a valid email address";
        emailError.style.display = "block";
        valid = false;
    }

    if (!message.value.trim()) {
        messageError.textContent = "Message is required";
        messageError.style.display = "block";
        valid = false;
    }

    if (!valid) {
        e.preventDefault();
    } else {
        alert("Form submitted successfully!");
        form.reset();
    }
});
