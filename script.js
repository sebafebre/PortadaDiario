document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('subscription-form');
    const fullNameInput = document.getElementById('full-name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const ageInput = document.getElementById('age');
    const phoneInput = document.getElementById('phone');
    const addressInput = document.getElementById('address');
    const cityInput = document.getElementById('city');
    const postalCodeInput = document.getElementById('postal-code');
    const dniInput = document.getElementById('dni');
    const formTitle = document.getElementById('form-title');

    function showError(input, message) {
        const errorElement = document.getElementById(`error-${input.id}`);
        errorElement.textContent = message;
    }

    function clearError(input) {
        const errorElement = document.getElementById(`error-${input.id}`);
        errorElement.textContent = '';
    }

    function validateFullName() {
        const value = fullNameInput.value.trim();
        if (value.length <= 6 || !value.includes(' ')) {
            showError(fullNameInput, 'Debe tener más de 6 letras y al menos un espacio entre medio.');
            return false;
        }
        clearError(fullNameInput);
        return true;
    }

    function validateEmail() {
        const value = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showError(emailInput, 'Debe tener un formato de email válido.');
            return false;
        }
        clearError(emailInput);
        return true;
    }

    function validatePassword() {
        const value = passwordInput.value.trim();
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordRegex.test(value)) {
            showError(passwordInput, 'Al menos 8 caracteres, formados por letras y números.');
            return false;
        }
        clearError(passwordInput);
        return true;
    }

    function validateConfirmPassword() {
        const value = confirmPasswordInput.value.trim();
        if (value !== passwordInput.value.trim()) {
            showError(confirmPasswordInput, 'Las contraseñas no coinciden.');
            return false;
        }
        clearError(confirmPasswordInput);
        return true;
    }

    function validateAge() {
        const value = parseInt(ageInput.value.trim(), 10);
        if (isNaN(value) || value < 18) {
            showError(ageInput, 'Número entero mayor o igual a 18.');
            return false;
        }
        clearError(ageInput);
        return true;
    }

    function validatePhone() {
        const value = phoneInput.value.trim();
        const phoneRegex = /^\d{7,}$/;
        if (!phoneRegex.test(value)) {
            showError(phoneInput, 'Número de al menos 7 dígitos, no aceptar espacios, guiones ni paréntesis.');
            return false;
        }
        clearError(phoneInput);
        return true;
    }

    function validateAddress() {
        const value = addressInput.value.trim();
        if (value.length < 5 || !value.includes(' ')) {
            showError(addressInput, 'Al menos 5 caracteres, con letras, números y un espacio en el medio.');
            return false;
        }
        clearError(addressInput);
        return true;
    }

    function validateCity() {
        const value = cityInput.value.trim();
        if (value.length < 3) {
            showError(cityInput, 'Al menos 3 caracteres.');
            return false;
        }
        clearError(cityInput);
        return true;
    }

    function validatePostalCode() {
        const value = postalCodeInput.value.trim();
        if (value.length < 3) {
            showError(postalCodeInput, 'Al menos 3 caracteres.');
            return false;
        }
        clearError(postalCodeInput);
        return true;
    }

    function validateDni() {
        const value = dniInput.value.trim();
        const dniRegex = /^\d{7,8}$/;
        if (!dniRegex.test(value)) {
            showError(dniInput, 'Número de 7 u 8 dígitos.');
            return false;
        }
        clearError(dniInput);
        return true;
    }

    fullNameInput.addEventListener('blur', validateFullName);
    emailInput.addEventListener('blur', validateEmail);
    passwordInput.addEventListener('blur', validatePassword);
    confirmPasswordInput.addEventListener('blur', validateConfirmPassword);
    ageInput.addEventListener('blur', validateAge);
    phoneInput.addEventListener('blur', validatePhone);
    addressInput.addEventListener('blur', validateAddress);
    cityInput.addEventListener('blur', validateCity);
    postalCodeInput.addEventListener('blur', validatePostalCode);
    dniInput.addEventListener('blur', validateDni);

    fullNameInput.addEventListener('focus', () => clearError(fullNameInput));
    emailInput.addEventListener('focus', () => clearError(emailInput));
    passwordInput.addEventListener('focus', () => clearError(passwordInput));
    confirmPasswordInput.addEventListener('focus', () => clearError(confirmPasswordInput));
    ageInput.addEventListener('focus', () => clearError(ageInput));
    phoneInput.addEventListener('focus', () => clearError(phoneInput));
    addressInput.addEventListener('focus', () => clearError(addressInput));
    cityInput.addEventListener('focus', () => clearError(cityInput));
    postalCodeInput.addEventListener('focus', () => clearError(postalCodeInput));
    dniInput.addEventListener('focus', () => clearError(dniInput));

    fullNameInput.addEventListener('input', () => {
        formTitle.textContent = `HOLA ${fullNameInput.value}`;
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const isFullNameValid = validateFullName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();
        const isAgeValid = validateAge();
        const isPhoneValid = validatePhone();
        const isAddressValid = validateAddress();
        const isCityValid = validateCity();
        const isPostalCodeValid = validatePostalCode();
        const isDniValid = validateDni();

        if (isFullNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid && isAgeValid && isPhoneValid && isAddressValid && isCityValid && isPostalCodeValid && isDniValid) {
            alert(`Información del formulario:\nNombre Completo: ${fullNameInput.value}\nEmail: ${emailInput.value}\nEdad: ${ageInput.value}\nTeléfono: ${phoneInput.value}\nDirección: ${addressInput.value}\nCiudad: ${cityInput.value}\nCódigo Postal: ${postalCodeInput.value}\nDNI: ${dniInput.value}`);
        } else {
            alert('Hay errores en el formulario. Por favor, corríjalos y vuelva a intentarlo.');
        }
    });
});
