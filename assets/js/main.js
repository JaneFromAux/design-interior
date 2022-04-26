

// mit JS ein console.log von dem User-Input im Formular
let inputName = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');

function saveData() {
    console.log(inputName.value);
    console.log(email.value);
    console.log(message.value);
}