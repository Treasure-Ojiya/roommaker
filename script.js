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
