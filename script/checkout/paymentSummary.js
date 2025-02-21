import { cart } from "../cart.js";
import { getProduct } from "../product.js";
import { getDeliveryOption } from "../deliveryOption.js";
// import {formatCurrency} from '../utils/money.js';

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

    <button class="place-order-button button-primary">
      Place your order
    </button>
  `;

  document.querySelector(".js-payment-summary").innerHTML = paymentSummaryHTML;
}
