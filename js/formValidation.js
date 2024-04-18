// Dom elements
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const form = document.querySelector('form[name="reserve"]');
const quantity = document.getElementById('quantity');
const birthday = document.getElementById('birthday');
const locations = document.querySelectorAll('#locations input[type="radio"]');
const checkbox1 = document.getElementById('checkbox1');
const input = document.getElementsByClassName('text-control');
const submit = document.getElementById('submit');

// Regex
const NamePattern = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+(?:[\s-][a-zA-ZÀ-ÖØ-öø-ÿ]+)*$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2}/;

// Functions
// Form validation
// First name validation
function checkFirstName() {
    const trimmedValue = firstName.value.trim();
    if (trimmedValue.length === 0) {
        firstName.parentElement.setAttribute('data-error', 'Veuillez entrer 2 caractères ou plus.');
        firstName.parentElement.setAttribute('data-error-visible', 'true');
        firstName.style.border = '2px solid #e54858';
        return false;
    }
    if (trimmedValue.length < 2 || !trimmedValue.match(NamePattern)) {
        firstName.parentElement.setAttribute('data-error', 'Veuillez saisir uniquement des lettres.');
        firstName.parentElement.setAttribute('data-error-visible', 'true');
        firstName.style.border = '2px solid #e54858';
        return false;
    }
    firstName.parentElement.setAttribute('data-error-visible', 'false');
    firstName.style.border = 'solid #279e7a 0.19rem';
    return true;
}

// Last name validation
function checkLastName() {
    const trimmedValue = lastName.value.trim();
    if (trimmedValue.length === 0) {
        lastName.parentElement.setAttribute('data-error', 'Veuillez entrer 2 caractères ou plus.');
        lastName.parentElement.setAttribute('data-error-visible', 'true');
        lastName.style.border = '2px solid #e54858';
        return false;
    }
    if (trimmedValue.length < 2 || !trimmedValue.match(NamePattern)) {
        lastName.parentElement.setAttribute('data-error', 'Veuillez saisir uniquement des lettres.');
        lastName.parentElement.setAttribute('data-error-visible', 'true');
        lastName.style.border = '2px solid #e54858';
        return false;
    }
    lastName.parentElement.setAttribute('data-error-visible', 'false');
    lastName.style.border = 'solid #279e7a 0.19rem';
    return true;
}

// Email validation
function checkEmail() {
    const trimmedValue = email.value.trim();
    if (trimmedValue.length === 0) {
        email.parentElement.setAttribute('data-error', 'Veuillez entrer votre email.');
        email.parentElement.setAttribute('data-error-visible', 'true');
        email.style.border = '2px solid #e54858';
        return false;
    }
    if (!trimmedValue.match(emailPattern)) {
        email.parentElement.setAttribute('data-error', 'Veuillez entrer une adresse e-mail valide.');
        email.parentElement.setAttribute('data-error-visible', 'true');
        email.style.border = '2px solid #e54858';
        return false;
    }
    email.parentElement.setAttribute('data-error-visible', 'false');
    email.style.border = 'solid #279e7a 0.19rem';
    return true;
}

// Birthday validation
function checkBirthday() {
    const today = new Date(); // The current date
    const selectedDate = new Date(birthday.value); // User selected date

    if (!birthday.value.trim()) {
        birthday.parentElement.setAttribute('data-error', 'Veuillez entrer votre date de naissance.');
        birthday.parentElement.setAttribute('data-error-visible', 'true');
        birthday.style.border = '2px solid #e54858';
        return false;
    }

    // Validate the date of birth
    if (selectedDate >= today) {
        birthday.parentElement.setAttribute('data-error', 'Veuillez saisir la date de naissance correcte.');
        birthday.parentElement.setAttribute('data-error-visible', 'true');
        birthday.style.border = '2px solid #e54858';
        return false;
    }

    birthday.parentElement.setAttribute('data-error-visible', 'false');
    birthday.style.border = 'solid #279e7a 3px';
    return true;
}

