export function getProduct(productId) {
  let matchingProduct;

  allProducts.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  return matchingProduct;
}

class Product {
  id;
  img;
  name;
  price;

  constructor(productDetails) {
    this.id = productDetails.id;
    this.img = productDetails.img;
    this.name = productDetails.name;
    this.price = productDetails.price;
  }

  extraInfoHTML() {
    return "";
  }
}

class Curtain extends Product {
  sizeChart;

  constructor(productDetails) {
    super(productDetails);

    // this.sizeChart = productDetails.sizeChart
  }

  extraInfoHTML() {
    // super.extraInfoHTML();, "if i want this method to inherit the parent method(from products above)"
    return `<a href="this.sizeChart" target"-blank" class="size-chart">Size Chart</a>`;
  }
}


export const allProducts = [
  {
    id: "PROD-547281",
    name: "Baretta Outdoor Sofa Set",
    price: 750095,
    img: "../product-img/Baretta-outdoor-sofa-set.jpg",
  },
  {
    id: "PROD-839472",
    name: "Brownie Dining Set",
    price: 1050734,
    img: "../product-img/Brownie-Dining-set.jpg",
  },
  {
    id: "PROD-193856",
    name: "Salda Manager Chair",
    price: 50296,
    img: "../product-img/salda-manager-chair.jpg",
  },
  {
    id: "PROD-674920",
    name: "Triple Desk Drawer",
    price: 100600,
    img: "../product-img/Desk-Drawer.jpg",
  },
  {
    id: "PROD-319475",
    name: "Armin Office Table",
    price: 281000,
    img: "../product-img/Armin-office-table.jpg",
  },
  {
    id: "PROD-502738",
    name: "Alacati Plus Outdoor Swing",
    price: 600000,
    img: "../product-img/Alacati-Plus-Outdoor-Swing.jpg",
  },
  {
    id: "PROD-285614",
    name: "Dreams Drapery",
    price: 826700,
    img: "../product-img/Dreams-Drapery-2.jpg",

    type: "fabric",
    // sizeChart:"..charts/size-chart.jpg"
  },
  {
    id: "PROD-761493",
    name: "Duetto Sofa Set Triple",
    price: 1052250,
    img: "../product-img/Duetto-Sofa-Set-Triple.jpg",
  },
  {
    id: "PROD-948327",
    name: "Flat Office Set Console",
    price: 750100,
    img: "../product-img/Flat-Office-Set-Console.jpg",
  },
  {
    id: "PROD-687204",
    name: "Garda Outdoor Set",
    price: 900450,
    img: "../product-img/Garda-Outdoor-Set.jpg",
  },
  {
    id: "PROD-125968",
    name: "Gloria Center Table",
    price: 811750,
    img: "../product-img/Gloria-Need-Center-Table.jpg",
  },
  {
    id: "PROD-000001",
    name: "Grande Office Chair",
    price: 710500,
    img: "../product-img/grande-plus-office-manager-chair.jpg",
  },
  {
    id: "PROD-000002",
    name: "Icon Center Table",
    price: 977100,
    img: "../product-img/Icon-Center-Table.jpg",
  },
  {
    id: "PROD-000003",
    name: "Turkish Royal Drapes",
    price: 3000000,
    img: "../product-img/ip-perde-modeli-drapes.jpg",
    type: "fabric",
    // sizeChart:"..charts/size-chart.jpg"
  },
  {
    id: "PROD-000004",
    name: "Legold Meeting Table",
    price: 900800,
    img: "../product-img/Legold-Meeting-Table.jpg",
  },
  {
    id: "PROD-000005",
    name: "Loft Sofa",
    price: 900000,
    img: "../product-img/Loft-sofa.jpg",
  },
  {
    id: "PROD-000006",
    name: "Magnum Sofa Set",
    price: 690470,
    img: "../product-img/Magnum-Sofa-Set.jpg",
  },
  {
    id: "PROD-000007",
    name: "Meltem Swing Chair",
    price: 800000,
    img: "../product-img/Meltem-Swing-Chair.jpg",
  },
  {
    id: "PROD-000008",
    name: "Dual Function Center Table",
    price: 600700,
    img: "../product-img/Middle-41-Center-Table-Black-Gold.jpg",
  },
  {
    id: "PROD-000009",
    name: "Mustang Office Table",
    price: 511500,
    img: "../product-img/mustang-office-table.jpg",
  },
  {
    id: "PROD-000010",
    name: "Nove Book Shelf",
    price: 720000,
    img: "../product-img/Nove-Book-Shelve.jpg",
  },
  {
    id: "PROD-000011",
    name: "Pednik Dining Set",
    price: 2250800,
    img: "../product-img/Pendik-Dining-Set.jpg",
  },
  {
    id: "PROD-000012",
    name: "Tomford Dining Console Mirror",
    price: 1500200,
    img: "../product-img/Tomford-Dining-Console-Mirror.jpg",
  },
  {
    id: "PROD-000013",
    name: "Console TV Stand",
    price: 1800800,
    img: "../product-img/TV-Stands.jpg",
  },
  {
    id: "PROD-000014",
    name: "Urla Bookshelf",
    price: 1250000,
    img: "../product-img/Urla-Bookshelf.jpg",
  },
  {
    id: "PROD-000015",
    name: "Velvet Vista curtain",
    price: 2400200,
    img: "../product-img/Velvet-Vista-curtain.jpg",
    type: "fabric",
    // sizeChart:"..charts/size-chart.jpg"
  },
  {
    id: "PROD-000016",
    name: "Vera Bedroom Set Bedbase",
    price: 4500200,
    img: "../product-img/Vera-Bedroom-Set-Bedbase.jpg",
  },
  {
    id: "PROD-000017",
    name: "Wooden TV Unit",
    price: 1100400,
    img: "../product-img/Wooden-TV-Unit.jpg",
  },
].map((productDetails) => {
  if (productDetails.type === "fabric") {
    return new Curtain(productDetails);
  }
  return new Product(productDetails);
});
