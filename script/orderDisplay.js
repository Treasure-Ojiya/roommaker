import { orders, saveToStorage } from "./order.js";
import { getProduct } from "./product.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { deliveryOptions, getDeliveryOption } from "./deliveryOption.js";

function productListHTML(order) {
  let productListHTML = "";
  order.items.forEach((item) => {
    const product = getProduct(item.productId);
    if (product) {
      const arrivalDate = dayjs(order.orderTime)
        .add(getDeliveryOption(order.deliveryOptionId).deliveryDays, "day")
        .format("MMMM D");

      productListHTML += `
        <div class="product-image-container">
          <img src="${product.img}" alt="${product.name}" />
        </div>
        <div class="product-details">
          <div class="product-name">${product.name}</div>
          <div class="product-delivery-date">Arriving on: ${arrivalDate}</div>
          <div class="product-quantity">Quantity: ${item.quantity}</div>
          <button class="buy-again-button button-primary">
            <!-- img class="buy-again-icon" src="product-img/cart/buy-again.png" /> -->
            <!-- span class="buy-again-message">Buy it again</span> -->
          </button>
        </div>
        <div class="product-actions">
          <button class="track-order-button button-secondary js-track-order" 
            data-order-id="${order.orderId}" 
            data-product-id="${order.items[0]?.productId}">
      Track Order
    </button>
        </div>
      `;
    }
  });
  return productListHTML;
}

function displayOrders() {
  const ordersContainer = document.querySelector(".js-orders-grid");
  ordersContainer.innerHTML = "";

  if (orders.length === 0) {
    ordersContainer.innerHTML = `<p>No orders found.</p>`;
    return;
  }

  orders.forEach((order, idx) => {
    const deliveryOption = getDeliveryOption(order.deliveryOptionId);
    const orderDate = dayjs(order.orderTime).format("MMMM D");
    const orderTotal = order.totalAmount;

    const orderHTML = `
      <div class="order-container">
        <div class="order-header">
          <div class="order-header-left-section">
            <div class="order-date">
              <div class="order-header-label">Order Placed:</div>
              <div>${orderDate}</div>
            </div>
            <div class="order-total">
              <div class="order-header-label">Total:</div>
              <div>₦${orderTotal.toLocaleString()}</div>
            </div>
          </div>
          <div class="order-header-right-section">
            <div class="order-header-label">Order ID:</div>
            <div>${order.orderId}</div>
          </div>
        </div>
        <div class="order-details-grid">
          ${productListHTML(order)}
        </div>

        <button class="delete-order-button" data-order-index="${idx}">Delete Order</button>
      </div>
    `;

    ordersContainer.innerHTML += orderHTML;
  });

  deleteOrderEvents();
  TrackOrderEvents();
}

displayOrders();

function deleteOrderEvents() {
  const deleteButtons = document.querySelectorAll(".delete-order-button");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const orderIndex = event.target.dataset.orderIndex;
      // console.log("orderIndex Clicked");
      deleteOrder(orderIndex);
    });
  });
}

// function attachDeleteOrderEvents() {
//   document.querySelectorAll(".delete-order-button").forEach((button) => {
//     button.addEventListener("click", (event) => {
//       const orderIndex = event.target.dataset.orderIndex;
//       deleteOrder(orderIndex);
//     });
//   });
// }

function deleteOrder(orderIndex) {
  orders.splice(orderIndex, 1);
  saveToStorage();
  displayOrders();
}

function TrackOrderEvents() {
  document.querySelectorAll(".track-order-button").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();

      const orderId = event.target.dataset.orderId;
      const productId = event.target.dataset.productId;

      if (!orderId || !productId) {
        console.error("❌ Error: Missing orderId or productId!", event.target);
        return;
      }

      console.log("✅ Redirecting with:", orderId, productId);

      window.location.href = `tracking.html?orderId=${orderId}&productId=${productId}`;
    });
  });
}
