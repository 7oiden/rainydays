const productContainer = document.querySelector(".products");
const productName = document.querySelector(".title");
const productPrice = document.querySelector(".price");
const productImage = document.querySelector(".jacket-image");
const productShortDescription = document.querySelector(".short-description");
const productBrand = document.querySelector(".brand");
// const productLink = document.querySelector("#selected");

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

    productContainer.innerHTML = "";

    for (let i = 0; i < results.length; i++) {
      console.log(results[i].id);

      productContainer.innerHTML += `
    
       <a href="products_page.html?id=${results[i].id}" id="selected">
       <div class="jacket">
       <figure class="jacket-image"><img src="${results[i]["images"][0]["src"]}" class="jacket-image" alt=""></figure>
       <h2 class="title">${results[i].name}</h2>
       <h3 class="title">$${results[i].prices.price}</h3>
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

{
  /* <figcaption class="title">${productName.innerHTML}</figcaption>
     <figcaption class="price">$${results[i].prices.price}</figcaption> */
}

// productLink.href = `products_page.html?id=${results[i].id}`;
// productName.innerHTML = `${results[i].name}`;
// productPrice.innerHTML = `$${results[i].prices.price}`;
// productImage.innerHTML = `<img src="${results[i]["images"][0]["src"]}" class="jacket-image" alt="">`;
