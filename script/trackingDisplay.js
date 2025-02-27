import { orders } from "./order.js";
import { getProduct } from "./product.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { getDeliveryOption } from "./deliveryOption.js";
import { trackProduct } from "./track.js";

const params = new URLSearchParams(window.location.search);
const orderId = params.get("orderId");
const productId = params.get("productId");

console.log("✅ Extracted orderId:", orderId);
console.log("✅ Extracted productId:", productId);

// Find the specific order
const order = orders.find((o) => o.orderId === orderId);
if (!order) {
  console.error("❌ Order not found!");
}
const progressWidth = progressMeter(order.status);
console.log(progressWidth);

// Find the specific product in the order
const productItem = order?.items.find((item) => item.productId === productId);
if (!productItem) {
  console.error("❌ Error: Product not found in order!", productId);
}

// Get product details
const productDetails = getProduct(productItem?.productId);
if (!productDetails) {
  console.error("❌ Error: Product details not found!", productId);
}

// Get order time and delivery details
const orderTime = dayjs(order?.orderTime);
const deliveryOption = getDeliveryOption(order?.deliveryOptionId);
const deliveryDays = deliveryOption?.deliveryDays || 0;
const arrivalDate = orderTime.isValid()
  ? orderTime.add(deliveryDays, "day").format("MMMM D, YYYY")
  : "Unknown Date";

// Render the tracking page
renderTrackPage(order, productItem, productDetails, arrivalDate);

function renderTrackPage(order, productItem, productDetails, arrivalDate) {
  const trackContainer = document.querySelector(".js-track-order");
  trackContainer.innerHTML = "";

  let trackHTML = ""; // Initialize trackHTML

  trackHTML += `
    <div class="order-tracking">
      <a class="back-to-orders-link link-primary" href="orders.html">
        View all orders
      </a>

      <div class="delivery-date">Arriving on: ${arrivalDate}</div>

      <div class="product-info">${
        productDetails?.name || "Unknown Product"
      }</div>

      <div class="product-info">Quantity: ${
        productItem?.quantity || "N/A"
      }</div>

      <img class="product-image" src="${productDetails?.img}" />

      <div class="progress-labels-container">
        <div class="progress-label ${
          order.status === "Preparing" ? "current-status" : ""
        }">Preparing</div>
        <div class="progress-label ${
          order.status === "Shipped" ? "current-status" : ""
        }">Shipped</div>
        <div class="progress-label ${
          order.status === "Delivered" ? "current-status" : ""
        }">Delivered</div>
      </div>

      <div class="progress-bar-container">
        <div class="progress-bar" style="width: ${progressWidth}%;"></div>
      </div>
    </div>
  `;

  console.log((trackContainer.innerHTML = trackHTML));
}

// Function to calculate progress meter percentage
function progressMeter(status) {
  console.log(status);
  switch (status) {
    case "Preparing":
      return 25;
    case "Shipped":
      return 50;
    case "Delivered":
      return 100;
    default:
      return 0;
  }
}

console.log("✅ Orders Data:", orders);
