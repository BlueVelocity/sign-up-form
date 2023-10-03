const passwordObj = document.querySelector('#password');
const confirmPasswordObj = document.querySelector('#confirm-password');
const noMatchIndicator = document.querySelector('span')

passwordObj.addEventListener("input", checkIfMatching);
confirmPasswordObj.addEventListener("input", checkIfMatching);

passwordObj.setCustomValidity("Invalid field.")

function checkIfMatching() {
    let pass = passwordObj.value;
    let compPass = confirmPasswordObj.value;
    if(pass != compPass || pass === '' || pass.length < 8) {
        passwordObj.setCustomValidity("Invalid field.")
        confirmPasswordObj.setCustomValidity("Invalid field.")
    } else {
        passwordObj.setCustomValidity("")
        confirmPasswordObj.setCustomValidity("")
    }
}