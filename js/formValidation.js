// Regex patterns for first name and last name
const NamePattern = /^(?![\s])[a-zA-ZÀ-ÖØ-öø-ÿ]+(?:[\s-][a-zA-ZÀ-ÖØ-öø-ÿ]+)*$/;

// First name validation
function checkFirstName() {
    const firstName = document.getElementById('first');
    const trimmedValue = firstName.value.trim();
    if (trimmedValue.length < 2) {
        firstName.parentElement.setAttribute('data-error', 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.');
        firstName.parentElement.setAttribute('data-error-visible', 'true');
        firstName.style.border = '2px solid #ff4e60';
        return false;
    }
    if (!trimmedValue.match(NamePattern)) {
        firstName.parentElement.setAttribute('data-error', 'Veuillez saisir uniquement des lettres.');
        firstName.parentElement.setAttribute('data-error-visible', 'true');
        firstName.style.border = '2px solid #ff4e60';
        return false;
    }
    firstName.parentElement.setAttribute('data-error-visible', 'false');
    firstName.style.border = '3px solid #279e7a';
    return true;
}

// Last name validation
function checkLastName() {
    const lastName = document.getElementById('last');
    const trimmedValue = lastName.value.trim();
    if (trimmedValue.length < 2) {
        lastName.parentElement.setAttribute('data-error', 'Veuillez entrer 2 caractères ou plus pour le champ du nom.');
        lastName.parentElement.setAttribute('data-error-visible', 'true');
        lastName.style.border = '2px solid #ff4e60';
        return false;
    }
    if (!trimmedValue.match(NamePattern)) {
        lastName.parentElement.setAttribute('data-error', 'Veuillez saisir uniquement des lettres.');
        lastName.parentElement.setAttribute('data-error-visible', 'true');
        lastName.style.border = '2px solid #ff4e60';
        return false;
    }
    lastName.parentElement.setAttribute('data-error-visible', 'false');
    lastName.style.border = '3px solid #279e7a';
    return true;
}

// Email validation
function checkEmail() {
    const email = document.getElementById('email');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2}/; // Regex
    const trimmedValue = email.value.trim();
    if (trimmedValue.length === 0) {
        email.parentElement.setAttribute('data-error', 'Veuillez entrer votre email.');
        email.parentElement.setAttribute('data-error-visible', 'true');
        email.style.border = '2px solid #ff4e60';
        return false;
    }
    if (!trimmedValue.match(emailPattern)) {
        email.parentElement.setAttribute('data-error', 'Veuillez entrer une adresse e-mail valide.');
        email.parentElement.setAttribute('data-error-visible', 'true');
        email.style.border = '2px solid #ff4e60';
        return false;
    }
    email.parentElement.setAttribute('data-error-visible', 'false');
    email.style.border = '3px solid #279e7a';
    return true;
}

// Birthday validation
function checkBirthday() {
    const birthday = document.getElementById('birthday');
    const today = new Date(); // The current date
    const selectedDate = new Date(birthday.value); // User selected date

    if (!birthday.value.trim()) {
        birthday.parentElement.setAttribute('data-error', 'Veuillez entrer votre date de naissance.');
        birthday.parentElement.setAttribute('data-error-visible', 'true');
        birthday.style.border = '2px solid #ff4e60';
        return false;
    }

    // Validate the date of birth
    if (selectedDate >= today) {
        birthday.parentElement.setAttribute('data-error', 'Veuillez saisir la date de naissance correcte.');
        birthday.parentElement.setAttribute('data-error-visible', 'true');
        birthday.style.border = '2px solid #ff4e60';
        return false;
    }

    birthday.parentElement.setAttribute('data-error-visible', 'false');
    birthday.style.border = 'solid #279e7a 3px';
    return true;
}

// Tournaments quantity validation
function checkTournamentsQuantity() {
    const quantity = document.getElementById('quantity');
    const trimmedValue = quantity.value.trim();
    if (trimmedValue.length === 0) {
        quantity.parentElement.setAttribute('data-error', 'Ce champ est obligatoire, si vous n\'avez jamais participé auparavant, veuillez saisir 0.');
        quantity.parentElement.setAttribute('data-error-visible', 'true');
        quantity.style.border = '2px solid #ff4e60';
        return false;
    }
    if (Number.isInteger(Number(trimmedValue)) && (Number(trimmedValue) < 0 || Number(trimmedValue) > 99)) {
        quantity.parentElement.setAttribute('data-error', 'Veuillez saisir la quantité correcte (maximum 2 chiffres).');
        quantity.parentElement.setAttribute('data-error-visible', 'true');
        quantity.style.border = '2px solid #ff4e60';
        return false;
    }
    quantity.parentElement.setAttribute('data-error-visible', 'false');
    quantity.style.border = '3px solid #279e7a';
    return true;
}

// Locations check
function checkLocations() {
    const locationsContainer = document.getElementById('locations');
    const locations = document.querySelectorAll('#locations input[type="radio"]');
    let locationsValid = false;
    for (let i = 0; i < locations.length; i++) {
        if (locations[i].checked) {
            locationsValid = true;
            break;
        }
    }
    
    locationsContainer.setAttribute('data-error', 'Veuillez sélectionner une ville')
    locationsContainer.setAttribute('data-error-visible', !locationsValid);
    return locationsValid;
}

// Checkbox check
function checkCheckBox() {
    const checkbox1 = document.getElementById('checkbox1');
    if (checkbox1.checked === false) {
        checkbox1.parentElement.setAttribute('data-error', 'Vous devez vérifier que vous acceptez les termes et conditions.');
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

formFieldsValidation(document.getElementById('first'), checkFirstName, 'focusout');
formFieldsValidation(document.getElementById('last'), checkLastName, 'focusout');
formFieldsValidation(document.getElementById('email'), checkEmail, 'focusout');
formFieldsValidation(document.getElementById('birthday'), checkBirthday, 'focusout');
formFieldsValidation(document.getElementById('quantity'), checkTournamentsQuantity, 'focusout');
formFieldsValidation(document.getElementById('checkbox1'), checkCheckBox, 'click');

document.querySelectorAll('#locations input[type="radio"]').forEach(location => {
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
document.querySelector('form[name="reserve"]').addEventListener('submit', function (e) {
    e.preventDefault();
    if (formValidation() == true) {
        displayModalSubmit(); // Show confirmation modal on successful form submission
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
        document.querySelector('form[name="reserve"]').submit();
    });

    // Close the confirmation modal when the "Fermer" button is clicked
    document.getElementById('confirmation-content__btn').addEventListener('click', function () {
        document.querySelector('.confirmation').style.display = 'none';
        document.querySelector('form[name="reserve"]').submit();
    });
}