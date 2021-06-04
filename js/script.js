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

//carousel

const slider = document.querySelector(".slider");
const leftArrow = document.querySelector(".arrow-left");
const rigthArrow = document.querySelector(".arrow-right");
const indicatorParents = document.querySelector(".control ul");

let sectionIndex = 0;

document
  .querySelectorAll(".preview-image")
  .forEach(function (indicator, index) {
    indicator.addEventListener("click", function () {
      sectionIndex = index;
      document.querySelector(".selected").classList.remove("selected");
      indicator.classList.add("selected");
      slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
    });
  });

leftArrow.addEventListener("click", function () {
  sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0;
  document.querySelector(".selected").classList.remove("selected");
  indicatorParents.children[sectionIndex].classList.add("selected");
  slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
});

rigthArrow.addEventListener("click", function () {
  console.log("hiy");
  sectionIndex = sectionIndex < 3 ? sectionIndex + 1 : 3;
  document.querySelector(".selected").classList.remove("selected");
  indicatorParents.children[sectionIndex].classList.add("selected");
  slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
});
