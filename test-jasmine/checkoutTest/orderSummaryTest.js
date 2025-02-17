import { renderOrderSummary } from "../../script/checkout/orderSummary.js";
import { loadFromStorage } from "../../script/cart.js";

// import { loadFromStorage, cart } from "../../script/cart.js";

describe("test suite: renderOrderSummary", () => {
  it("displays the cart", () => {
    document.querySelector(
      ".js-test-container"
    ).innerHTML = `<div class='js-order-summary'></div>`;

    const productId1 = "PROD-547281";
    const productId2 = "PROD-839472";

    spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([
        {
          productId: productId1,
          quantity: 2,
          deliveryOptionId: "1",
        },
        {
          productId: productId2,
          quantity: 1,
          deliveryOptionId: "2",
        },
      ]);
    });
    loadFromStorage();

    renderOrderSummary();

    expect(document.querySelectorAll(".js-cart-item-container").length).toEqual(
      2
    );

    expect(
      document.querySelector(`.js-product-quantity-${productId1}`).innerText
    ).toContain("Quantity: 2");

    expect(
      document.querySelector(`.js-product-quantity-${productId2}`).innerText
    ).toContain("Quantity: 1");
  });

  it('removes a product', () => {
const productId1 = "PROD-547281";
    const productId2 = "PROD-839472";

    document.querySelector(`.js-delete-link-${productId1}`).click();
    expect(
      document.querySelectorAll('.js-cart-item-container').length
    ).toEqual(1);
    expect(
      document.querySelector(`.js-cart-item-container-${productId1}`)
    ).toEqual(null);
    expect(
      document.querySelector(`.js-cart-item-container-${productId2}`)
    ).not.toEqual(null);
    expect(cart.length).toEqual(1);
    expect(cart[0].productId).toEqual(productId2);

    document.querySelector('.js-test-container').innerHTML = '';
  });
});
