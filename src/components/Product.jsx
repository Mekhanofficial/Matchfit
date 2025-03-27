import px1 from "../pictures/hue/px1.jpg";
import px2 from "../pictures/hue/px2.jpg";
import px3 from "../pictures/hue/px3.jpg";
import px4 from "../pictures/hue/px4.jpg";
import px5 from "../pictures/hue/px5.webp";
import px6 from "../pictures/hue/px6.webp";
import px7 from "../pictures/hue/px7.webp";
import px8 from "../pictures/hue/px8.webp";


// products.js
export const allProducts = [
  // Men's Accessories - Belts
  {
    id: 1,
    name: "Classic Leather Belt",
    price: 49.99,
    category: "Men",
    subcategory: "Accessories",
    type: "Belts",
    collection: "Minimalism and fantasy",
    image: px1,
    inStock: true,
    colors: ["Black", "Brown"],
    sizes: ["S", "M", "L"],
  },
  {
    id: 2,
    name: "Reversible Dress Belt",
    price: 59.99,
    category: "Men",
    subcategory: "Accessories",
    type: "Belts",
    collection: "Winter 23",
    image: px2,
    inStock: true,
    colors: ["Black/Brown", "Tan/Black"],
    sizes: ["S", "M", "L", "XL"],
  },

  // Men's Accessories - Gifts for him
  {
    id: 3,
    name: "Leather Wallet Set",
    price: 79.99,
    category: "Men",
    subcategory: "Accessories",
    type: "Gifts for him",
    collection: "Ready to wear",
    image: px3,
    inStock: true,
  },

  // Men's Accessories - Jewelry
  {
    id: 4,
    name: "Silver Cufflinks",
    price: 89.99,
    category: "Men",
    subcategory: "Accessories",
    type: "Jewelry",
    collection: "Pre Fall 23",
    image: px4,
    inStock: true,
  },

  // Men's Clothing - Suits
  {
    id: 5,
    name: "Premium Wool Suit",
    price: 399.99,
    category: "Men",
    subcategory: "Clothing",
    type: "Suits",
    collection: "Winter 23",
    image: px5,
    inStock: true,
    sizes: ["38", "40", "42", "44", "46"],
  },

  // Women's Accessories - Eyewear
  {
    id: 6,
    name: "Designer Sunglasses",
    price: 129.99,
    category: "Women",
    subcategory: "Accessories",
    type: "Eyewear",
    collection: "Summer 24",
    image: px6,
    inStock: true,
  },

  // Women's Clothing - Dresses
  {
    id: 7,
    name: "Summer Floral Dress",
    price: 89.99,
    category: "Women",
    subcategory: "Clothing",
    type: "Dresses",
    collection: "Summer 24",
    image: px7,
    inStock: true,
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: 8,
    name: "Summer Floral Dress",
    price: 89.99,
    category: "Women",
    subcategory: "Clothing",
    type: "Dresses",
    collection: "Summer 24",
    image: px8,
    inStock: true,
    sizes: ["XS", "S", "M", "L"],
  },

  // Add more products for all categories...
];

// Filter functions for all categories
export const menProducts = allProducts.filter(product => product.category === "Men");
export const womenProducts = allProducts.filter(product => product.category === "Women");

// Men's subcategories
export const menAccessories = menProducts.filter(product => product.subcategory === "Accessories");
export const menBelts = menAccessories.filter(product => product.type === "Belts");
export const menGiftsForHim = menAccessories.filter(product => product.type === "Gifts for him");
export const menJewelry = menAccessories.filter(product => product.type === "Jewelry");
export const menPocketSquares = menAccessories.filter(product => product.type === "Pocket Squares");
export const menTies = menAccessories.filter(product => product.type === "Ties");
export const menBowTies = menAccessories.filter(product => product.type === "Bow Ties");

export const menClothing = menProducts.filter(product => product.subcategory === "Clothing");
export const menSuits = menClothing.filter(product => product.type === "Suits");
export const menJeans = menClothing.filter(product => product.type === "Jeans");
export const menPants = menClothing.filter(product => product.type === "Pants");
export const menPolos = menClothing.filter(product => product.type === "Polos");
export const menShirts = menClothing.filter(product => product.type === "Shirts");
export const menSweatshirts = menClothing.filter(product => product.type === "Sweatshirts & Hoodies");
export const menTShirts = menClothing.filter(product => product.type === "T-Shirts");
export const menTuxedos = menClothing.filter(product => product.type === "Tuxedos");
export const menWaistcoats = menClothing.filter(product => product.type === "Waistcoats");

// Women's subcategories
export const womenAccessories = womenProducts.filter(product => product.subcategory === "Accessories");
export const womenEyewear = womenAccessories.filter(product => product.type === "Eyewear");
export const womenGifts = womenAccessories.filter(product => product.type === "Gifts");
export const womenHats = womenAccessories.filter(product => product.type === "Hats & Scarves");
export const womenHosiery = womenAccessories.filter(product => product.type === "Hosiery");
export const womenJewellery = womenAccessories.filter(product => product.type === "Jewellery");

export const womenClothing = womenProducts.filter(product => product.subcategory === "Clothing");
export const womenSuits = womenClothing.filter(product => product.type === "Women Suits");
export const womenDresses = womenClothing.filter(product => product.type === "Dresses");
export const womenDenim = womenClothing.filter(product => product.type === "Denim");
export const womenGowns = womenClothing.filter(product => product.type === "Gowns");
export const womenJackets = womenClothing.filter(product => product.type === "Jackets & Coats");
export const womenKnitwear = womenClothing.filter(product => product.type === "Knitwear");
export const womenShirts = womenClothing.filter(product => product.type === "Shirts & Tops");
export const womenSkirts = womenClothing.filter(product => product.type === "Skirts");
export const womenSweatshirts = womenClothing.filter(product => product.type === "T-Shirts & Sweatshirts");
export const womenTailoring = womenClothing.filter(product => product.type === "Tailoring");
export const womenTrousers = womenClothing.filter(product => product.type === "Trousers");

// Collections
export const minimalismFantasy = allProducts.filter(product => product.collection === "Minimalism and fantasy");
export const preFall23 = allProducts.filter(product => product.collection === "Pre Fall 23");
export const preSpring23 = allProducts.filter(product => product.collection === "Pre-Spring 23");
export const preSpring24 = allProducts.filter(product => product.collection === "Pre-Spring 24");
export const readyToWear = allProducts.filter(product => product.collection === "Ready to wear");
export const summer23 = allProducts.filter(product => product.collection === "Summer 23");
export const summer24 = allProducts.filter(product => product.collection === "Summer 24");
export const winter22 = allProducts.filter(product => product.collection === "Winter 22");
export const winter23 = allProducts.filter(product => product.collection === "Winter 23");