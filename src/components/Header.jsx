import { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserAlt,
  faCartShopping,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

export default function HeaderPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation(); // Get current location

  // Check if we're on the homepage
  const isHomepage = location.pathname === "/";

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    if (!isSidebarOpen && isCartOpen) setIsCartOpen(false);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    if (!isCartOpen && isSidebarOpen) setIsSidebarOpen(false);
  };

  const closeAllPanels = () => {
    setIsSidebarOpen(false);
    setIsCartOpen(false);
  };

  return (
    <>
      {/* Header - Apply text color based on isHomepage */}
      <header
        className={`flex justify-between items-center p-10 ${
          isHomepage ? "text-white" : "text-zinc-800"
        } absolute w-full top-0 z-50`}
      >
        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex space-x-6">
          <Link
            to="/"
            className={`hover:text-[#16bb7c] transition-colors ${
              !isHomepage && location.pathname === "/" ? "text-zinc-800" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/Shop"
            className={`hover:text-[#16bb7c] transition-colors ${
              !isHomepage && location.pathname === "/Shop"
                ? "text-zinc-800"
                : ""
            }`}
          >
            Shop
          </Link>
          <Link
            to="/About"
            className={`hover:text-[#16bb7c] transition-colors ${
              !isHomepage && location.pathname === "/About"
                ? "text-zinc-800"
                : ""
            }`}
          >
            About Us
          </Link>
          <Link
            to="/Contact"
            className={`hover:text-[#16bb7c] transition-colors ${
              !isHomepage && location.pathname === "/Contact"
                ? "text-zinc-800"
                : ""
            }`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Centered Logo */}
        <div
          className={`logo absolute left-1/2 transform -translate-x-1/2 text-center text-xs font-bold ${
            isHomepage ? "" : "text-zinc-800"
          }`}
        >
          <h1>MATCHFIT</h1>
          <h2 className="text-2xl font-semibold">Wardrobe</h2>
          <div
            className={`${
              isHomepage ? "bg-white" : "bg-zinc-800"
            } w-5 h-1 mx-auto`}
          ></div>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4 ml-auto">
          {/* User Icon - Hidden on mobile */}
          <div className="hidden md:block">
            <FontAwesomeIcon
              className={`text-xl hover:text-[#16bb7c] transition-colors cursor-pointer ${
                isHomepage ? "" : "text-zinc-800"
              }`}
              icon={faUserAlt}
            />
          </div>

          {/* Cart Icon - Hidden on mobile */}
          <div
            className="hidden md:block relative cursor-pointer"
            onClick={toggleCart}
          >
            <FontAwesomeIcon
              className={`text-xl hover:text-[#16bb7c] transition-colors ${
                isHomepage ? "" : "text-zinc-800"
              }`}
              icon={faCartShopping}
            />
            <div className="countbox absolute top-[-10px] right-[-10px] bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </div>
          </div>

          {/* Mobile Menu Toggle Button - Always visible on mobile */}
          <FontAwesomeIcon
            className={`text-xl hover:text-[#16bb7c] transition-colors cursor-pointer md:hidden ${
              isHomepage ? "" : "text-zinc-800"
            }`}
            icon={isSidebarOpen ? faTimes : faBars}
            onClick={toggleSidebar}
          />
        </div>
      </header>

      {/* Mobile Sidebar - Keep original colors since it's always on dark background */}
      <div
        className={`fixed inset-y-0 left-0 w-72 bg-gray-800 text-white z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        {/* ... rest of the sidebar code remains the same ... */}
      </div>

      {/* Cart Panel - Keep original colors since it's always on dark background */}
      <div
        className={`fixed inset-y-0 right-0 w-80 bg-gray-900 text-white z-50 transform transition-transform duration-300 ease-in-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* ... rest of the cart panel code remains the same ... */}
      </div>

      {/* Overlay */}
      {(isSidebarOpen || isCartOpen) && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={closeAllPanels}
        ></div>
      )}
    </>
  );
}
