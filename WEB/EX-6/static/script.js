const Form = document.getElementById('Feedback');
const statusElement = document.getElementById('status');

Form.addEventListener('submit', function(event) {
    console.log('Form is submitted!');
    event.preventDefault();
    const user_name = document.getElementById('User Name').value;
    console.log(`User Name: ${user_name}`);
    const Email = document.getElementById('Email').value;
    console.log(`Email: ${Email}`);
    const textarea = document.getElementById('textarea').value;
    console.log(`textarea: ${textarea}`);
   
    
});



async function validateEmail(Email) {

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

return emailPattern.test(Email);

}

document.getElementById('Feedback').addEventListener('submit', function(event) {

event.preventDefault(); // Prevent the form from submitting

const emailInput = document.getElementById('Email');

const errorMessage = document.getElementById('error-message');

if (validateEmail(emailInput.value)) {

errorMessage.textContent = ''; // Clear any previous error message

alert('Email is valid! Form submitted.');

// You can add your form submission logic here

} else {

errorMessage.textContent = 'Pleaseail address.';

}

});
