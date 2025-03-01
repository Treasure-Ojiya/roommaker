// "use strict";

// import { cart, removeFromCart } from "./cart.js";
// import { allProducts } from "./product.js";
// import { hello } from "https://unpkg.com/supersimpledev@1.0.1/hello.esm.js";
// import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

// hello();

// const today = dayjs();
// const deliveryDate = today.add(7, "days");
// deliveryDate;
// console.log(deliveryDate.format("dddd, MMMM D"));
// // const savedDeliveryOptions = JSON.parse(localStorage.getItem("deliveryOptions")) || [];
// // console.log(savedDeliveryOptions);

// let cartSummaryHTML = "";

// cart.forEach((cartItem) => {
//   const productId = cartItem.id;

//   let matchingProduct;

//   allProducts.forEach((product) => {
//     if (productId === product.id) {
//       matchingProduct = product;
//     }
//   });

//   // console.log(matchingProduct);

//   cartSummaryHTML += ` <div class="cart-item-container js-cart-item-container-${
//     matchingProduct.id
//   }">
//         <div class="delivery-date">Delivery date: Tuesday, June 21</div>

//             <div class="cart-item-details-grid">
//               <img
//                 class="product-image"
//                 src="${matchingProduct.img}"
//               />

//               <div class="cart-item-details">
//                 <div class="product-name">${matchingProduct.name}</div>
//                 <div class="product-price">${new Intl.NumberFormat("en-NG", {
//                   style: "currency",
//                   currency: "NGN",
//                 }).format(matchingProduct.price)}</div>
//                 <div class="product-quantity">
//                   <span> Quantity: <span class="quantity-label">${
//                     cartItem.quantity
//                   }</span> </span>
//                   <span class="update-quantity-link link-primary">
//                     Update
//                   </span>
//                   <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${
//                     matchingProduct.id
//                   }">
//                     Delete
//                   </span>
//                 </div>
//               </div>

//               <div class="delivery-options">
//                 <div class="delivery-options-title">
//                   Choose a delivery option:
//                 </div>
//                 <div class="delivery-option">
//                   <input
//                     type="radio"
//                     checked
//                     class="delivery-option-input"
//                     name="delivery-option-${matchingProduct.id}"
//                   />
//                   <div>
//                     <div class="delivery-option-date">Tuesday, June 21</div>
//                     <div class="delivery-option-price">FREE Shipping</div>
//                   </div>
//                 </div>
//                 <div class="delivery-option">
//                   <input
//                     type="radio"
//                     class="delivery-option-input"
//                     name="delivery-option-${matchingProduct.id}"
//                   />
//                   <div>
//                     <div class="delivery-option-date">Wednesday, June 15</div>
//                     <div class="delivery-option-price">$4.99 - Shipping</div>
//                   </div>
//                 </div>
//                 <div class="delivery-option">
//                   <input
//                     type="radio"
//                     class="delivery-option-input"
//                     name="delivery-option-${matchingProduct.id}"
//                   />
//                   <div>
//                     <div class="delivery-option-date">Monday, June 13</div>
//                     <div class="delivery-option-price">$9.99 - Shipping</div>
//                   </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     `;
// });

// document.querySelector(".js-order-summary").innerHTML = cartSummaryHTML;
// // console.log(cartSummaryHTML);

// document.querySelectorAll(".js-delete-link").forEach((link) => {
//   link.addEventListener("click", () => {
//     const productId = link.dataset.productId;
//     removeFromCart(productId);
//     // console.log(productId);
//     // console.log(cart);

//     const container = document.querySelector(
//       `.js-cart-item-container-${productId}`
//     );
//     console.log(container);
//     container.remove();
//     console.log(container);
//   });
// });

import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
// import './cart-class.js'
// import './backend-practice.js'

renderOrderSummary();
renderPaymentSummary();
