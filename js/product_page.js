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

//new code

const detailContainer = document.querySelector(".product-card");
const spinner = document.querySelector(".spinner");


const detailName = document.querySelector("#product-name");
const detailBrand = document.querySelector("#product-brand");
const detailShortDescription = document.querySelector("#short-description");
const detailDescription = document.querySelector("#description");
const detailPrice = document.querySelector("#price");
const inStockCircle = document.querySelector("#circle");
const inStock = document.querySelector("#in-stock");
const detailImage = document.querySelector(".product-image");
const reviewCount = document.querySelector("#review-count");
const breadcrumbName = document.querySelector(".current");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const detailsUrl =
  "http://7oiden.com/rainydays/wp-json/wc/store/products/" + id;

const corsFix = "https://noroffcors.herokuapp.com/" + detailsUrl;



async function fetchDetails() {
  try {
    const response = await fetch(corsFix);
    const details = await response.json();

    console.log(details.categories[0].name);
    document.title = details.name;


    const images = details.images;

    for (let i = 0; i < images.length; i++) {
      const img = images[0].src;
      console.log(img);

      console.log(details);

    

      createHtml(details, img);
    }
  } catch (error) {
    console.log(error);
    detailContainer.innerHTML = displayError(
      "An error has occured when trying to retrive the API"
    );
  }
}

fetchDetails();


function createHtml(details, img) {
  spinner.style.display = "none";
  detailName.innerHTML = `${details.name}`;
  detailBrand.innerHTML = `${details.categories[0].name}`;
  detailShortDescription.innerHTML = `${details.short_description}`;
  detailDescription.innerHTML = `${details.description}`;
  detailPrice.innerHTML = `$${details.prices.price}`;
  detailImage.innerHTML = `<img src="${img}">`;
  reviewCount.innerHTML = `(${details.review_count} Ratings)`;
  breadcrumbName.innerHTML = `${details.name}`;

  if (details.is_in_stock === true) {
    inStock.innerHTML = `In stock`;
  } else {
    inStock.innerHTML = `Out of stock`;
    inStockCircle.classList.add("red");
  }
}
