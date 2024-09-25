const registrationForm = document.getElementById('registrationForm');
const successMessage = document.getElementById('successMessage');

registrationForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    clearErrors();
    let valid = true;

   
    const firstName = document.getElementById('firstName');
    const nameError = document.getElementById('name_error');
    if (firstName.value.trim() === '') {
        valid = false;
        nameError.innerHTML = "First Name is required";
    }

    const lastName = document.getElementById('lastName');
    const lastNameError = document.getElementById('last_name_error');
    if (lastName.value.trim() === '') {
        valid = false;
        lastNameError.innerHTML = "Last Name is required";
    }

    const title = document.getElementById('title');
    const titleError = document.getElementById('title_error');
    if (title.value === "") {
        valid = false;
        titleError.innerHTML = "Title is required";
    }

    const position = document.getElementById('position');
    const positionError = document.getElementById('position_error');
    if (position.value === "") {
        valid = false;
        positionError.innerHTML = "Position is required";
    }

    const company = document.getElementById('company');
    const companyError = document.getElementById('company_error');
    if (company.value.trim() === '') {
        valid = false;
        companyError.innerHTML = "Company is required";
    }

    const businessArena = document.getElementById('business_arena');
    const businessArenaError = document.getElementById('business_arena_error');
    if (businessArena.value.trim() === '') {
        valid = false;
        businessArenaError.innerHTML = "Business Arena is required";
    }

    const employees = document.getElementById('employees');
    const employeesError = document.getElementById('employees_error');
    if (employees.value === "") {
        valid = false;
        employeesError.innerHTML = "Employees selection is required";
    }


    const street = document.getElementById('street');
    const streetError = document.getElementById('street_error');
    if (street.value.trim() === '') {
        valid = false;
        streetError.innerHTML = "Street is required";
    }

    const additionalInfo = document.getElementById('additional_info');
    const additionalInfoError = document.getElementById('additional_info_error');
    if (additionalInfo.value.trim() === '') {
        valid = false;
        additionalInfoError.innerHTML = "Additional Information is required";
    }

    const zipCode = document.getElementById('zip_code');
    const zipCodeError = document.getElementById('zip_code_error');
    if (zipCode.value.trim() === '') {
        valid = false;
        zipCodeError.innerHTML = "Zip Code is required";
    }

    const phone = document.getElementById('phone');
    const phoneError = document.getElementById('phone_error');
    const phonePattern = /^\d{10}$/; 
    if (!phonePattern.test(phone.value.trim())) {
        valid = false;
        phoneError.innerHTML = "Phone Number must be 10 digits";
    }

    const email = document.getElementById('email');
    const emailError = document.getElementById('email_error');
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
    if (!emailPattern.test(email.value.trim())) {
        valid = false;
        emailError.innerHTML = "Valid Email is required";
    }

    const terms = document.getElementById('terms');
    const termsError = document.getElementById('terms_error');
    if (!terms.checked) {
        valid = false;
        termsError.innerHTML = "You must accept the terms and conditions";
    }


    if (valid) {
        successMessage.style.display = 'block';
    }
});

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.innerHTML = '');
}
