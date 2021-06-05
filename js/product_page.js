// review overlay

const link = document.querySelector("#review-link");
const reviews = document.querySelector(".reviews");
const fadeBackground = document.querySelector(".fading-background");
const closer = document.querySelector("#close-reviews");

function openReviews() {
  reviews.style.display = "block";
  fadeBackground.style.display = "block";
  window.scroll(0, 0);
}

function closeReviews() {
  if (reviews.style.display === "block") {
    reviews.style.display = "none";
    fadeBackground.style.display = "none";
  }
}

link.addEventListener("click", openReviews);
closer.addEventListener("click", closeReviews);


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

const mainContainer = document.querySelector(".main-wrapper");

const detailContainer = document.querySelector(".product-card");
const spinner = document.querySelector(".spinner");

const detailName = document.querySelector("#product-name");
const detailBrand = document.querySelector("#product-brand");
const detailShortDescription = document.querySelector("#short-description");
const detailDescription = document.querySelector("#description");
const detailPrice = document.querySelector("#price");
const ordinaryPrice = document.querySelector("#ordinary-price");

const inStockCircle = document.querySelector("#circle");
const inStock = document.querySelector("#in-stock");
const detailImage = document.querySelector(".product-image");

const reviewCount = document.querySelector("#review-count");
const breadcrumbName = document.querySelector(".current");
const basketButton = document.querySelector("#basket-button");

const color1 = document.querySelector("#col1");
const color2 = document.querySelector("#col2");
const color3 = document.querySelector("#col3");

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

    document.title = details.name;

    console.log(details);

    const colorTag = details.tags;
    const image = details.images;

    for (let i = 0; i < colorTag.length; i++) {
      color1.innerHTML = colorTag[0].name;
      color2.innerHTML = colorTag[1].name;
      color3.innerHTML = colorTag[2].name;
    }

    for (let i = 0; i < image.length; i++) {
      console.log(image[i].src);
      detailImage.innerHTML = `<img src="${image[i].src}">`;
    }

    createHtml(details);
  } catch (error) {
    console.log(error);
    mainContainer.innerHTML = displayError(
      "An error has occured when trying to retrive the API"
    );
  }
}

fetchDetails();

function createHtml(details) {
  spinner.style.display = "none";
  detailName.innerHTML = `${details.name}`;

  detailBrand.innerHTML = `${details.categories[0].name}`;
  detailShortDescription.innerHTML = `${details.short_description}`;
  detailDescription.innerHTML = `${details.description}`;
  detailPrice.innerHTML = `$${details.prices.price}`;
  ordinaryPrice.innerHTML = `$${details.prices.regular_price}`;
  reviewCount.innerHTML = `${details.review_count} Reviews`;
  breadcrumbName.innerHTML = `${details.name}`;

  if (details.is_in_stock === true) {
    inStock.innerHTML = `In stock`;
  } else {
    inStock.innerHTML = `Out of stock`;
    inStockCircle.classList.add("red");
    basketButton.disabled = true;
  }

  if (details.on_sale === true) {
    detailPrice.style.color = "#be3e35";
    ordinaryPrice.style.display = "inline-block";
  }
}
