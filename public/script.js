const form = document.querySelector("form");

const inputs = document.querySelectorAll("input, textarea");
const errorMessages = document.querySelectorAll(".error");
const required = ["firstname", "lastname", "phone", "email", "comment"];
form.addEventListener("submit", validateForm);

function validateForm(e) {
    e.preventDefault();
    let data = {};
    let error = false;
    errorMessages.forEach(error => {
        error.classList.remove("show-err");
    });

    inputs.forEach(input => {
        let fieldName = input.getAttribute("name");
        if (fieldName !== null) {
            input.classList.remove("border-red");
            if (input.value.length == 0 && required.includes(fieldName)) {
                addError(input, "is required", fieldName);
                error = true;
            } else if (fieldName == "firstname" || fieldName == "lastname") {
                let checkForNumbers = /^[0-9]*$/;
                let result = checkForNumbers.test(input.value);
                if (result) {
                    addError(input, "can't contain any numbers", fieldName);
                    error = true;
                }
            } else if (fieldName == "phone") {
                let checkForNumbers = /^[0-9]*$/;
                let result = checkForNumbers.test(input.value);
                if (!result) {
                    addError(input, "number is not valid", fieldName);
                    error = true;
                } else if (input.value.length < 10 || input.value.length > 10) {
                    addError(input, "number can only be 10 characters long", fieldName);
                    error = true;
                }
            } else if (fieldName == "email") {
                let checkValidEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
                let result = checkValidEmail.test(input.value);
                if (!result) {
                    addError(input, "provided is not a valid e-mail address", fieldName);
                    error = true;
                }
            }
            data[fieldName] = input.value;
        }
    });
    if (!error) {
        form.remove();
        window.location = "/succes";
    }
}

function addError(input, msg, fieldName) {
    let tempError = input.nextElementSibling;
    tempError.textContent = fieldName.toLowerCase() + " " + msg;
    tempError.classList.add("show-err");
    input.classList.add("border-red");
    input.classList.add("animated", "rubberBand");
}