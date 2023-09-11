const form = document.getElementById('form');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const errorElement = document.getElementById('error-message');
const checkElement = document.getElementById('check');

let message = ""

form.addEventListener('submit', (e) => {
    if (password.value !== confirmPassword.value)
        e.preventDefault()
        checkElement.innerText = "Please check your password and resubmit"  
});

function validatePassword() {
    if (password.value === confirmPassword.value) {
    errorElement.innerText = "";
    } else if (password.value !== confirmPassword.value)
    errorElement.innerText = "*Passwords do not match";
}

password.addEventListener('input', validatePassword);
confirmPassword.addEventListener('input',validatePassword);