const form = document.querySelector("#personalia");
const passwordForm = document.querySelector("#password-field");

const confirm = document.querySelector("#submit");

// const formFields = document.querySelector("form").elements;

const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const address = document.querySelector("#street-address");
const city = document.querySelector("#city");
const postalCode = document.querySelector("#postal-code");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");

const choosePassword = document.querySelector("#choose-password");
const confirmPassword = document.querySelector("#confirm-password");

const firstNameError = document.querySelector("#firstname-error");
const lastNameError = document.querySelector("#lastname-error");
const addressError = document.querySelector("#address-error");
const cityError = document.querySelector("#city-error");
const postalCodeError = document.querySelector("#postalcode-error");
const phoneError = document.querySelector("#phone-error");
const emailError = document.querySelector("#email-error");

const choosePasswordError = document.querySelector("#choose-password-error");
const confirmPasswordError = document.querySelector("#confirm-password-error");

const success = document.querySelector(".success");
const passwordSuccess = document.querySelector("#password-success");

const createAccount = document.querySelector("#create-account");

// const confirmPurchase = document.querySelector("#confirm-purchase");

// const button = document.querySelector(".submit");

function checkInput() {
  // const code = parseInt(postalCode.value);

  if (checkLength(firstName.value, 2)) {
    firstName.style.backgroundColor = "#10BD0040";
    firstNameError.style.display = "none";
  } else {
    firstName.style.backgroundColor = "#fff";
    firstName.style.borderColor = "#5361757d";
  }

  if (checkLength(lastName.value, 2)) {
    lastName.style.backgroundColor = "#10BD0040";
    lastNameError.style.display = "none";
  } else {
    lastName.style.backgroundColor = "#fff";
    lastName.style.borderColor = "#5361757d";
  }

  if (checkLength(address.value, 4)) {
    address.style.backgroundColor = "#10BD0040";
    addressError.style.display = "none";
  } else {
    address.style.backgroundColor = "#fff";
    address.style.borderColor = "#5361757d";
  }
  if (checkLength(city.value, 2)) {
    city.style.backgroundColor = "#10BD0040";
    cityError.style.display = "none";
  } else {
    city.style.backgroundColor = "#fff";
    city.style.borderColor = "#5361757d";
  }

  if (postalCode.value.trim().length === 5) {
    postalCode.style.backgroundColor = "#10BD0040";
    postalCodeError.style.display = "none";
  } else {
    postalCode.style.backgroundColor = "#fff";
    postalCode.style.borderColor = "#5361757d";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
    email.style.backgroundColor = "#10BD0040";
  } else {
    email.style.backgroundColor = "#fff";
    email.style.borderColor = "#5361757d";
  }
  if (checkLength(choosePassword.value, 7)) {
    choosePassword.style.backgroundColor = "#10BD0040";
    choosePasswordError.style.display = "none";
    confirmPasswordError.style.display = "none";
  } else {
    choosePassword.style.backgroundColor = "#fff";
    choosePassword.style.borderColor = "#5361757d";
  }

  if (
    checkLength(choosePassword.value, 7) &&
    checkLength(confirmPassword.value, 7) &&
    choosePassword.value === confirmPassword.value
  ) {
    confirmPassword.style.backgroundColor = "#10BD0040";
    confirmPasswordError.style.display = "none";
  } else {
    confirmPassword.style.backgroundColor = "#fff";
    confirmPassword.style.borderColor = "#5361757d";
  }
  if (
    checkLength(firstName.value, 2) &&
    checkLength(lastName.value, 2) &&
    checkLength(address.value, 4) &&
    checkLength(city.value, 2) &&
    postalCode.value.trim().length === 5 &&
    validateEmail(email.value) === true
  ) {
    return true;
  }
}

// function checkPassword() {}

firstName.addEventListener("keyup", checkInput);
lastName.addEventListener("keyup", checkInput);
address.addEventListener("keyup", checkInput);
city.addEventListener("keyup", checkInput);
postalCode.addEventListener("keyup", checkInput);
email.addEventListener("keyup", checkInput);

choosePassword.addEventListener("keyup", checkInput);
confirmPassword.addEventListener("keyup", checkInput);

function validateForm(event) {
  event.preventDefault();

  if (checkLength(firstName.value, 2) === true) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
    firstName.style.backgroundColor = "#D9210040";
    firstName.style.borderColor = "red";
  }

  if (checkLength(lastName.value, 2) === true) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
    lastName.style.backgroundColor = "#D9210040";
    lastName.style.borderColor = "red";
  }

  if (checkLength(address.value, 4) === true) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
    address.style.backgroundColor = "#D9210040";
    address.style.borderColor = "red";
  }

  if (checkLength(city.value, 2) === true) {
    cityError.style.display = "none";
  } else {
    cityError.style.display = "block";
    city.style.backgroundColor = "#D9210040";
    city.style.borderColor = "red";
  }

  if (postalCode.value.trim().length === 5) {
    postalCodeError.style.display = "none";
  } else {
    postalCodeError.style.display = "block";
    postalCode.style.backgroundColor = "#D9210040";
    postalCode.style.borderColor = "red";
  }
  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
    email.style.backgroundColor = "#D9210040";
    email.style.borderColor = "red";
  }
  if (checkInput() === true) {
    confirm.style.display = "none";
    success.innerHTML = `<p id="success">Input saved successfully! You may now move on to the next step</p>`;
  }
}

form.addEventListener("submit", validateForm);

function validatePassword(event) {
  event.preventDefault();

  if (checkLength(choosePassword.value, 7) === true) {
    choosePasswordError.style.display = "none";
  } else {
    choosePasswordError.style.display = "block";
    choosePassword.style.backgroundColor = "#D9210040";
    choosePassword.style.borderColor = "red";
  }
  if (
    checkLength(choosePassword.value, 7) &&
    checkLength(confirmPassword.value, 7) &&
    choosePassword.value === confirmPassword.value
  ) {
    passwordSuccess.innerHTML = `<p id="success">Account successfully created!</p>`;
  } else {
    passwordSuccess.innerHTML = "";
  }
  if (
    checkLength(choosePassword.value, 7) &&
    choosePassword.value !== confirmPassword.value
  ) {
    confirmPasswordError.style.display = "block";
    confirmPassword.style.backgroundColor = "#D9210040";
    confirmPassword.style.borderColor = "red";
  }
}

createAccount.addEventListener("click", validatePassword);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
