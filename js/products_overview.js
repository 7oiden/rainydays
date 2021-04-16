const productContainer = document.querySelector(".products");
const productName = document.querySelector(".title");
const productPrice = document.querySelector(".price");
const productImage = document.querySelector(".jacket-image");
const productShortDescription = document.querySelector(".short-description");
const productBrand = document.querySelector(".brand");
// const productLink = document.querySelector("#selected");

url = "http://7oiden.com/rainydays/wp-json/wc/store/products/";

// async function fetchProducts() {
//   try {
//     const response = await fetch(url);
//     const results = await response.json();

//     console.log(results);

//     for (let i = 0; i < results.length; i++) {
//       console.log(results[i].id);

//       console.log(results[i]["categories"][0]["name"]);

//       //   productContainer.innerHTML += `
//       //  <a href="details.html?id=${results[i].id}"

//       // </a>`;

//       productName.innerHTML = `${results[i].name}`;
//       productPrice.innerHTML = `$${results[i].prices.price}`;
//       productImage.innerHTML = `<img src="${results[i]["images"][0]["src"]}" class="jacket-image" alt="">`;

//       productBrand.innerHTML = `${results[i]["categories"][0]["name"]}`;

//       productShortDescription.innerHTML = `${results[i].short_description}`;
//     }
//   } catch (error) {
//     console.log(error);
//     productContainer.innerHTML = displayError(
//       "An error has occured when trying to retrive the API"
//     );
//   }
// }

// fetchProducts();

async function fetchProducts() {
  try {
    const response = await fetch(url);
    const results = await response.json();

    console.log(results);

    productContainer.innerHTML = "";

    for (let i = 0; i < results.length; i++) {
      console.log(results[i].id);

      let inStock = "In stock";
      let inStockColor = "green";
      let onSale = "";

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

      //   let inStockCircle = document.querySelector("#circle");
      //   let inStock = document.querySelector("#in-stock");

      //   console.log(results[i].is_in_stock);

      //   if (results[i].is_in_stock === true) {
      //     inStockCircle.classList.add("green");
      //     inStock.innerHTML = "In stock";
      //   } else {
      //     inStockCircle.classList.add("red");
      //   }
    }
  } catch (error) {
    console.log(error);
    productContainer.innerHTML = displayError(
      "An error has occured when trying to retrive the API"
    );
  }
}

fetchProducts();

{
  /* <figcaption class="title">${productName.innerHTML}</figcaption>
     <figcaption class="price">$${results[i].prices.price}</figcaption> */
}

// productLink.href = `products_page.html?id=${results[i].id}`;
// productName.innerHTML = `${results[i].name}`;
// productPrice.innerHTML = `$${results[i].prices.price}`;
// productImage.innerHTML = `<img src="${results[i]["images"][0]["src"]}" class="jacket-image" alt="">`;
