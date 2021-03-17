const forms = document.querySelector(".newsletter");
const emailsError = document.querySelector("#email-error");
const success = document.querySelector(".success");
const buttons = document.querySelector("#join");
const emails = document.querySelector("#emails");
const label = document.querySelector("#label");
const container = document.querySelector(".label-container");

function validateForms(event) {
  event.preventDefault();

  if (validateEmails(emails.value)) {
    emailsError.style.visibility = "hidden";
  } else {
    emailsError.style.visibility = "visible";
  }
  if (validateEmails(emails.value)) {
    label.style.display = "none";
    container.innerHTML = `<label id="success" for="newsletter">Subscription successfull!</label>`;
  }
}

forms.addEventListener("submit", validateForms);

function validateEmails(emails) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(emails);
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
