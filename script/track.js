import { getDeliveryOption } from "./deliveryOption.js";

export const trackProduct =
  JSON.parse(localStorage.getItem("trackProduct")) || [];

export function addProduct(order) {
  console.log("Adding order to tracking:", order);

  const deliveryOption = getDeliveryOption(order.deliveryOptionId);
  if (!deliveryOption) {
    console.error("Missing delivery details for order:", order);
    return;
  }

  // Check if the order is already being tracked
  const isAlreadyTracked = trackProduct.some(
    (trackedOrder) => trackedOrder.orderId === order.orderId
  );

  if (isAlreadyTracked) {
    console.warn("Order already being tracked:", order.orderId);
    return;
  }

  // Add deliveryDays from the selected delivery option
  const orderToTrack = {
    ...order,
    deliveryDays: deliveryOption.deliveryDays,
  };

  trackProduct.unshift(orderToTrack);
  localStorage.setItem("trackProduct", JSON.stringify(trackProduct));
}
