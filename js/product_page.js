// const logo = document.querySelector("#logo-wrapping");
// const homeIcon = document.querySelector("#home-wrapping");

// function hideOnScroll() {
//   const scrolledY = window.scrollY;

//   if (scrolledY > 100) {
//     logo.style.display = "none";
//     homeIcon.style.display = "block";
//   } else {
//     logo.style.display = "block";
//     homeIcon.style.display = "none";
//   }
//   //   if ((scrolledY > 100) && (reviews.style.display === "block")) {
//   //       reviews.style.zIndex = "1";
//   // }
// }
// window.addEventListener("scroll", hideOnScroll);

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
