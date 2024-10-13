const form = document.getElementById('form');
const formInput = document.getElementById('form-email');
const errorLabel = document.getElementById('form-error-label');
const confirmMessageButton = document.getElementById('form-message-btn');
const containers = document.getElementsByClassName('box');

const switchViews = () => {
    for (const box of containers) box.classList.toggle("box--hidden");
}

formInput.addEventListener('input', () => {
    if (formInput.validity.valid) {
        formInput.classList.remove("form__input--error");
        errorLabel.textContent = "";
    } else {
        formInput.classList.add("form__input--error");
        errorLabel.textContent = "valid email required";
    }
});

form.addEventListener('submit', event => {
    event.preventDefault();
    switchViews();
});

confirmMessageButton.addEventListener('click', event => {
    switchViews();  
})
