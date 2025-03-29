import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
} from "../components/Product";
import HeaderPage from "../components/Header";

const ShopSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [openDropdowns, setOpenDropdowns] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [activeFilter, setActiveFilter] = useState("All Products");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [searchQuery, setSearchQuery] = useState("");

  // Handle search from URL
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const search = searchParams.get("search");

    if (search) {
      setSearchQuery(search);
      const results = allProducts.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredProducts(results);
      setActiveFilter(`Search: "${search}"`);
    }
  }, [location.search]);

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
  };

  const clearFilters = () => {
    setFilteredProducts(allProducts);
    setActiveFilter("All Products");
    setOpenDropdowns([]);
    setPriceRange([0, 500]);
  };

  const handlePriceChange = (min, max) => {
    setPriceRange([min, max]);
    // Reapply current filter with new price range
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

  // Helper function to find the current filter object
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

  const isDropdownOpen = (dropdownId) => {
    return openDropdowns.includes(dropdownId);
  };

    const handleSearch = (query) => {
      if (query.trim()) {
        const results = allProducts.filter((product) =>
          product.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(results);
        setActiveFilter(`Search: "${query}"`);
      } else {
        setFilteredProducts(allProducts);
        setActiveFilter("All Products");
      }
    };

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
              "Women Suits": { products: womenSuits, name: "Women's Suits" },
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

  const renderCategoryItems = (items, parentId = "") => {
    return Object.entries(items).map(([itemName, itemData]) => {
      const itemId = `${parentId}-${itemName}`
        .replace(/\s+/g, "-")
        .toLowerCase();

      // Skip if this is a data property rather than a category
      if (["products", "name", "subcategories"].includes(itemName)) return null;

      // For simple items without subcategories (like in Collections)
      if (itemData.products && !itemData.subcategories) {
        return (
          <div
            key={itemId}
            className={`py-2 px-3 rounded transition-colors ${
              activeFilter === itemData.name
                ? "bg-blue-50 text-blue-700 font-medium"
                : "hover:bg-gray-50 text-gray-700"
            }`}
          >
            <button
              className="w-full text-left text-sm"
              onClick={() => handleFilter(itemData.products, itemData.name)}
            >
              {itemName}
            </button>
          </div>
        );
      }

      // For categories with subcategories
      return (
        <div key={itemId} className="mb-1">
          <div
            className="flex justify-between items-center py-2 px-3 rounded hover:bg-gray-50 cursor-pointer transition-colors"
            onClick={() => toggleDropdown(itemId)}
          >
            <span className="text-gray-700 hover:text-gray-900 font-medium text-sm">
              {itemName}
            </span>
            <ChevronIcon isOpen={isDropdownOpen(itemId)} />
          </div>

          {isDropdownOpen(itemId) && itemData.subcategories && (
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
      <HeaderPage />

      <div className="flex flex-col mt-24 md:flex-row min-h-screen bg-gray-50">
        {/* Sidebar - Fixed with scroll */}
        <div className="w-full md:w-72 bg-white p-5 border-r border-gray-200 lg:fixed h-screen overflow-y-auto">
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Shop</h2>
            <button
              className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
              onClick={clearFilters}
            >
              Clear All Filters
            </button>
          </div>

          {/* Price Filter */}
          <div className="mb-6">
            <h3
              className="text-lg font-semibold mb-2 cursor-pointer flex justify-between items-center text-gray-800"
              onClick={() => toggleDropdown("price-filter")}
            >
              Price Range
              <ChevronIcon isOpen={isDropdownOpen("price-filter")} />
            </h3>

            {isDropdownOpen("price-filter") && (
              <div className="pl-1">
                <div className="py-2 px-3">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">
                      ${priceRange[0]}
                    </span>
                    <span className="text-sm text-gray-600">
                      ${priceRange[1]}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={priceRange[0]}
                    onChange={(e) =>
                      handlePriceChange(Number(e.target.value), priceRange[1])
                    }
                    className="w-full mb-4"
                  />
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={priceRange[1]}
                    onChange={(e) =>
                      handlePriceChange(priceRange[0], Number(e.target.value))
                    }
                    className="w-full"
                  />
                </div>
              </div>
            )}
          </div>

          {Object.entries(categories).map(([category, items]) => {
            const categoryId = category.replace(/\s+/g, "-").toLowerCase();

            return (
              <div key={categoryId} className="mb-6">
                <h3
                  className="text-lg font-semibold mb-2 cursor-pointer flex justify-between items-center text-gray-800"
                  onClick={() => toggleDropdown(categoryId)}
                >
                  {category}
                  <ChevronIcon isOpen={isDropdownOpen(categoryId)} />
                </h3>

                {isDropdownOpen(categoryId) && (
                  <div className="pl-1">
                    {renderCategoryItems(items, categoryId)}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Main Content - Adjusted for fixed sidebar */}
        <div className="flex-1 p-6 md:ml-72 mt-0">
          {searchQuery && (
            <div className="mb-4">
              <button
                onClick={() => {
                  setSearchQuery("");
                  navigate("/Shop");
                  setFilteredProducts(allProducts);
                  setActiveFilter("All Products");
                }}
                className="text-blue-600 hover:text-blue-800"
              >
                ← Back to all products
              </button>
            </div>
          )}
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            {activeFilter}{" "}
            <span className="text-gray-500 font-normal">
              ({filteredProducts.length} items)
            </span>
          </h2>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">
                No products found{" "}
                {searchQuery ? `for "${searchQuery}"` : "in this category"}.
              </p>
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    navigate("/Shop");
                    setFilteredProducts(allProducts);
                    setActiveFilter("All Products");
                  }}
                  className="mt-4 text-blue-600 hover:text-blue-800"
                >
                  View all products
                </button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

// Reusable Chevron Icon Component
const ChevronIcon = ({ isOpen }) => (
  <svg
    className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

// Reusable Product Card Component
const ProductCard = ({ product }) => (
  <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow duration-300">
    <div className="bg-gray-100 h-64 flex items-center justify-center overflow-hidden">
      {product.image ? (
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="text-gray-400">Product Image</div>
      )}
    </div>
    <div className="p-4">
      <h3 className="font-medium text-gray-900">{product.name}</h3>
      <p className="mt-1 text-gray-900 font-semibold">
        ${product.price.toFixed(2)}
      </p>
      {product.sizes && (
        <p className="text-xs text-gray-500 mt-1">
          Sizes: {product.sizes.join(", ")}
        </p>
      )}
      {product.colors && (
        <p className="text-xs text-gray-500 mt-1">
          Colors: {product.colors.join(", ")}
        </p>
      )}
      <button className="mt-3 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors duration-200 text-sm font-medium">
        Add to Cart
      </button>
    </div>
  </div>
);

export default ShopSidebar;
