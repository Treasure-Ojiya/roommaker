const cart = {
  cartItems: undefined,

  loadFromStorage() {
    this.cartItems = JSON.parse(localStorage.getItem("cart-oop"));

    if (!this.cartItems) {
      this.cartItems = [
        {
          productId: "PROD-547281",
          quantity: 2,
          deliveryOptionId: "1",
        },
        {
          productId: "PROD-839472",
          quantity: 1,
          deliveryOptionId: "2",
        },
      ];
    }
  },

  saveToStorage() {
    localStorage.setItem("cart-oop", JSON.stringify(this.cartItems));
  },

  addToCart(productId) {
    let matchingItem;

    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
      // console.log(cartItem);
    });

    if (matchingItem) {
      matchingItem.quantity += 1;
      console.log(matchingItem);
    //   const addedElem = document.querySelector(
    //     `.js-added-to-cart-${productId}`
    //   );
    //   addedElem.style.opacity = 1;
    //   setTimeout(() => {
    //     addedElem.style.opacity = 0;
    //   }, 3000);
    } else {
      this.cartItems.push({
        productId: productId,
        quantity: 1,
        deliveryOptionId: "1",
      });
    //   const addedElem = document.querySelector(
    //     `.js-added-to-cart-${productId}`
    //   );
    //   addedElem.style.opacity = 1;
    //   setTimeout(() => {
    //     addedElem.style.opacity = 0;
    //   }, 2000);
    }

    this.saveToStorage();
  },

  removeFromCart(productId) {
    const newCart = [];

    this.cartItems.forEach((cartItem) => {
      if (cartItem.productId === productId) {
        if (cartItem.quantity > 1) {
          cartItem.quantity -= 1; // Reduce quantity by 1
          newCart.push(cartItem);
        }
      } else {
        newCart.push(cartItem); // Keep other items
      }
    });

    this.cartItems = newCart;
    console.log(cart);

    this.saveToStorage();
    location.reload();
  },

  updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem;

    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });

    matchingItem.deliveryOptionId = deliveryOptionId;

    this.saveToStorage();
  },
};

cart.loadFromStorage();

cart.addToCart("PROD-193856")
console.log(cart);