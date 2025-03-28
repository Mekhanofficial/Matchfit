import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserAlt,
  faCartShopping,
  faBars,
  faTimes,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

export default function HeaderPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomepage = location.pathname === "/";

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
    if (!isSidebarOpen) setIsCartOpen(false);
  };

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
    if (!isCartOpen) setIsSidebarOpen(false);
  };

  const toggleSearch = () => setShowSearch((prev) => !prev);

  const closeAllPanels = () => {
    setIsSidebarOpen(false);
    setIsCartOpen(false);
    setShowSearch(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/Shop?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      closeAllPanels();
    }
  };

  // Close panels when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (showSearch && !e.target.closest(".search-container")) {
        setShowSearch(false);
      }
    };

    const handleEscapeKey = (e) => {
      if (e.key === "Escape") {
        closeAllPanels();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [showSearch]);

  // Prevent body scroll when sidebar or cart is open
  useEffect(() => {
    if (isSidebarOpen || isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isSidebarOpen, isCartOpen]);

  // Sidebar menu items
  const sidebarItems = [
    { path: "/", label: "Home" },
    { path: "/Shop", label: "Shop" },
    { path: "/About", label: "About Us" },
    { path: "/Contact", label: "Contact Us" },
    { path: "/Account", label: "My Account" },
    { path: "/FAQ", label: "FAQ" },
    { path: "/Shipping", label: "Shipping & Returns" },
    { path: "/Privacy", label: "Privacy Policy" },
    { path: "/Terms", label: "Terms of Service" },
  ];

  return (
    <>
      <header
        className={`flex justify-between items-center p-4 md:p-6 ${
          isHomepage ? "text-white" : "text-zinc-800"
        } absolute w-full top-0 z-50`}
      >
        {/* Left Navigation Links (Desktop) */}
        <nav className="hidden md:flex space-x-8">
          <Link
            to="/"
            className={`hover:text-[#16bb7c] transition-colors ${
              location.pathname === "/" && !isHomepage ? "text-zinc-800" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/Shop"
            className={`hover:text-[#16bb7c] transition-colors ${
              location.pathname === "/Shop" && !isHomepage
                ? "text-zinc-800"
                : ""
            }`}
          >
            Shop
          </Link>
        </nav>

        {/* Centered Logo */}
        <div className="logo absolute left-1/2 transform -translate-x-1/2 text-center">
          <h1
            className={`text-xs font-bold ${isHomepage ? "" : "text-zinc-800"}`}
          >
            MATCHFIT
          </h1>
          <h2
            className={`text-2xl font-semibold ${
              isHomepage ? "" : "text-zinc-800"
            }`}
          >
            Wardrobe
          </h2>
          <div
            className={`${
              isHomepage ? "bg-white" : "bg-zinc-800"
            } w-5 h-1 mx-auto`}
          />
        </div>

        {/* Right Navigation Links (Desktop) */}
        <nav className="hidden md:flex space-x-8">
          <Link
            to="/About"
            className={`hover:text-[#16bb7c] transition-colors ${
              location.pathname === "/About" && !isHomepage
                ? "text-zinc-800"
                : ""
            }`}
          >
            About Us
          </Link>
          <Link
            to="/Contact"
            className={`hover:text-[#16bb7c] transition-colors ${
              location.pathname === "/Contact" && !isHomepage
                ? "text-zinc-800"
                : ""
            }`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4 ml-auto">
          {/* Search Icon - Hidden on mobile */}
          <div className="hidden md:block relative search-container">
            <FontAwesomeIcon
              icon={faSearch}
              onClick={toggleSearch}
              className={`text-xl hover:text-[#16bb7c] transition-colors cursor-pointer ${
                isHomepage ? "" : "text-zinc-800"
              }`}
            />
            {showSearch && (
              <form
                onSubmit={handleSearch}
                className="absolute right-0 top-full mt-2 w-64 bg-white rounded shadow-lg p-2 z-50"
              >
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full p-2 border border-gray-300 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#16bb7c]"
                  autoFocus
                />
              </form>
            )}
          </div>

          {/* User Icon - Hidden on mobile */}
          <div className="hidden md:block">
            <Link to="/Account">
              <FontAwesomeIcon
                icon={faUserAlt}
                className={`text-xl hover:text-[#16bb7c] transition-colors ${
                  isHomepage ? "" : "text-zinc-800"
                }`}
              />
            </Link>
          </div>

          {/* Cart Icon */}
          <div className="relative" onClick={toggleCart}>
            <FontAwesomeIcon
              icon={faCartShopping}
              className={`text-xl hover:text-[#16bb7c] transition-colors cursor-pointer ${
                isHomepage ? "" : "text-zinc-800"
              }`}
            />
            <div className="absolute top-[-10px] right-[-10px] bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={toggleSidebar}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon
              icon={isSidebarOpen ? faTimes : faBars}
              className={`text-xl hover:text-[#16bb7c] transition-colors ${
                isHomepage ? "" : "text-zinc-800"
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 w-72 bg-gray-800 text-white z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <div className="logo text-center text-xs font-bold">
              <h1 className="text-zinc-300">MATCHFIT</h1>
              <h2 className="text-2xl font-semibold text-zinc-300">Wardrobe</h2>
              <div className="bg-zinc-500 w-5 h-1 mx-auto" />
            </div>
            <button
              onClick={toggleSidebar}
              className="focus:outline-none"
              aria-label="Close menu"
            >
              <FontAwesomeIcon icon={faTimes} className="text-xl" />
            </button>
          </div>

          {/* Mobile Search - Visible in sidebar */}
          <div className="mb-6 search-container">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full p-3 pl-10 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-[#16bb7c]"
                autoFocus
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </form>
          </div>

          <nav className="space-y-3 flex-1 overflow-y-auto">
            {sidebarItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-3 px-2 rounded hover:bg-gray-700 transition-colors ${
                  location.pathname === item.path ? "bg-gray-700" : ""
                }`}
                onClick={closeAllPanels}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="pt-4 border-t border-gray-700 mt-4">
            <Link
              to="/Account"
              className="flex items-center py-3 hover:text-[#16bb7c] transition-colors"
              onClick={closeAllPanels}
            >
              <FontAwesomeIcon icon={faUserAlt} className="mr-3" />
              My Account
            </Link>
          </div>
        </div>
      </aside>

      {/* Cart Panel */}
      <aside
        className={`fixed inset-y-0 right-0 w-full sm:w-96 bg-gray-900 text-white z-50 transform transition-transform duration-300 ease-in-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold">Your Cart</h2>
            <button
              onClick={toggleCart}
              className="focus:outline-none"
              aria-label="Close cart"
            >
              <FontAwesomeIcon icon={faTimes} className="text-xl" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="text-center py-12">
              <p className="text-gray-400">Your cart is empty</p>
              <Link
                to="/Shop"
                onClick={closeAllPanels}
                className="mt-4 inline-block bg-[#16bb7c] text-white py-2 px-6 rounded hover:bg-[#119a6a] transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-700">
            <div className="flex justify-between mb-4">
              <span>Subtotal</span>
              <span>$0.00</span>
            </div>
            <button className="w-full bg-[#16bb7c] text-white py-3 rounded hover:bg-[#119a6a] transition-colors focus:outline-none">
              Checkout
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay */}
      {(isSidebarOpen || isCartOpen) && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeAllPanels}
        />
      )}
    </>
  );
}
