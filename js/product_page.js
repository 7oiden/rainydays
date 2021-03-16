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

const proceed = document.querySelector(".basket");
const basket = document.querySelector("#basket-icon");

function basketPreview() {
  if (proceed.style.display === "block") {
    proceed.style.display = "none";
  } else {
    proceed.style.display = "block";
  }
  if (counter.style.display === "none") {
    proceed.classList.remove;
  }
}

basket.addEventListener("click", basketPreview);
