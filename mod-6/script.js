// Selecting elements
const myForm = document.getElementById('myForm');
const formMessage = document.getElementById('formMessage');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const detailsContainer = document.getElementById('detailsContainer');

// Adding event listener to form submission
myForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Perform validation
    if (validateForm()) {
        // Display entered details
        displayEnteredDetails();
        formMessage.textContent = "Form submitted successfully!";
        formMessage.style.color = "green";
        resetForm();
    }
});

// Function to validate form inputs
function validateForm() {
    let isValid = true;

    // Validate name
    if (nameInput.value.trim() === '') {
        formMessage.textContent = "Please enter your name.";
        formMessage.style.color = "red";
        isValid = false;
    }

    // Validate email
    if (emailInput.value.trim() === '') {
        formMessage.textContent = "Please enter your email.";
        formMessage.style.color = "red";
        isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.style.color = "red";
        isValid = false;
    }

    return isValid;
}

// Function to check if email is valid
function isValidEmail(email) {
    // Very basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to display entered details
function displayEnteredDetails() {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    const detailsElement = document.createElement('div');
    detailsElement.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr>
    `;

    detailsContainer.appendChild(detailsElement);
}

// Function to reset form and messages
function resetForm() {
    myForm.reset();
    formMessage.textContent = "";
}
