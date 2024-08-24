
const emailInput = document.querySelector("input[type=email]");
const passwordInput = document.querySelector("input[type=password]");

const emailError = document.querySelector(".email-error");
const passwordError = document.querySelector(".pw-error");
const successMessage = document.querySelector(".success-message");

const form = document.querySelector("form");

let correctEmail = false;
let correctPassword = false;
let valid = false;

function validateEmail() {
    const emailValue = emailInput.value;
    if(emailValue.length > 3 && emailValue.includes("@") && emailValue.includes(".")){
        emailError.style.display = "none";
        emailInput.style.borderColor = "#34A853";
        correctEmail = true;
    }
    else{
        emailError.style.display = "block";
        emailInput.style.borderColor = "#d93025";
        correctEmail = false;
    }
    checkFormValidity();
}
function validatePassword(){
    const passwordValue = passwordInput.value;
    if(passwordValue.length > 8){
        passwordError.style.display = "none";
        passwordInput.style.borderColor = "#34A853";
        correctPassword = true;
    }
    else{
        passwordError.style.display = "block";
        passwordInput.style.borderColor = "#d93025";
        correctPassword = false;
    }
    checkFormValidity();
}
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);

function checkFormValidity() {
    if(correctEmail == true && correctPassword == true){
        successMessage.style.display = "block";
        valid = true;
    }
    else{
        successMessage.style.display = "none";
        valid = false;
    }
}

form.addEventListener("submit", function(event){
    event.preventDefault();
    validateEmail();
    validatePassword();
    
    if(valid == true){
        const confirmation = confirm("Are you Sure you want to submit the form?");
        if(confirmation == true){
            alert("Successful signup!");
        }
        else{
            emailInput.value = "";
            passwordInput.value = "";

            emailError.style.display = "none";
            passwordError.style.display = "none";
            successMessage.style.display = "none";

            emailInput.style.borderColor = "#000"
            passwordInput.style.borderColor = "#000";
        }
    }
    else{
        if(!valid){
            validateEmail();
            validatePassword();
        }
    }
});