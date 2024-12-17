$(document).ready(function () {
    // Validate form before submission
    $('#registrationForm').submit(function (event) {
        let isValid = true;

        // Clear previous errors
        $('.error-message').hide();

        // Name validation
        let name = $('#name').val();
        if (name === "") {
            $('#nameError').text("Name is required.").show();
            isValid = false;
        }

        // Date of Birth validation
        let dob = $('#dob').val();
        if (dob === "") {
            $('#dobError').text("Date of birth is required.").show();
            isValid = false;
        }

        // Email validation
        let email = $('#email').val();
        let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (email === "" || !emailPattern.test(email)) {
            $('#emailError').text("Please enter a valid email.").show();
            isValid = false;
        }

        // Phone validation
        let phone = $('#phone').val();
        let phonePattern = /^[0-9]{10}$/;
        if (phone === "" || !phonePattern.test(phone)) {
            $('#phoneError').text("Please enter a valid phone number (10 digits).").show();
            isValid = false;
        }

        // Address validation
        let address = $('#address').val();
        if (address === "") {
            $('#addressError').text("Address is required.").show();
            isValid = false;
        }

        // Gender validation
        let gender = $('input[name="gender"]:checked').val();
        if (!gender) {
            $('#genderError').text("Please select a gender.").show();
            isValid = false;
        }

        // Prevent form submission if validation fails
        if (!isValid) {
            event.preventDefault();
        }
    });
});
