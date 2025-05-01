import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppContext } from "../AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShoppingBag,
  faChevronLeft,
  faChevronRight,
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { allProducts } from "../components/Product";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, addToWishlist, wishlist } = useAppContext();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const product = allProducts.find((item) => item.id.toString() === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-10 text-center text-gray-700">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <button
          onClick={() => navigate("/shop")}
          className="mt-4 px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          Go Back to Shop
        </button>
      </div>
    );
  }

  const isWishlisted = wishlist.some((item) => item.id === product.id);
  // Create an array of images - use product.image as primary and any additional images
  const images = [product.image, ...(product.additionalImages || [])];
  const hasMultipleImages = images.length > 1;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleAddToCart = () => {
    const productToAdd = {
      ...product,
      selectedSize,
      selectedColor,
    };
    addToCart(productToAdd);
  };

  const renderRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FontAwesomeIcon
          icon={faStar}
          key={`full-${i}`}
          className="text-yellow-400"
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <FontAwesomeIcon
          icon={faStarHalfAlt}
          key="half"
          className="text-yellow-400"
        />
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FontAwesomeIcon
          icon={faStar}
          key={`empty-${i}`}
          className="text-gray-300"
        />
      );
    }

    return stars;
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 lg:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-20">
      {/* Product Images */}
      <div className="space-y-4">
        <div className="relative bg-white rounded-xl shadow-md overflow-hidden aspect-square">
          <img
            src={images[currentImageIndex]}
            alt={`${product.name} - View ${currentImageIndex + 1}`}
            className="w-full h-full object-contain object-center"
            loading="eager"
          />

          {hasMultipleImages && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white transition-all"
                aria-label="Previous image"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white transition-all"
                aria-label="Next image"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </>
          )}
        </div>

        {hasMultipleImages && (
          <div className="grid grid-cols-4 gap-2">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                  currentImageIndex === index
                    ? "border-gray-900"
                    : "border-transparent hover:border-gray-300"
                }`}
              >
                <img
                  src={img}
                  alt={`${product.name} - view ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="flex flex-col">
        <div className="space-y-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              {product.name}
            </h1>
            <div className="flex items-center mt-1">
              {product.rating && (
                <div className="flex items-center mr-3">
                  {renderRatingStars(product.rating)}
                  <span className="ml-1 text-sm text-gray-600">
                    ({product.reviewCount || 0})
                  </span>
                </div>
              )}
              {product.collection && (
                <span className="text-sm text-gray-500">
                  {product.collection} collection
                </span>
              )}
            </div>
            <p className="text-xl md:text-2xl font-semibold text-gray-800 mt-2">
              ${product.price.toFixed(2)}
              {product.originalPrice && (
                <span className="ml-2 text-sm text-gray-500 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </p>
          </div>

          {product.colors && (
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-2">Color</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(color)}
                    className={`px-3 py-1 text-sm rounded-full border ${
                      selectedColor === color
                        ? "border-gray-900 bg-gray-100"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {product.sizes && (
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-2">Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-10 flex items-center justify-center text-sm rounded border ${
                      selectedSize === size
                        ? "border-gray-900 bg-gray-100"
                        : "border-gray-300 hover:border-gray-400"
                    } ${
                      !product.inStock ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    disabled={!product.inStock}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="border-t border-gray-200 pt-4 mt-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Description
            </h3>
            <p className="text-gray-600">
              {product.description ||
                "This premium product combines timeless elegance with modern craftsmanship. Meticulously designed for both style and comfort, it's perfect for any occasion."}
            </p>
          </div>

          {product.details && (
            <div className="border-t border-gray-200 pt-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Product Details
              </h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                {product.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          )}

          {product.materials && (
            <div className="border-t border-gray-200 pt-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Materials & Care
              </h3>
              <p className="text-gray-600">
                <span className="font-medium">Materials:</span>{" "}
                {product.materials}
              </p>
              {product.care && (
                <p className="text-gray-600 mt-1">
                  <span className="font-medium">Care Instructions:</span>{" "}
                  {product.care}
                </p>
              )}
            </div>
          )}
        </div>

        <div className="mt-8 space-y-4">
          <div className="flex gap-4">
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock || (product.sizes && !selectedSize)}
              className={`flex-1 px-6 py-3 rounded-xl font-semibold flex items-center justify-center ${
                !product.inStock || (product.sizes && !selectedSize)
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-gray-900 text-white hover:bg-gray-800"
              }`}
            >
              <FontAwesomeIcon icon={faShoppingBag} className="mr-2" />
              {!product.inStock ? "Out of Stock" : "Add to Cart"}
            </button>
            <button
              onClick={() => addToWishlist(product)}
              className={`px-6 py-3 rounded-xl font-semibold border flex items-center ${
                isWishlisted
                  ? "border-red-500 text-red-500 bg-red-50"
                  : "border-gray-300 text-gray-700 hover:border-gray-500"
              }`}
            >
              <FontAwesomeIcon icon={faHeart} className="mr-2" />
              {isWishlisted ? "Wishlisted" : "Wishlist"}
            </button>
          </div>

          <div className="text-sm text-gray-500">
            {product.inStock ? (
              <p className="text-green-600">In stock and ready to ship</p>
            ) : (
              <p className="text-red-500">Currently out of stock</p>
            )}
          </div>

          <button
            onClick={() => navigate("/shop")}
            className="w-full text-center text-gray-600 hover:text-gray-900 underline transition-colors text-sm"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
