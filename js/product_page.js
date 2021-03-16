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
