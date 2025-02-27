import { cart, loadFromStorage } from "../cart.js";
import { getProduct } from "../product.js";
import { getDeliveryOption } from "../deliveryOption.js";
// import {formatCurrency} from '../utils/money.js';
import { addOrder } from "../order.js";

export function renderPaymentSummary() {
  let productPrice = 0;
  let shippingPrice = 0;

  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    if (!product) {
      console.error(`Product not found for ID: ${cartItem.productId}`);
      return;
    }
    productPrice += product.price * cartItem.quantity;

    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
    shippingPrice += deliveryOption.price;
  });

  const totalBeforeTax = productPrice + shippingPrice;
  const tax = totalBeforeTax * 0.1;
  const total = totalBeforeTax + tax;
  const orderID = crypto.randomUUID();

  const paymentSummaryHTML = `
    <div class="payment-summary-title">
      Order Summary
    </div>

    <div class="payment-summary-row">
      <div>Items:</div>
      <div class="payment-summary-money">
        ${new Intl.NumberFormat("en-NG", {
          style: "currency",
          currency: "NGN",
        }).format(productPrice)}
      </div>
    </div>

    <div class="payment-summary-row">
      <div>Shipping &amp; handling:</div>
      <div class="payment-summary-money">
        ${new Intl.NumberFormat("en-NG", {
          style: "currency",
          currency: "NGN",
        }).format(shippingPrice)}
      </div>
    </div>

    <div class="payment-summary-row subtotal-row">
      <div>Total before tax:</div>
      <div class="payment-summary-money">
        ${new Intl.NumberFormat("en-NG", {
          style: "currency",
          currency: "NGN",
        }).format(totalBeforeTax)}
      </div>
    </div>

    <div class="payment-summary-row">
      <div>Estimated tax (10%):</div>
      <div class="payment-summary-money">
      ${new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
      }).format(tax)}
      </div>
    </div>

    <div class="payment-summary-row total-row">
      <div>Order total:</div>
      <div class="payment-summary-money">
      ${new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
      }).format(total)}
      </div>
    </div>

    <div class="payment-options">
      <label for="payment-method">Choose Payment Method:</label>
      <select id="payment-method" class="js-payment-method">
        <option value="card">Credit/Debit Card</option>
        <option value="transfer">Bank Transfer</option>
        <option value="cod">Cash on Delivery</option>
      </select>
    </div>

    <button class="place-order-button button-primary js-place-order">
      Place your order
    </button>
  `;

  document.querySelector(".js-payment-summary").innerHTML = paymentSummaryHTML;

  document.querySelector(".js-place-order").addEventListener("click", () => {
    console.log("button clicked");
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    const paymentMethod = document.querySelector(".js-payment-method").value; //Get payment Method

    const newOrder = {
      // orderId: `ORD-${Date.now()}`,
      orderId: orderID,
      items: [...cart],
      totalAmount: total,
      // totalAmount: cart.reduce((sum, item) => {
      //   const product = getProduct(item.productId);
      //   return sum + (product ? product.price * item.quantity : 0);
      // }, 0),
      paymentMethod,
      orderTime: new Date().toISOString(),
      deliveryOptionId: cart[0].deliveryOptionId, //Add deliveryOptionId
    };

    addOrder(newOrder); // Add the order

    // Clear cart after placing order
    loadFromStorage();

    // Redirect to the orders page or refresh
    window.location.href = "orders.html"; // Redirect to orders.html
    // OR: window.location.reload(); // Refresh the current page
  });
}
