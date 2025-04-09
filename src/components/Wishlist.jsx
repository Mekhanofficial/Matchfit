import { useNavigate } from "react-router-dom";
import { useAppContext } from "../AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCartPlus,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Wishlist = () => {
  const { wishlist, removeFromWishlist, addToCart } = useAppContext();
  const navigate = useNavigate();

  const handleMoveToCart = (product) => {
    addToCart(product);
    removeFromWishlist(product.id);
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Your Wishlist</h1>
          <button
            onClick={() => navigate(-1)}
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            ← Continue Shopping
          </button>
        </div>

        {wishlist.length === 0 ? (
          <div className="text-center py-12">
            <FontAwesomeIcon
              icon={faHeart}
              className="text-4xl text-red-400 mb-4"
            />
            <p className="text-xl text-gray-600 mb-4">Your wishlist is empty</p>
            <button
              onClick={() => navigate("/shop")}
              className="bg-[#16bb7c] text-white px-6 py-2 rounded hover:bg-[#119a6a] transition-colors"
            >
              Explore Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlist.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-2 right-2 flex space-x-2">
                    <button
                      onClick={() => removeFromWishlist(product.id)}
                      className="p-2 bg-white rounded-full shadow hover:bg-gray-100"
                      aria-label="Remove from wishlist"
                    >
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="text-red-500"
                      />
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-lg font-bold text-gray-900 mt-2">
                    ${product.price.toFixed(2)}
                  </p>
                  <div className="mt-4 flex space-x-2">
                    <button
                      onClick={() => handleMoveToCart(product)}
                      className="flex-1 bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors flex items-center justify-center"
                    >
                      <FontAwesomeIcon icon={faCartPlus} className="mr-2" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
