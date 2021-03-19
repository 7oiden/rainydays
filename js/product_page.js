// review overlay

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


reviews.onclick = function () {
  reviews.style.display = "none";
};


// function closeReviews() {
//   if (openReviews() === true) {
//     reviews.style.display = "none";
//   }
// }

// reviews.addEventListener("click", closeReviews);

const button = document.querySelector("#basket-button");
const counter = document.querySelector("#counter");

//add to basket counter

function addToBasket() {
  if (counter.style.display === "block") {
    counter.style.display = "none";
  } else {
    counter.style.display = "block";
  }
}

button.addEventListener("click", addToBasket);
