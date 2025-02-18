function Cart(localstorageKey){
  const cart = {
    cartItems: undefined,
  
    loadFromStorage() {
      this.cartItems = JSON.parse(localStorage.getItem(localstorageKey));
  
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
      localStorage.setItem(localstorageKey, JSON.stringify(this.cartItems));
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
  
  return cart;
}

const cart = Cart('cart-oop');
const businessCart = Cart('cart-business');

cart.loadFromStorage();
businessCart.loadFromStorage();

console.log(cart);
console.log(businessCart);