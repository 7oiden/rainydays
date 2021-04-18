const productContainer = document.querySelector(".products");
const productName = document.querySelector(".title");
const productPrice = document.querySelector(".price");
const productImage = document.querySelector(".jacket-image");
const productShortDescription = document.querySelector(".short-description");
const productBrand = document.querySelector(".brand");
const loadButton = document.querySelector(".load");

// const productLink = document.querySelector("#selected");

const productsUrl = "http://7oiden.com/rainydays/wp-json/wc/store/products/";

const corsEnabledUrl = "https://noroffcors.herokuapp.com/" + productsUrl;

async function fetchProducts() {
  try {
    const response = await fetch(corsEnabledUrl);
    const results = await response.json();

    console.log(results);

    productContainer.innerHTML = "";

    for (let i = 0; i < results.length; i++) {
      console.log(results[i].tags);

      let inStock = "In stock";
      let inStockColor = "green";
      let onSale = "";

      if (results.length < 10) {
        loadButton.disabled = true;
      }

      if (results[i].is_in_stock === false) {
        inStock = "Out of stock";
        inStockColor = "red";
      }

      if (results[i].on_sale === true) {
        onSale = "SALE";
      }

      productContainer.innerHTML += `
       <a href="products_page.html?id=${results[i].id}" id="selected" class="jacket">
       <div>
       <div class="top-wrapper">
       <figure class="jacket-image"><img src="${results[i]["images"][0]["src"]}" class="jacket-image" alt=""></figure>
       <span class=sale>${onSale}</span> 
       </div> 
       <h2 class="title">${results[i].name}</h2>
       <p class="brand">${results[i]["categories"][0]["name"]}</p>
       <ul class="short-description">${results[i].short_description}</ul>
       <div class="end-wrapper">
       <div id="stock">
       <span id="circle" class="${inStockColor}"></span>
       <p id="in-stock">${inStock}</p>
        </div>    
       <h3 class="title">$${results[i].prices.price}</h3>
        </div>
        </div>
       </a>
       `;
    }
  } catch (error) {
    console.log(error);
    productContainer.innerHTML = displayError(
      "An error has occured when trying to retrive the API"
    );
  }
}

fetchProducts();

for (let i = 0; i < results[i].tags.length; i++) {
  console.log(results[i].tags[i].name);
}
