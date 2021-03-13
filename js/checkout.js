const form = document.querySelector("#personalia");

const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const address = document.querySelector("#street-address");
const city = document.querySelector("#city");
const postalCode = document.querySelector("#postal-code");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");

const firstNameError = document.querySelector("#firstname-error");
const lastNameError = document.querySelector("#lastname-error");
const addressError = document.querySelector("#address-error");
const cityError = document.querySelector("#city-error");
const postalCodeError = document.querySelector("#postalcode-error");
const phoneError = document.querySelector("#phone-error");
const emailError = document.querySelector("#email-error");

// const button = document.querySelector(".submit");

console.log("hi");

function checkInput() {
  const code = parseInt(postalCode.value);

  if (checkLength(firstName.value, 2)) {
    firstName.style.backgroundColor = "#10BD0040";
  } else {
    firstName.style.backgroundColor = "#f5f5f5";
    firstNameError.style.display = "none";
  }
  console.log(code);

  if (checkLength(lastName.value, 2)) {
    lastName.style.backgroundColor = "#10BD0040";
  } else {
    lastName.style.backgroundColor = "#f5f5f5";
    lastNameError.style.display = "none";
  }

  if (checkLength(address.value, 4)) {
    address.style.backgroundColor = "#10BD0040";
  } else {
    address.style.backgroundColor = "#f5f5f5";
    addressError.style.display = "none";
  }

  if (checkLength(city.value, 2)) {
    city.style.backgroundColor = "#10BD0040";
  } else {
    city.style.backgroundColor = "#f5f5f5";
    cityError.style.display = "none";
  }

  if ((postalCode.value.trim().length === 5) && (code !== NaN)) {
    postalCode.style.backgroundColor = "#10BD0040";
  } else {
    postalCode.style.backgroundColor = "#f5f5f5";
    postalCodeError.style.display = "none";
  }

  if (validateEmail(email.value) === true) {
    email.style.backgroundColor = "#10BD0040";
  } else {
    email.style.backgroundColor = "#f5f5f5";
    emailError.style.display = "none";
  }
}

firstName.addEventListener("keyup", checkInput);
lastName.addEventListener("keyup", checkInput);
address.addEventListener("keyup", checkInput);
city.addEventListener("keyup", checkInput);
postalCode.addEventListener("keyup", checkInput);
email.addEventListener("keyup", checkInput);

function validateForm(event) {
  event.preventDefault();

  if (checkLength(firstName.value, 2) === true) {
    firstNameError.style.display = "none";
    firstName.style.backgroundColor = "#10BD0040";
  } else {
    firstNameError.style.display = "block";
    firstName.style.backgroundColor = "#D9210040";
  }

  if (checkLength(lastName.value, 2) === true) {
    lastNameError.style.display = "none";
    lastName.style.backgroundColor = "#10BD0040";
  } else {
    lastNameError.style.display = "block";
    lastName.style.backgroundColor = "#D9210040";
  }

  if (checkLength(address.value, 4) === true) {
    addressError.style.display = "none";
    address.style.backgroundColor = "#10BD0040";
  } else {
    addressError.style.display = "block";
    address.style.backgroundColor = "#D9210040";
  }

  if (checkLength(city.value, 2) === true) {
    cityError.style.display = "none";
    city.style.backgroundColor = "#10BD0040";
  } else {
    cityError.style.display = "block";
    city.style.backgroundColor = "#D9210040";
  }

  if (postalCode.value.trim().length === 5) {
    postalCodeError.style.display = "none";
    postalCode.style.backgroundColor = "#10BD0040";
  } else {
    postalCodeError.style.display = "block";
    postalCode.style.backgroundColor = "#D9210040";
  }

  //   if (checkLenght(phone.value, 7) === true) {
  //     phoneError.style.display = "none";
  //     phone.style.borderColor = "#5361757d";
  //   } else {
  //     phoneError.style.display = "block";
  //   }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
    email.style.backgroundColor = "#10BD0040";
  } else {
    emailError.style.display = "block";
    email.style.backgroundColor = "#D9210040";
  }
}

form.addEventListener("submit", validateForm);

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
