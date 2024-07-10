const TEMPLATE = {
  [crypto.randomUUID()]: {
    path: "/",
    type: "TITLE",
    prev: "Home - Dewy Cases",
    new: "Dewy Cases - Stylish Phone Cases",
  },
  [crypto.randomUUID()]: {
    path: "/",
    type: "DESCRIPTION",
    prev: null,
    new: "Protect your iPhone in style with Dewy Cases. Shop the latest Summer '24 Fruit Collection for premium design and durability.",
  },
  [crypto.randomUUID()]: {
    path: "/",
    type: "KEYWORDS",
    prev: "phones, cases, accessories",
    new: "phone cases, iphone cases, phone accessories, fruit cases, summer phone cases, stylish phone cases",
  },
  [crypto.randomUUID()]: {
    path: "/collections/summer-collection",
    type: "TITLE",
    prev: "Summer Collection - Dewy Cases",
    new: "Summer '24",
  },
  [crypto.randomUUID()]: {
    path: "/collections/summer-collection",
    type: "DESCRIPTION",
    prev: "Shop our Summer Collection.",
    new: "Discover the vibrant Summer '24 Collection at Dewy Cases. Bright, bold, and beautifully designed phone cases.",
  },
  [crypto.randomUUID()]: {
    path: "/collections/summer-collection",
    type: "KEYWORDS",
    prev: null,
    new: "summer phone cases, summer collection, stylish summer cases, summer '24 cases",
  },
  [crypto.randomUUID()]: {
    path: "/products/fruit-case",
    type: "TITLE",
    prev: "Fruit Case",
    new: "Fruit Phone Case - Dewy Cases",
  },
  [crypto.randomUUID()]: {
    path: "/products/fruit-case",
    type: "DESCRIPTION",
    prev: null,
    new: "Get fruity with Dewy Cases. Our Fruit Phone Case offers a splash of color and top-notch protection for your device.",
  },
  [crypto.randomUUID()]: {
    path: "/products/fruit-case",
    type: "KEYWORDS",
    prev: "fruit, case, phone",
    new: "fruit phone case, colorful phone cases, summer fruit cases, iphone fruit cases",
  },
  [crypto.randomUUID()]: {
    path: "/about-us",
    type: "TITLE",
    prev: null,
    new: "About Dewy Cases - Our Story",
  },
  [crypto.randomUUID()]: {
    path: "/about-us",
    type: "DESCRIPTION",
    prev: "Learn more about us.",
    new: "Learn more about Dewy Cases. From our beginnings to our latest collections, discover what makes us unique.",
  },
  [crypto.randomUUID()]: {
    path: "/about-us",
    type: "KEYWORDS",
    prev: "about, dewy cases, story",
    new: "about Dewy Cases, our story, Dewy Cases journey, phone case brand",
  },
};

var data = {
  optimizations: JSON.parse(JSON.stringify(TEMPLATE)),
};

const resetData = () => {
  data.optimizations = JSON.parse(JSON.stringify(TEMPLATE));
};

module.exports = {
  data,
  resetData,
};
