const contactForm = document.querySelector(".contact-form");

const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");

const firstNameError = document.querySelector("#first-name-error");
const lastNameError = document.querySelector("#last-name-error");
const emailError = document.querySelector("#email-error");
const subjectError = document.querySelector("#subject-error");
const messageError = document.querySelector("#message-error");

const successMessage = document.querySelector(".success");

function checkInput() {
  if (checkLength(firstName.value, 4)) {
    firstName.style.backgroundColor = "#10BD0040";
    firstNameError.style.display = "none";
  } else {
    firstName.style.backgroundColor = "#fff";
    firstName.style.borderColor = "#5361757d";
  }

  if (checkLength(lastName.value, 4)) {
    lastName.style.backgroundColor = "#10BD0040";
    lastNameError.style.display = "none";
  } else {
    lastName.style.backgroundColor = "#fff";
    lastName.style.borderColor = "#5361757d";
  }
  if (checkLength(subject.value, 4)) {
    subject.style.backgroundColor = "#10BD0040";
    subjectError.style.display = "none";
  } else {
    subject.style.backgroundColor = "#fff";
    subject.style.borderColor = "#5361757d";
  }
  if (checkLength(message.value, 14)) {
    message.style.backgroundColor = "#10BD0040";
    messageError.style.display = "none";
  } else {
    message.style.backgroundColor = "#fff";
    message.style.borderColor = "#5361757d";
  }
  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
    email.style.backgroundColor = "#10BD0040";
  } else {
    email.style.backgroundColor = "#fff";
    email.style.borderColor = "#5361757d";
  }
  if (
    checkLength(firstName.value, 4) &&
    checkLength(lastName.value, 4) &&
    checkLength(subject.value, 4) &&
    checkLength(message.value, 15) &&
    validateEmail(email.value) === true
  ) {
    return true;
  }
}

firstName.addEventListener("keyup", checkInput);
lastName.addEventListener("keyup", checkInput);
subject.addEventListener("keyup", checkInput);
message.addEventListener("keyup", checkInput);
email.addEventListener("keyup", checkInput);

function validateForm(event) {
  event.preventDefault();

  if (checkLength(firstName.value, 4) === true) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
    firstName.style.backgroundColor = "#D9210040";
    firstName.style.borderColor = "red";
  }
  if (checkLength(lastName.value, 4) === true) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
    lastName.style.backgroundColor = "#D9210040";
    lastName.style.borderColor = "red";
  }
  if (checkLength(subject.value, 4) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
    subject.style.backgroundColor = "#D9210040";
    subject.style.borderColor = "red";
  }
  if (checkLength(message.value, 14) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
    message.style.backgroundColor = "#D9210040";
    message.style.borderColor = "red";
  }
  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
    email.style.backgroundColor = "#D9210040";
    email.style.borderColor = "red";
  }
  if (
    checkLength(firstName.value, 4) === true &&
    checkLength(lastName.value, 4) === true &&
    checkLength(subject.value, 4) === true &&
    checkLength(message.value, 14) === true &&
    validateEmail(email.value) === true
  ) {
    successMessage.style.display = "block";
  }
}

contactForm.addEventListener("submit", validateForm);

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
