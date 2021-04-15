const productContainer = document.querySelector(".jacket");
const productName = document.querySelector(".title");
const productPrice = document.querySelector(".price");
const productImage = document.querySelector(".jacket-image");
const productShortDescription = document.querySelector(".short-description");
const productBrand = document.querySelector(".brand");
const productLink = document.querySelector("#selected");



url = "http://7oiden.com/rainydays/wp-json/wc/store/products?_embed";

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

    productLink.innerHTML = "";

    for (let i = 0; i < results.length; i++) {
      console.log(results[i].id);

      productLink.innerHTML += `
     <a href="products_page.html?id=${results[i].id}"</a>`;
    }
  } catch (error) {
    console.log(error);
    productLink.innerHTML = displayError(
      "An error has occured when trying to retrive the API"
    );
  }
}

fetchProducts();
