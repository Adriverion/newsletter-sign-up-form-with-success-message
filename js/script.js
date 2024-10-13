const form = document.getElementById('form');
const formInput = document.getElementById('form-email');
const errorLabel = document.getElementById('form-error-label');
const confirmMessageButton = document.getElementById('form-message-btn');
const messageEmail = document.getElementById('message-email');
const containers = document.getElementsByClassName('box');

const inputStateChange = (messageError = null) => {
    if (messageError == null) {
        formInput.classList.remove("form__input--error");
        formInput.placeholder = "email@company.com";
        errorLabel.textContent = "";
    } else {
        formInput.classList.add("form__input--error");
        formInput.placeholder = "ash#loremcompany.com";
        errorLabel.textContent = messageError;
    }

    formInput.value = "";
}

const validateInput = value => {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    if (value == "" || value == undefined) inputStateChange("Missing value");
    else if(!pattern.test(value)) inputStateChange("Valid email required");
    else {
        inputStateChange();
        messageEmail.textContent = value;
        return true;
    }

    return false;
}

const switchViews = () => {
    for (const box of containers) box.classList.toggle("box--hidden");
}

confirmMessageButton.addEventListener('click', switchViews);

form.addEventListener('submit', event => {
    event.preventDefault();
    if (validateInput(formInput.value)) switchViews();
});

