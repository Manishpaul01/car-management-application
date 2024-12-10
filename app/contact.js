document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        console.log(`Name: ${name}, Phone: ${phone}, Email: ${email}, Message: ${message}`);

        // Basic validation
        if (name && phone && email && message) {
            localStorage.setItem('contactMessage', JSON.stringify({ name, phone, email, message }));
            alert('Message saved!');
        } else {
            alert('Please fill out all fields.');
        }
    });
});
