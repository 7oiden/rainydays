const email = document.querySelector("#email");
const password = document.querySelector("#password");
const form = document.querySelector("#login");
const loginSuccess = document.querySelector("#login-message");
const inputBox = document.querySelector(".input-box");

const emailError = document.querySelector("#enter-email-error");
const passwordError = document.querySelector("#enter-password-error");

function validateLogin(event) {
  event.preventDefault();

 
  if (checkLength(password.value, 7) === true) {
    passwordError.style.display = "none";
    password.style.backgroundColor = "#f5f5f5";
    password.style.borderColor = "#172940bf";
  } else {
    passwordError.style.display = "block";
    password.style.backgroundColor = "#D9210040";
    password.style.borderColor = "red";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
    email.style.backgroundColor = "#f5f5f5";
    email.style.borderColor = "#172940bf";
  } else {
    emailError.style.display = "block";
    email.style.backgroundColor = "#D9210040";
    email.style.borderColor = "red";
  }
  if (
    validateEmail(email.value) === true &&
    passwordError.style.display === "block"
  ) {
    email.style.backgroundColor = "#D9210040";
    email.style.borderColor = "red";
  }
  if (
    validateEmail(email.value) === true &&
    checkLength(password.value, 7) === true
  ) {
    loginSuccess.innerHTML = `<p id="p3">Welcome back <em>Jane!</em> You are now logged in!</p>`;
  } else {
    loginSuccess.innerHTML = "";
  }
}

form.addEventListener("submit", validateLogin);

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

function checkInput() {
  if (checkLength(email.value, 0) && email.style.borderColor === "red") {
    emailError.style.display = "none";
    email.style.backgroundColor = "#fff";
    email.style.borderColor = "#172940";
  }
  if (
    checkLength(password.value, 0) &&
    passwordError.style.display === "block"
  ) {
    passwordError.style.display = "none";
    password.style.backgroundColor = "#fff";
    password.style.borderColor = "#172940";
  }
}

email.addEventListener("keyup", checkInput);
password.addEventListener("keyup", checkInput);

const logo = document.querySelector("#logo-wrapping");
const homeIcon = document.querySelector("#home-wrapping");

function hideOnScroll() {
  const scrolledY = window.scrollY;

  if (scrolledY > 100) {
    logo.style.display = "none";
    homeIcon.style.display = "block";
  } else {
    logo.style.display = "block";
    homeIcon.style.display = "none";
  }
  if (window.innerWidth < 1000) {
    homeIcon.style.display = "none";
  }
}

window.addEventListener("scroll", hideOnScroll);

// toggle mobile class

const iconWrapper = document.querySelector(".icon-wrapper");

function mobileWrapper() {
  if (window.innerWidth < "1000") {
    iconWrapper.classList.add("mobile-wrapper");
    iconWrapper.classList.remove("icon-wrapper");
  } else {
    iconWrapper.classList.remove("mobile-wrapper");
    iconWrapper.classList.add("icon-wrapper");
  }
}

window.addEventListener("resize", mobileWrapper);
