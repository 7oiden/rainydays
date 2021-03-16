const form = document.querySelector(".newsletter");
const emailError = document.querySelector("#email-error");
const success = document.querySelector(".success");
const button = document.querySelector("#join");
const email = document.querySelector("#email");
const label = document.querySelector("#label");
const container = document.querySelector(".label-container");

function validateForm(event) {
  event.preventDefault();

  if (validateEmail(email.value)) {
    emailError.style.visibility = "hidden";
  } else {
    emailError.style.visibility = "visible";
  }
  if (validateEmail(email.value)) {
    label.style.display = "none";
    container.innerHTML = `<label id="success" for="newsletter">Subscription was successfull!</label>`;
  }
}

form.addEventListener("submit", validateForm);

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

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
}

window.addEventListener("scroll", hideOnScroll);
