document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const fullname = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const contact = document.getElementById('number').value;
        const message = document.getElementById('text').value;

        // Check for empty fields
        if (!fullname || !email || !message) {
            errorMessage.textContent = 'Please fill in all required fields.';
            successMessage.textContent = '';
            return;
        }

        // Reset error message
        errorMessage.textContent = '';

        // Create a mailto link to open the user's email client
        const mailtoLink = `mailto:chaliserashmi69@gmail.com?subject=Contact Form Submission&body=Full Name: ${fullname}%0D%0AEmail: ${email}%0D%0AContact Number: ${contact}%0D%0AMessage:%0D%0A${message}`;

        // Open the user's email client
        window.location.href = mailtoLink;
        
        // Display success message
        successMessage.textContent = 'Your email client should open with the form data.';
    });
});