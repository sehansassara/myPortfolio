(function() {
    emailjs.init("pYgNfUOuj3l8ITfmY");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission


    const user_email = document.getElementById('user_email').value;

    // Send the email using EmailJS
    emailjs.send("service_ixd0sqf", "template_v7rl8pj", {
        user_email: user_email
    })
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Email sent successfully!');
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send email. Please try again.');
        });
});