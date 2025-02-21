// // import {getProduct, loadProductsFetch} from '../products.js';
// // import {orders} from '../data/orders.js';
// // import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
// // // import formatCurrency from './utils/money.js';

// // async function loadPage() {
// //   await loadProductsFetch();

// //   let ordersHTML = '';

// //   orders.forEach((order) => {
// //     const orderTimeString = dayjs(order.orderTime).format('MMMM D');

// //     ordersHTML += `
// //       <div class="order-container">
// //         <div class="order-header">
// //           <div class="order-header-left-section">
// //             <div class="order-date">
// //               <div class="order-header-label">Order Placed:</div>
// //               <div>${orderTimeString}</div>
// //             </div>
// //             <div class="order-total">
// //               <div class="order-header-label">Total:</div>
// //               <div>$${formatCurrency(order.totalCostCents)}</div>
// //             </div>
// //           </div>
// //           <div class="order-header-right-section">
// //             <div class="order-header-label">Order ID:</div>
// //             <div>${order.id}</div>
// //           </div>
// //         </div>
// //         <div class="order-details-grid">
// //           ${productsListHTML(order)}
// //         </div>
// //       </div>
// //     `;
// //   });

// //   function productsListHTML(order) {
// //     let productsListHTML = '';

// //     order.allProducts.forEach((productDetails) => {
// //       const product = getProduct(productDetails.productId);

// //       productsListHTML += `
// //         <div class="product-image-container">
// //           <img src="${product.img}">
// //         </div>
// //         <div class="product-details">
// //           <div class="product-name">
// //             ${product.name}
// //           </div>
// //           <div class="product-delivery-date">
// //             Arriving on: ${
// //               dayjs(productDetails.estimatedDeliveryTime).format('MMMM D')
// //             }
// //           </div>
// //           <div class="product-quantity">
// //             Quantity: ${productDetails.quantity}
// //           </div>
// //           <button class="buy-again-button button-primary">
// //             <img class="buy-again-icon" src="images/icons/buy-again.png">
// //             <span class="buy-again-message">Buy it again</span>
// //           </button>
// //         </div>
// //         <div class="product-actions">
// //           <a href="tracking.html?orderId=${order.id}&productId=${product.id}">
// //             <button class="track-package-button button-secondary">
// //               Track package
// //             </button>
// //           </a>
// //         </div>
// //       `;
// //     });

// //     return productsListHTML;
// //   }

// //   document.querySelector('.js-orders-grid').innerHTML = ordersHTML;
// // }

// // loadPage();

// import { cart } from "../cart.js";
// import { getProduct } from "../product.js";
// import { deliveryOptions, getDeliveryOption } from "../deliveryOption.js";
// import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

// function renderOrders() {
//   const ordersContainer = document.querySelector(".js-orders-grid");
//   ordersContainer.innerHTML = ""; // Clear previous orders

//   if (cart.length === 0) {
//     ordersContainer.innerHTML = "<p class='empty-orders'>No orders placed yet.</p>";
//     return;
//   }

//   cart.forEach((cartItem, index) => {
//     const product = getProduct(cartItem.productId);
//     if (!product) {
//       console.error(`Product not found for ID: ${cartItem.productId}`);
//       return;
//     }

//     const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);

//     const orderDate = dayjs();
//     console.log(orderDate);
//     // const arrivalDate = orderDate.(deliveryOption.deliveryDays);
//     const arrivalDate = dayjs(orderDate).add(deliveryOption.deliveryDays, "days"); // Add delivery days to order date
//     arrivalDate.setDate(orderDate.getDate() + deliveryOption.deliveryDays);

//     const orderTotal = product.price * cartItem.quantity + deliveryOption.price;
//     const orderId = crypto.randomUUID();

//     const orderHTML = `
//       <div class="order-container">
//         <div class="order-header">
//           <div class="order-header-left-section">
//             <div class="order-date">
//               <div class="order-header-label">Order Placed:</div>
//               <div></div>
//             </div>
//             <div class="order-total">
//               <div class="order-header-label">Total:</div>
//               <div>₦${orderTotal.toLocaleString()}</div>
//             </div>
//           </div>
//           <div class="order-header-right-section">
//             <div class="order-header-label">Order ID:</div>
//             <div>${orderId}</div>
//           </div>
//         </div>
//         <div class="order-details-grid">
//           <div class="product-image-container">
//             <img src="${product.image}" alt="${product.name}" />
//           </div>
//           <div class="product-details">
//             <div class="product-name">${product.name}</div>
//             <div class="product-delivery-date">Arriving on: ${arrivalDate.toDateString()}</div>
//             <div class="product-quantity">Quantity: ${cartItem.quantity}</div>
//             <button class="buy-again-button button-primary">
//               <img class="buy-again-icon" src="product-img/cart/buy-again.png" />
//               <span class="buy-again-message">Buy it again</span>
//             </button>
//           </div>
//           <div class="product-actions">
//             <a href="tracking.html">
//               <button class="track-package-button button-secondary">Track package</button>
//             </a>
//           </div>
//         </div>
//       </div>
//     `;

//     ordersContainer.innerHTML += orderHTML;
//   });
// }

// document.addEventListener("DOMContentLoaded", renderOrders);

import { cart, updateDeliveryOption } from "./cart.js";
import { allProducts, getProduct } from "./product.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

const orders = JSON.parse(localStorage.getItem("orders")) || [];

function addOrder(order) {
  orders.unshift(order);

  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("orders", JSON.stringify(orders));
}

function renderOrders() {
  const ordersContainer = document.querySelector(".js-order-container");

  ordersContainer.innerHTML = "";
}
