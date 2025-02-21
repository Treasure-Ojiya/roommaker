"use strict";

import { cart, addToCart } from "./cart.js";
import { allProducts } from "./product.js";

let productsHTML = "";

allProducts.forEach((product) => {
  productsHTML += `          <div class="product">
              <div class="product-img-container">
                <img
                  class="product-img"
                  src="${product.img}"
                  alt=""
                />
              </div>
  
              <div class="product-text">
              <div class="product-name limit-text-to-2-lines">
                ${product.name}
              </div>
  
              <div class="product-price">  ${new Intl.NumberFormat("en-NG", {
                style: "currency",
                currency: "NGN",
              }).format(product.price)}</div>

              ${""/*product.extraInfoHTML()*/}
  
              <div class="product-spacer"></div>
  
              <div class="added-to-cart added-to-cart js-added-to-cart-${
                product.id
              }">
                <img class="checkmark" src="product-img/cart/checkmark.png" />
                Added
              </div>
  
              <button
                class="add-to-cart button-primary js-add-to-cart"
                data-product-id="${product.id}"
                data-price="${product.price}"
              >
                Add to Cart
              </button>
              </div>
            </div>
  `;
});

console.log(productsHTML);
// productsHTML;

document.querySelector(".js-products-grid").innerHTML = productsHTML;
function updateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  document.querySelector(".js-cart-quantity").textContent = cartQuantity;
}

document.querySelectorAll(".js-add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const productID = button.dataset.productId;
    addToCart(productID);
    console.log(productID);
    updateCartQuantity();
  });
});

// const navContainer = document.querySelector(".menu-container");
// const nav = document.querySelector(".nav");
// const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);

// const stickyNav = (entries) => {
//   const [entry] = entries;
//   if (!entry.isIntersecting) nav.classList.add("sticky");
//   else nav.classList.remove("sticky");
// };
// const navObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
//   rootMargin: `-${navHeight}px`,
// });
// navObserver.observe(navContainer);

const menuToggle = document.getElementById("toggle-menu");
const closeMenuBtn = document.getElementById("close-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
  mobileMenu.classList.add("active");
  mobileMenu.classList.remove("mobile-nav");
});

// Close Menu
closeMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  mobileMenu.classList.add("hidden");
  mobileMenu.classList.add("mobile-nav");
});
