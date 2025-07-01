// assignment 1

var featuredProducts = document.getElementById('featured-products');
var productCard = document.createElement('div');
productCard.textContent = 'New Drone';
productCard.id = "drone";
featuredProducts.appendChild(productCard);

// assignment 2

var productList = document.getElementById("product-list");
var newProduct = document.createElement("p");
newProduct.className = "product-item";
newProduct.textContent = "E-Reader";
productList.appendChild(newProduct);

// assignment 3

var productContainer = document.getElementById("product-container");
var newProduct = document.createElement("p");
newProduct.textContent = "Wireless Headphones";
productContainer.appendChild(newProduct);

// assignment 4
var offersList = document.querySelector("#special-offers ul");

var newOffer = document.createElement("li");

newOffer.textContent = "Gaming Console";

offersList.appendChild(newOffer);

