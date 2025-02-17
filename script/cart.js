// "use strict";

// export let cart = JSON.parse(localStorage.getItem("cart"))

// if(!cart) {
//   cart = [{
//     productId: "PROD-547281",
//     quantity: 2,
//     deliveryOptionId: "1"
//   },{
//     productId: "PROD-839472",
//     quantity: 1,
//     deliveryOptionId: "2"
//   }];
// }
// // console.log(cart);

// //

// function saveToStorage() {
//   localStorage.setItem("cart", JSON.stringify(cart));
// }

// export function addToCart(productId) {
//   let matchingItem;
//   cart.forEach((cartItem) => {
//     if (productId === cartItem.productId) {
//       matchingItem = cartItem;
//     }
//   });
//   console.log(matchingItem);

//   if (matchingItem) {
//     matchingItem.quantity += 1;
//     const addedElem = document.querySelector(`.js-added-to-cart-${productId}`);
//     addedElem.style.opacity = 1;
//     setTimeout(() => {
//       addedElem.style.opacity = 0;
//     }, 3000); // Hide the checkmark after 2 seconds
//   } else {
//     cart.push({ productId: productId, quantity: 1,
//       deliveryOptionId: "1"
//      });
//     const addedElem = document.querySelector(`.js-added-to-cart-${productId}`);
//     addedElem.style.opacity = 1;
//     setTimeout(() => {
//       addedElem.style.opacity = 0;
//     }, 2000); // Hide the checkmark after 2 seconds
//   }

//   saveToStorage();
//   console.log(cart);
// }

// // export function removeFromCart(productId) {
// //   const newCart = [];
// //   cart.forEach((cartItem) => {
// //     if (cartItem.id !== productId) {
// //       newCart.push(cartItem);
// //     }
// //   });
// //   cart = newCart;
// //   console.log(cart);

// //   saveToStorage();
// // }

// export function removeFromCart(productId) {
//   let newCart = [];

//   cart.forEach((cartItem) => {
//     if (cartItem.productId === productId) {
//       if (cartItem.quantity > 1) {
//         cartItem.quantity -= 1; // Reduce quantity by 1
//         newCart.push(cartItem);
//       }
//     } else {
//       newCart.push(cartItem); // Keep other items
//     }
//   });

//   cart = newCart;
//   console.log(cart);

//   saveToStorage();
//   // updateCartQuantity();
// }

// export function updateDeliveryOption(productId, deliveryOptionId) {
//   let matchingItem;

//   cart.forEach((cartItem) => {
//     if (productId === cartItem.productId) {
//       matchingItem = cartItem;
//     }
//   });

//   matchingItem.deliveryOptionId = deliveryOptionId;

//   saveToStorage();
// }

export let cart;

loadFromStorage();

export function loadFromStorage() {
  cart = JSON.parse(localStorage.getItem("cart"));

  if (!cart) {
    cart = [
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
}
 

function saveToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(productId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
    // console.log(cartItem);
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
    console.log(matchingItem);
    const addedElem = document.querySelector(`.js-added-to-cart-${productId}`);
    addedElem.style.opacity = 1;
    setTimeout(() => {
      addedElem.style.opacity = 0;
    }, 3000);
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
      deliveryOptionId: "1",
    });
    const addedElem = document.querySelector(`.js-added-to-cart-${productId}`);
    addedElem.style.opacity = 1;
    setTimeout(() => {
      addedElem.style.opacity = 0;
    }, 2000);
  }

  saveToStorage();
}

export function removeFromCart(productId) {
  let newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId === productId) {
      if (cartItem.quantity > 1) {
        cartItem.quantity -= 1; // Reduce quantity by 1
        newCart.push(cartItem);
      }
    } else {
      newCart.push(cartItem); // Keep other items
    }
  });

  cart = newCart;
  console.log(cart);

  saveToStorage();
  location.reload();
}
export function updateDeliveryOption(productId, deliveryOptionId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.deliveryOptionId = deliveryOptionId;

  saveToStorage();
}
