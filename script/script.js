"use strict";

const slides = document.querySelectorAll(".slider");
const prevBtn = document.querySelector(".left-btn");
const nextBtn = document.querySelector(".right-btn");
const menuToggle = document.getElementById("toggle-menu");
const closeMenuBtn = document.getElementById("close-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slider, i) => {
    if (i === index) {
      slider.classList.remove("hidden");
      slider.style.transform = "translate(0, 0)";
    } else {
      slider.classList.add("hidden");
    }
  });
}

nextBtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

prevBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

// Initial display
showSlide(currentSlide);

// DOM Elements

// Open Menu
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

const navContainer = document.querySelector(".menu-container");
const nav = document.querySelector(".nav");
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

const stickyNav = (entries) => {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};
const navObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
navObserver.observe(navContainer);

// SHOP CART LOGIC
// Check the shop html for it
// 1. Initialize cart from localStorage or create empty:
// let cart = JSON.parse(localStorage.getItem("cart")) || [];

// // 2. Function to display the cart items and calculate total:
// function displayCart() {
//   const cartItemsList = document.getElementById("cart-items");
//   const cartTotal = document.getElementById("cart-total");

//   cartItemsList.innerHTML = ""; // Clear existing items
//   let total = 0;

//   cart.forEach((item) => {
//     const li = document.createElement("li");
//     li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
//     cartItemsList.appendChild(li);
//     total += item.price * item.quantity;
//   });

//   cartTotal.textContent = total;
// }

// // 3. Add to cart functionality:
// const productGrids = document.querySelectorAll(".product-grid"); // Select all product grids
// console.log(productGrids);

// productGrids.forEach((productGrid) => {
//   // Iterate through each product grid
//   productGrid.addEventListener("click", (event) => {
//     if (event.target.classList.contains("add-to-cart")) {
//       const itemName = event.target.dataset.name;
//       console.log(itemName);
//       const itemPrice = parseFloat(event.target.dataset.price);

//       const existingItem = cart.find((item) => item.name === itemName);

//       if (existingItem) {
//         existingItem.quantity++;
//       } else {
//         cart.push({ name: itemName, price: itemPrice, quantity: 1 });
//       }

//       localStorage.setItem("cart", JSON.stringify(cart)); // Save to local storage
//       displayCart();
//     }
//   });
// });

// // 4. Initial display of cart (when the page loads):
// displayCart();

