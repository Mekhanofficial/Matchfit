import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "../AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faTimes,
  faChevronDown,
  faShoppingBag,
  faBars,
  faArrowLeft,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
// Import all product arrays
import {
  allProducts,
  menProducts,
  womenProducts,
  menAccessories,
  menBelts,
  menGiftsForHim,
  menJewelry,
  menPocketSquares,
  menTies,
  menBowTies,
  menClothing,
  menSuits,
  menJeans,
  menPants,
  menPolos,
  menShirts,
  menSweatshirts,
  menTShirts,
  menTuxedos,
  menWaistcoats,
  womenAccessories,
  womenEyewear,
  womenGifts,
  womenHats,
  womenHosiery,
  womenJewellery,
  womenClothing,
  womenSuits,
  womenDresses,
  womenDenim,
  womenGowns,
  womenJackets,
  womenKnitwear,
  womenShirts,
  womenSkirts,
  womenSweatshirts,
  womenTailoring,
  womenTrousers,
  minimalismFantasy,
  preFall23,
  preSpring23,
  preSpring24,
  readyToWear,
  summer23,
  summer24,
  winter22,
  winter23,
} from "./Product";
import pd62 from "../pictures/hue/pd62.jpg";
import { motion } from "framer-motion";

const ShopHeroSection = () => {
  const { addToCart, addToWishlist, wishlist } = useAppContext();
  const location = useLocation();
  const navigate = useNavigate();
  const [openDropdowns, setOpenDropdowns] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [activeFilter, setActiveFilter] = useState("All Products");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [searchQuery, setSearchQuery] = useState("");
  const [itemsToShow, setItemsToShow] = useState(8);
  const [showCartAlert, setShowCartAlert] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [searchInput, setSearchInput] = useState("");

  const categories = {
    "Product Type": {
      "All Products": { products: allProducts, name: "All Products" },
      Men: {
        products: menProducts,
        name: "Men",
        subcategories: {
          Accessories: {
            products: menAccessories,
            name: "Men's Accessories",
            subcategories: {
              Belts: { products: menBelts, name: "Men's Belts" },
              "Gifts for him": {
                products: menGiftsForHim,
                name: "Gifts for Him",
              },
              Jewelry: { products: menJewelry, name: "Men's Jewelry" },
              "Pocket Squares": {
                products: menPocketSquares,
                name: "Pocket Squares",
              },
              Ties: { products: menTies, name: "Men's Ties" },
              "Bow Ties": { products: menBowTies, name: "Bow Ties" },
            },
          },
          Clothing: {
            products: menClothing,
            name: "Men's Clothing",
            subcategories: {
              Suits: { products: menSuits, name: "Men's Suits" },
              Jeans: { products: menJeans, name: "Men's Jeans" },
              Pants: { products: menPants, name: "Men's Pants" },
              Polos: { products: menPolos, name: "Men's Polos" },
              Shirts: { products: menShirts, name: "Men's Shirts" },
              "Sweatshirts & Hoodies": {
                products: menSweatshirts,
                name: "Men's Sweatshirts",
              },
              "T-Shirts": { products: menTShirts, name: "Men's T-Shirts" },
              Tuxedos: { products: menTuxedos, name: "Men's Tuxedos" },
              Waistcoats: { products: menWaistcoats, name: "Waistcoats" },
            },
          },
        },
      },
      Women: {
        products: womenProducts,
        name: "Women",
        subcategories: {
          Accessories: {
            products: womenAccessories,
            name: "Women's Accessories",
            subcategories: {
              Eyewear: { products: womenEyewear, name: "Women's Eyewear" },
              Gifts: { products: womenGifts, name: "Women's Gifts" },
              "Hats & Scarves": { products: womenHats, name: "Hats & Scarves" },
              Hosiery: { products: womenHosiery, name: "Hosiery" },
              Jewellery: { products: womenJewellery, name: "Jewellery" },
            },
          },
          Clothing: {
            products: womenClothing,
            name: "Women's Clothing",
            subcategories: {
              Suits: { products: womenSuits, name: "Women's Suits" },
              Dresses: { products: womenDresses, name: "Dresses" },
              Denim: { products: womenDenim, name: "Women's Denim" },
              Gowns: { products: womenGowns, name: "Gowns" },
              "Jackets & Coats": {
                products: womenJackets,
                name: "Jackets & Coats",
              },
              Knitwear: { products: womenKnitwear, name: "Knitwear" },
              "Shirts & Tops": { products: womenShirts, name: "Shirts & Tops" },
              Skirts: { products: womenSkirts, name: "Skirts" },
              "T-Shirts & Sweatshirts": {
                products: womenSweatshirts,
                name: "T-Shirts & Sweatshirts",
              },
              Tailoring: { products: womenTailoring, name: "Tailoring" },
              Trousers: { products: womenTrousers, name: "Trousers" },
            },
          },
        },
      },
    },
    Collections: {
      "Minimalism and fantasy": {
        products: minimalismFantasy,
        name: "Minimalism & Fantasy",
      },
      "Pre Fall 23": { products: preFall23, name: "Pre Fall 23" },
      "Pre-Spring 23": { products: preSpring23, name: "Pre-Spring 23" },
      "Pre-Spring 24": { products: preSpring24, name: "Pre-Spring 24" },
      "Ready to wear": { products: readyToWear, name: "Ready to Wear" },
      "Summer 23": { products: summer23, name: "Summer 23" },
      "Summer 24": { products: summer24, name: "Summer 24" },
      "Winter 22": { products: winter22, name: "Winter 22" },
      "Winter 23": { products: winter23, name: "Winter 23" },
    },
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setShowSidebar(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const search = searchParams.get("search");
    if (search) {
      setSearchQuery(search);
      setSearchInput(search);
      const results = allProducts.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredProducts(results);
      setActiveFilter(`Search: "${search}"`);
    }
  }, [location.search]);

  useEffect(() => {
    setItemsToShow(8);
  }, [activeFilter, priceRange, location.search]);

  useEffect(() => {
    if (showCartAlert) {
      const timer = setTimeout(() => setShowCartAlert(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showCartAlert]);

  const toggleDropdown = (dropdownId) => {
    setOpenDropdowns((prev) =>
      prev.includes(dropdownId)
        ? prev.filter((id) => id !== dropdownId)
        : [...prev, dropdownId]
    );
  };

  const handleFilter = (products, filterName) => {
    const filtered = products.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    setFilteredProducts(filtered);
    setActiveFilter(filterName);
    if (isMobile) setShowSidebar(false);
  };

  const clearFilters = () => {
    setFilteredProducts(allProducts);
    setActiveFilter("All Products");
    setOpenDropdowns([]);
    setPriceRange([0, 500]);
    setSearchQuery("");
    setSearchInput("");
    navigate("/Shop");
    if (isMobile) setShowSidebar(false);
  };

  const handlePriceChange = (min, max) => {
    setPriceRange([min, max]);
    if (activeFilter !== "All Products") {
      const currentFilter = findCurrentFilter(activeFilter);
      if (currentFilter) {
        const filtered = currentFilter.products.filter(
          (product) => product.price >= min && product.price <= max
        );
        setFilteredProducts(filtered);
      }
    } else {
      const filtered = allProducts.filter(
        (product) => product.price >= min && product.price <= max
      );
      setFilteredProducts(filtered);
    }
  };

  const findCurrentFilter = (filterName) => {
    for (const [category, items] of Object.entries(categories)) {
      for (const [itemName, itemData] of Object.entries(items)) {
        if (itemData.name === filterName) return itemData;
        if (itemData.subcategories) {
          for (const [subName, subData] of Object.entries(
            itemData.subcategories
          )) {
            if (subData.name === filterName) return subData;
          }
        }
      }
    }
    return null;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      navigate(`/Shop?search=${encodeURIComponent(searchInput)}`);
    }
  };

  const ProductCard = ({ product }) => {
    const isWishlisted = wishlist.some((item) => item.id === product.id);

    return (
      <motion.div
        className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
        onClick={() => navigate(`/product/${product.id}`)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="relative aspect-square bg-gray-50">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          <button
            onClick={(e) => {
              e.stopPropagation();
              addToWishlist(product);
            }}
            className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-all duration-300 hover:scale-110"
            aria-label="Add to wishlist"
          >
            <FontAwesomeIcon
              icon={faHeart}
              className={`text-sm ${
                isWishlisted ? "text-red-500" : "text-gray-600"
              }`}
            />
          </button>
        </div>

        <div className="p-5 space-y-3">
          <h3 className="font-semibold text-gray-900 text-lg leading-tight line-clamp-2">
            {product.name}
          </h3>
          <p className="text-gray-700 font-bold text-xl">
            ${product.price.toFixed(2)}
          </p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
              setShowCartAlert(true);
            }}
            className="w-full mt-2 bg-gradient-to-br from-gray-900 to-gray-800 text-white py-3.5 rounded-xl hover:opacity-95 transition-all duration-300 text-sm font-semibold tracking-wide shadow-md hover:shadow-lg"
          >
            Add to Cart
          </button>
        </div>
      </motion.div>
    );
  };

  const renderCategoryItems = (items, parentId = "") => {
    return Object.entries(items).map(([itemName, itemData]) => {
      const itemId = `${parentId}-${itemName}`
        .toLowerCase()
        .replace(/\s+/g, "-");

      return (
        <div key={itemId} className="mb-1">
          <div
            className={`flex justify-between items-center py-2 px-3 rounded-lg cursor-pointer transition-colors ${
              activeFilter === itemData.name
                ? "bg-gray-800 text-white"
                : "hover:bg-gray-800/50 text-gray-300"
            }`}
            onClick={() => {
              if (itemData.products) {
                handleFilter(itemData.products, itemData.name);
              }
              if (itemData.subcategories) {
                toggleDropdown(itemId);
              }
            }}
          >
            <span className="text-sm">{itemName}</span>
            {itemData.subcategories && (
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`text-xs transition-transform ${
                  openDropdowns.includes(itemId) ? "rotate-180" : ""
                }`}
              />
            )}
          </div>

          {itemData.subcategories && openDropdowns.includes(itemId) && (
            <div className="pl-4 mt-1 space-y-1">
              {renderCategoryItems(itemData.subcategories, itemId)}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <>
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-0" />
        <img
          src={pd62}
          alt="Fashion collection"
          className="absolute inset-0 w-full h-full object-cover z-[-1]"
          loading="eager"
        />

        <motion.div
          className="relative z-10 px-4 h-full flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 font-serif tracking-tight">
            Curated Collections
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-8">
            Discover timeless pieces crafted for the modern individual
          </p>
          <form onSubmit={handleSearch} className="w-full max-w-md relative">
            <input
              type="text"
              placeholder="Search our collection..."
              className="w-full px-5 py-3 pr-12 rounded-full bg-white/90 backdrop-blur-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900"
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
          <p className="text-teal-400 text-lg md:text-xl mt-4">
            <Link to="/" className="hover:text-teal-300 transition">
              Home
            </Link>{" "}
            / Shop
          </p>
        </motion.div>
      </div>

      <div className="relative min-h-screen bg-gray-50 flex flex-col">

        {/* Floating Wishlist Button */}
        <motion.button
          onClick={() => navigate("/wishlist")}
          className="fixed bottom-6 right-6 bg-gray-900 text-white p-4 rounded-full shadow-xl z-40 flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FontAwesomeIcon icon={faHeart} />
          <span className="bg-red-500 text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {wishlist.length}
          </span>
        </motion.button>

        {/* Mobile Filter Toggle Button */}
        {isMobile && (
          <motion.button
            onClick={() => setShowSidebar(!showSidebar)}
            className="fixed top-24 left-4 z-30 bg-gray-900 text-white p-3 rounded-full shadow-lg md:hidden"
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon icon={showSidebar ? faArrowLeft : faBars} />
          </motion.button>
        )}

        <div className="flex-1 flex flex-col md:flex-row">
          {/* Sidebar Filters */}
          <div
            className={`w-full md:w-80 bg-gradient-to-b from-gray-900 to-gray-800 p-6 border-r border-gray-700 md:h-[calc(100vh-80px)] md:sticky md:top-20 md:self-start overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 transition-all duration-300 z-20 ${
              isMobile
                ? `fixed top-0 left-0 h-full transform ${
                    showSidebar ? "translate-x-0" : "-translate-x-full"
                  }`
                : ""
            }`}
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 font-serif tracking-tight">
                Matchfit Wardrobe
              </h2>
              <button
                className="text-gray-300 hover:text-white text-sm font-medium flex items-center gap-2 transition-colors duration-300"
                onClick={clearFilters}
              >
                <FontAwesomeIcon icon={faTimes} />
                Clear Filters
              </button>
            </div>

            <div className="mb-8">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">
                Price Range
              </h3>
              <div className="py-2 px-3 bg-gray-800/50 rounded-xl backdrop-blur-sm">
                <div className="flex justify-between mb-3">
                  <span className="text-sm text-gray-300">
                    ${priceRange[0]}
                  </span>
                  <span className="text-sm text-gray-300">
                    ${priceRange[1]}
                  </span>
                </div>
                <div className="relative h-2">
                  <div className="absolute h-full w-full bg-gray-700 rounded-full" />
                  <div
                    className="absolute h-full bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"
                    style={{
                      left: `${(priceRange[0] / 500) * 100}%`,
                      right: `${100 - (priceRange[1] / 500) * 100}%`,
                    }}
                  />
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={priceRange[0]}
                    onChange={(e) =>
                      handlePriceChange(Number(e.target.value), priceRange[1])
                    }
                    className="absolute w-full h-2 opacity-0 cursor-pointer"
                  />
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={priceRange[1]}
                    onChange={(e) =>
                      handlePriceChange(priceRange[0], Number(e.target.value))
                    }
                    className="absolute w-full h-2 opacity-0 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {Object.entries(categories).map(([category, items]) => {
              const categoryId = category.toLowerCase().replace(/\s+/g, "-");
              return (
                <div key={categoryId} className="mb-6">
                  <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
                    {category}
                  </h3>
                  <div className="space-y-1">
                    {renderCategoryItems(items, categoryId)}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Overlay for mobile sidebar */}
          {isMobile && showSidebar && (
            <div
              className="fixed inset-0 bg-black/50 z-10 md:hidden"
              onClick={() => setShowSidebar(false)}
            />
          )}

          <div className="flex-1 p-6 md:p-8">
            {searchQuery && (
              <div className="mb-6">
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSearchInput("");
                    navigate("/Shop");
                    setFilteredProducts(allProducts);
                    setActiveFilter("All Products");
                  }}
                  className="text-gray-600 hover:text-gray-900 flex items-center gap-2 transition-colors"
                >
                  <FontAwesomeIcon icon={faTimes} />
                  Clear search: "{searchQuery}"
                </button>
              </div>
            )}

            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif tracking-tight">
                {activeFilter}
                <span className="ml-3 text-gray-500 font-normal text-xl md:text-2xl">
                  ({filteredProducts.length} items)
                </span>
              </h2>
            </div>

            {filteredProducts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredProducts.slice(0, itemsToShow).map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {itemsToShow < filteredProducts.length && (
                  <div className="flex justify-center mt-10">
                    <motion.button
                      onClick={() => setItemsToShow(itemsToShow + 8)}
                      className="px-6 py-3 text-sm font-medium bg-gray-900 text-white rounded-xl shadow hover:opacity-90 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Load More
                    </motion.button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-20">
                <h3 className="text-2xl font-medium text-gray-500 mb-4">
                  No products found
                </h3>
                <p className="text-gray-400 mb-6">
                  We couldn't find any items matching your criteria
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopHeroSection;