// Tournaments quantity validation
function checkTournamentsQuantity() {
    const trimmedValue = quantity.value.trim();
    if (trimmedValue.length === 0) {
        quantity.parentElement.setAttribute('data-error', 'Ce champ est obligatoire, si vous n\'avez jamais participé auparavant, veuillez saisir 0.');
        quantity.parentElement.setAttribute('data-error-visible', 'true');
        quantity.style.border = '2px solid #e54858';
        return false;
    }
    if (isNaN(trimmedValue) || !Number.isInteger(Number(trimmedValue))) {
        quantity.parentElement.setAttribute('data-error', 'Veuillez saisir une valeur numérique.');
        quantity.parentElement.setAttribute('data-error-visible', 'true');
        quantity.style.border = '2px solid #e54858';
        return false;
    }
    if (Number(trimmedValue) > 99) {
        quantity.parentElement.setAttribute('data-error', 'Veuillez indiquer la quantité correcte.');
        quantity.parentElement.setAttribute('data-error-visible', 'true');
        quantity.style.border = '2px solid #e54858';
        return false;
    }
    quantity.parentElement.setAttribute('data-error-visible', 'false');
    quantity.style.border = 'solid #279e7a 0.19rem';
    return true;
}

// Locations check
function checkLocations() {
    let locationsValid = false;
    for (let i = 0; i < locations.length; i++) {
        if (locations[i].checked) {
            locationsValid = true;
            break;
        }
    }
    
    document.getElementById('locations').setAttribute('data-error-visible', !locationsValid);
    return locationsValid;
}

// Checkbox check
function checkCheckBox() {
    if (checkbox1.checked === false) {
        checkbox1.parentElement.setAttribute('data-error-visible', 'true');
        return false;
    }
    checkbox1.parentElement.setAttribute('data-error-visible', 'false');
    return true;
}

// Form fields validation
function formFieldsValidation(element, method, event) {
    element.addEventListener(event, method);
}
formFieldsValidation(firstName, checkFirstName, 'focusout');
formFieldsValidation(lastName, checkLastName, 'focusout');
formFieldsValidation(email, checkEmail, 'focusout');
formFieldsValidation(birthday, checkBirthday, 'focusout');
formFieldsValidation(quantity, checkTournamentsQuantity, 'focusout');
formFieldsValidation(checkbox1, checkCheckBox, 'click');
locations.forEach(location => {
    formFieldsValidation(location, checkLocations, 'click');
});

// Form validation
function forAllFieldsValidation() {
    checkFirstName()
    checkLastName()
    checkEmail()
    checkBirthday()
    checkTournamentsQuantity()
    checkLocations()
    checkCheckBox()
}

function formValidation() {
    if (checkFirstName() === true &&
        checkLastName() === true &&
        checkEmail() === true &&
        checkBirthday() === true &&
        checkTournamentsQuantity() === true &&
        checkLocations() === true &&
        checkCheckBox() === true) {
        return true;
    }
    return false;
}

// Form submission
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (formValidation() == true) {
        displayModalSubmit(); // Show confirmation modal on successful form submission
        document.querySelector('form[name="reserve"]').reset();
    } else {
        forAllFieldsValidation();
    }
});

// Display confirmation modal
function displayModalSubmit() {
    // Hide the form modal
    document.querySelector('.modal-background').style.display = 'none';

    // Show the confirmation modal
    document.querySelector('.confirmation').style.display = 'block';

    // Close the confirmation modal when the close button is clicked
    document.querySelector('.confirmation-content__close').addEventListener('click', function () {
        document.querySelector('.confirmation').style.display = 'none';
    });

    // Close the confirmation modal when the "Fermer" button is clicked
    document.getElementById('confirmation-content__btn').addEventListener('click', function () {
        document.querySelector('.confirmation').style.display = 'none';
    });
}

// Add event listener for Enter key press to move to next input field
function handleEnterKeyPress(event) {
    if (event.key === 'Enter') {
        const formInputs = Array.from(document.querySelectorAll('.text-control, input[type="radio"], input[type="checkbox"]'));
        const currentIndex = formInputs.indexOf(event.target);
        const nextIndex = currentIndex + 1;

        if (nextIndex < formInputs.length) {
            formInputs[nextIndex].focus();
        } else {
            // If last field, submit the form
            form.submit();
        }
    }
}

// Attach keydown event listener to all text inputs
document.querySelectorAll('.text-control, input[type="radio"], input[type="checkbox"]').forEach(input => {
    input.addEventListener('keydown', handleEnterKeyPress);
});