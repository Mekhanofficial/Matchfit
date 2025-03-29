// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

// const ProductCard = ({ product }) => {
//   const [isWishlisted, setIsWishlisted] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);

//   // Handle color selection if product has colors
//   const [selectedColor, setSelectedColor] = useState(
//     product.colors ? product.colors[0] : null
//   );

//   // Handle size selection if product has sizes
//   const [selectedSize, setSelectedSize] = useState(
//     product.sizes ? product.sizes[0] : null
//   );

//   const handleAddToCart = () => {
//     // Add to cart logic would go here
//     console.log("Added to cart:", {
//       id: product.id,
//       name: product.name,
//       price: product.price,
//       color: selectedColor,
//       size: selectedSize,
//     });
//   };

//   const toggleWishlist = () => {
//     setIsWishlisted(!isWishlisted);
//     // Wishlist logic would go here
//     console.log(
//       isWishlisted ? "Removed from wishlist" : "Added to wishlist",
//       product.id
//     );
//   };

//   return (
//     <div
//       className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Wishlist button */}
//       <button
//         onClick={toggleWishlist}
//         className={`absolute top-3 right-3 z-10 p-2 rounded-full transition-colors ${
//           isWishlisted
//             ? "text-red-500 bg-white/90"
//             : "text-gray-400 bg-white/80 hover:text-red-500"
//         }`}
//       >
//         <FontAwesomeIcon icon={faHeart} />
//       </button>

//       {/* Product Image */}
//       <Link to={`/product/${product.id}`} className="block relative">
//         <div className="aspect-square bg-gray-100 overflow-hidden">
//           <img
//             src={product.image}
//             alt={product.name}
//             className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//           />
//         </div>
//       </Link>

//       {/* Product Info */}
//       <div className="p-4">
//         {/* Category/Collection */}
//         <div className="flex justify-between items-start mb-1">
//           <span className="text-xs text-gray-500 uppercase">
//             {product.collection}
//           </span>
//           {product.inStock ? (
//             <span className="text-xs text-green-600">In Stock</span>
//           ) : (
//             <span className="text-xs text-red-600">Out of Stock</span>
//           )}
//         </div>

//         {/* Product Name */}
//         <Link to={`/product/${product.id}`}>
//           <h3 className="font-medium text-gray-900 hover:text-[#16bb7c] transition-colors line-clamp-2 h-12">
//             {product.name}
//           </h3>
//         </Link>

//         {/* Price */}
//         <p className="mt-1 text-gray-900 font-semibold">
//           ${product.price.toFixed(2)}
//         </p>

//         {/* Color Selection (if available) */}
//         {product.colors && (
//           <div className="mt-2">
//             <p className="text-xs text-gray-500 mb-1">Colors:</p>
//             <div className="flex space-x-2">
//               {product.colors.map((color) => (
//                 <button
//                   key={color}
//                   onClick={() => setSelectedColor(color)}
//                   className={`w-5 h-5 rounded-full border ${
//                     selectedColor === color
//                       ? "border-gray-800 ring-2 ring-offset-1 ring-gray-400"
//                       : "border-gray-300"
//                   }`}
//                   style={{
//                     backgroundColor:
//                       color === "Black/Brown"
//                         ? "linear-gradient(to right, #000 50%, #964B00 50%)"
//                         : color === "Tan/Black"
//                         ? "linear-gradient(to right, #D2B48C 50%, #000 50%)"
//                         : color.toLowerCase(),
//                   }}
//                   title={color}
//                 >
//                   {color.includes("/") && (
//                     <div
//                       className="w-full h-full rounded-full"
//                       style={{
//                         background: `linear-gradient(to right, ${
//                           color.split("/")[0] === "Black"
//                             ? "#000"
//                             : color.split("/")[0] === "Tan"
//                             ? "#D2B48C"
//                             : "#964B00"
//                         } 50%, ${
//                           color.split("/")[1] === "Black"
//                             ? "#000"
//                             : color.split("/")[1] === "Tan"
//                             ? "#D2B48C"
//                             : "#964B00"
//                         } 50%)`,
//                       }}
//                     />
//                   )}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Size Selection (if available) */}
//         {product.sizes && (
//           <div className="mt-2">
//             <p className="text-xs text-gray-500 mb-1">Sizes:</p>
//             <div className="flex flex-wrap gap-2">
//               {product.sizes.map((size) => (
//                 <button
//                   key={size}
//                   onClick={() => setSelectedSize(size)}
//                   className={`px-2 py-1 text-xs border rounded ${
//                     selectedSize === size
//                       ? "border-gray-800 bg-gray-100"
//                       : "border-gray-300 hover:bg-gray-50"
//                   }`}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Add to Cart Button */}
//         <button
//           onClick={handleAddToCart}
//           className="mt-3 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors duration-200 text-sm font-medium flex items-center justify-center gap-2"
//         >
//           <FontAwesomeIcon icon={faShoppingCart} />
//           Add to Cart
//         </button>

//         {/* Quick View (shown on hover) */}
//         {isHovered && (
//           <Link
//             to={`/product/${product.id}`}
//             className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center"
//           >
//             <span className="bg-white text-black px-4 py-2 rounded font-medium text-sm opacity-0 hover:opacity-100 transition-opacity">
//               Quick View
//             </span>
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
