// Navigation scroll effect
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Function to send email
function sendMail(event) {
    event.preventDefault(); // Prevent default form submission

    var params = {
        from_name: document.getElementById("fullName").value,
        from_email: document.getElementById("email").value,
        phone_number: document.getElementById("phone").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_9ztpuhl", "template_v6vtj1o", params)
        .then(function(response) {
            console.log('Success!', response.status, response.text);
            alert("Success! Your message has been sent.");
            document.getElementById('contact-form').reset(); // Reset the form after successful submission
        }, function(error) {
            console.error('Failed...', error);
            alert("Oops! Something went wrong, please try again.");
        });
}

// Event listener for form submission
document.getElementById('contact-form').addEventListener('submit', sendMail);

// Navigation scroll effect
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(id)) {
                    link.classList.add('active');
                }
            });
        }
    });
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
