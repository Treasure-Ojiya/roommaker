import { addToCart, cart, loadFromStorage } from "../script/cart.js";

describe("test suite: addToCart", () => {
  it("add an existing product to the cart", () => {
    spyOn(localStorage, "setItem");

    spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([
        { productId: "PROD-547281", quantity: 1, deliverOptionId: "1" },
      ]);
    });
    loadFromStorage();

    addToCart("PROD-547281");
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual("PROD-547281");
    expect(cart[0].quantity).toEqual(2);
  });

  it("adds a new product to the cart", () => {
    spyOn(localStorage, "setItem");

    spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([]);
    });
    console.log(localStorage.getItem("cart"));
    loadFromStorage();

    addToCart("PROD-547281");
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual("PROD-547281");
    expect(cart[0].quantity).toEqual(1);
  });
});
