const basket = document.querySelector(".basket");
const basketIcon = document.querySelector("#basket-icon");
const fullBasket = document.querySelector(".preview-wrapper");
const emptyBasket = document.querySelector(".empty-basket");
const proceedButton = document.querySelector("#proceed-button");
const fade = document.querySelector(".fading-background");


function basketPreview() {
  if (basket.style.display === "block") {
    basket.style.display = "none";
    fade.style.display = "none";
  } else {
    basket.style.display = "block";
    fade.style.display = "block";
  }
  if (profile.style.display === "block") {
    profile.style.display = "none";
  }
  if (favorites.style.display === "block") {
    favorites.style.display = "none";
  }
  if (counter.style.display === "block") {
    fullBasket.style.display = "flex";
    emptyBasket.style.display = "none";
    basket.style.height = "450px";
    proceedButton.disabled = false;
  } else {
    fullBasket.style.display = "none";
    emptyBasket.style.display = "block";
    basket.style.height = "300px";
    proceedButton.disabled = true;
  }
}

basketIcon.addEventListener("click", basketPreview);

const profile = document.querySelector(".profile");
const profileIcon = document.querySelector("#profile-icon");

function profilePreview() {
  if (profile.style.display === "block") {
    profile.style.display = "none";
    fade.style.display = "none";
  } else {
    profile.style.display = "block";
    fade.style.display = "block";
  }

  if (basket.style.display === "block") {
    basket.style.display = "none";
  }
  if (favorites.style.display === "block") {
    favorites.style.display = "none";
  }
}

profileIcon.addEventListener("click", profilePreview);

const favorites = document.querySelector(".favorites");
const favoritesIcon = document.querySelector("#favorites-icon");

function favoritesPreview() {
  if (favorites.style.display === "block") {
    favorites.style.display = "none";
    fade.style.display = "none";
  } else {
    favorites.style.display = "block";
    fade.style.display = "block";
  }

  if (basket.style.display === "block") {
    basket.style.display = "none";
  }
  if (profile.style.display === "block") {
    profile.style.display = "none";
  }
}

favoritesIcon.addEventListener("click", favoritesPreview);

//Profile

const email = document.querySelector("#email");
const password = document.querySelector("#password");
const form = document.querySelector("#login");
const loginSuccess = document.querySelector(".successful-login");
const inputBox = document.querySelector(".input-box");
const loginContainer = document.querySelector(".form-wrapper");
const signOut = document.querySelector("#sign-out");
const profileContainer = document.querySelector(".profile");

const emailError = document.querySelector("#enter-email-error");
const passwordError = document.querySelector("#enter-password-error");

function validateLogin(event) {
  event.preventDefault();

  console.log("hi");

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
    loginSuccess.style.display = "block";
    loginContainer.style.display = "none";
    profileContainer.style.height = "350px";
  } else {
    loginSuccess.style.display = "none";
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

function logout() {
  console.log("hi");
  if (loginSuccess.style.display === "block") {
    loginSuccess.style.display = "none";
    loginContainer.style.display = "block";
    profileContainer.style.height = "550px";
  }
}

signOut.addEventListener("click", logout);

//toggle mobile class
const iconWrapper = document.querySelector(".icon-wrapper");

function mobileWrapper() {
  if (window.innerWidth <= "1000") {
    iconWrapper.classList.add("mobile-wrapper");
    iconWrapper.classList.remove("icon-wrapper");
  } else {
    iconWrapper.classList.remove("mobile-wrapper");
    iconWrapper.classList.add("icon-wrapper");
  }
}

window.addEventListener("load", mobileWrapper);
window.addEventListener("resize", mobileWrapper);

//hide logo on scroll
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
  // if (window.innerWidth < 1000) {
  //   homeIcon.style.display = "none";
  // }
}

window.addEventListener("scroll", hideOnScroll);
