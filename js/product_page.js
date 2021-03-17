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
//   if ((scrolledY > 100) && (reviews.style.display === "block")) {
//       reviews.style.zIndex = "1";
// }
}
window.addEventListener("scroll", hideOnScroll);

const link = document.querySelector("#review-link");
const reviews = document.querySelector(".reviews");

function openReviews() {
  if (reviews.style.display === "block") {
    reviews.style.display = "none";
  } else {
    reviews.style.display = "block";
  }
}

link.addEventListener("click", openReviews);

const button = document.querySelector("#basket-button");
const counter = document.querySelector("#counter");

function addToBasket() {
  if (counter.style.display === "block") {
    counter.style.display = "none";
  } else {
    counter.style.display = "block";
  }
}

button.addEventListener("click", addToBasket);

const basket = document.querySelector(".basket");
const basketIcon = document.querySelector("#basket-icon");

function basketPreview() {
  if (basket.style.display === "block") {
    basket.style.display = "none";
  } else {
    basket.style.display = "block";
  }
  if (profile.style.display === "block") {
    profile.style.display = "none";
  }
  if (favorites.style.display === "block") {
    favorites.style.display = "none";
  }
  //   if (counter.style.display === "none") {
  //     proceed.classList.remove;
  //   }
}

basketIcon.addEventListener("click", basketPreview);

const profile = document.querySelector(".profile");
const profileIcon = document.querySelector("#profile-icon");

function profilePreview() {
  if (profile.style.display === "block") {
    profile.style.display = "none";
  } else {
    profile.style.display = "block";
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
  } else {
    favorites.style.display = "block";
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
const loginSuccess = document.querySelector("#login-message");
const inputBox = document.querySelector(".input-box");

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
    loginSuccess.innerHTML = `<p id="p2">Welcome back <em>Jane!</em> You are now logged in!</p>`;
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

