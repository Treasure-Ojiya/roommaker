"use strict";

const allProducts = [
  {
    name: "Baretta Outdoor Sofa Set",
    price: 499,
    img: "../product-img/Baretta-outdoor-sofa-set.jpg",
    id: "PROD-547281",
  },
  {
    name: "Brownie Dining Set",
    price: 699,
    img: "../product-img/Brownie-Dining-set.jpg",
    id: "PROD-839472",
  },
  {
    name: "Salda Manager Chair",
    price: 249,
    img: "../product-img/salda-manager-chair.jpg",
    id: "PROD-193856  ",
  },
  {
    name: "Triple Desk Drawer",
    price: 200,
    img: "product-img/Desk-Drawer.jpg",
    id: "PROD-674920",
  },
  {
    name: "Armin Office Table",
    price: 320,
    img: "product-img/Armin-office-table.jpg",
    id: "PROD-319475",
  },
  {
    name: "Alacati Plus Outdoor Swing",
    price: 400,
    img: "product-img/Alacati-Plus-Outdoor-Swing.jpg",
    id: "PROD-502738 ",
  },
  {
    name: "Dreams Drapery",
    price: 550,
    img: "product-img/Dreams-Drapery-2.jpg",
    id: "PROD-285614 ",
  },
  {
    name: "Duetto Sofa Set Triple",
    price: 700,
    img: "product-img/Duetto-Sofa-Set-Triple.jpg",
    id: "PROD-761493 ",
  },
  {
    name: "Flat Office Set Console",
    price: 499,
    img: "product-img/Flat-Office-Set-Console.jpg",
    id: "PROD-948327",
  },
  {
    name: "Garda Outdoor Set",
    price: 599,
    img: "product-img/Garda-Outdoor-Set.jpg",
    id: "PROD-687204",
  },
  {
    name: "Gloria Center Table",
    price: 540,
    img: "product-img/Gloria-Need-Center-Table.jpg",
    id: "PROD-125968",
  },
  // Add 30+ more products here...
];

let productsHTML = "";

allProducts.forEach((product) => {
  productsHTML += `          <div class="product">
              <div class="product-img-container">
                <img
                  class="product-img"
                  src="${product.img}"
                  alt=""
                />
              </div>
  
              <div class="product-name limit-text-to-2-lines">
                ${product.name}
              </div>
  
              <div class="product-price">$${product.price}</div>

               <div class="product-quantity-container">
                <select class="js-quantity-selector${product.name}>
                  <option selected value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
  
              <div class="product-spacer"></div>
  
              <div class="added-to-cart added-to-cart js-added-to-cart-${product.id}">
                <img class="checkmark" src="product-img/cart/checkmark.png" />
                Added
              </div>
  
              <button
                class="add-to-cart button-primary js-add-to-cart"
                data-name="${product.id}"
                data-price="${product.price}"
              >
                Add to Cart
              </button>
            </div>
  `;
});

console.log();
productsHTML;

document.querySelector(".js-products-grid").innerHTML = productsHTML;

document.querySelectorAll(".js-add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const productID = button.dataset.id;

    let matchingItem;

    cart.forEach((item) => {
      if (productID === item.id) {
        matchingItem = item;
      }
    });

    // if (matchingItem) {
    //   matchingItem.quantity += 1;
    // } else {
    //   cart.push({ id: productID, quantity: 1 });
    // }

    const quantitySelector = document.querySelector(
      `.js-quantity-selector-${productID}`
    );
    const quantity = Number(quantitySelector.value);

    if (matchingItem) {
      matchingItem.quantity += quantity;
    } else {
      cart.push({ id, quantity });
    }

    let cartQuantity = 0;

    cart.forEach((item) => {
      cartQuantity += item.quantity;
    });

    document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;

    console.log(cart);
  });
});
