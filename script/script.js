 document.addEventListener("DOMContentLoaded", function() {
        const toggleButton = document.querySelector('[data-collapse-toggle="navbar-solid-bg"]');
        const navMenu = document.getElementById("navbar-solid-bg");

        toggleButton.addEventListener("click", function() {
            navMenu.classList.toggle("hidden");
        });
    });

    //Contact Form

    (function(){
        emailjs.init("L-Uj0Tllj5RR_SW5b");
    })();

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('service_o9zsarb', 'template_uoi1hmq', this)
            .then(function() {
                alert('Email sent successfully!');
            }, function(error) {
                alert('Failed to send email. Please try again.');
                console.log('EmailJS Error:', error);
            });
    });
