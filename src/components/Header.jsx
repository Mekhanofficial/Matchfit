import { useState } from "react";
import { Link } from "react-router-dom";
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
      {/* Header */}
      <header className="flex justify-between items-center p-10 text-white absolute w-full top-0 z-50">
        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-400 transition-colors">
            Home
          </Link>
          <Link to="/Shop" className="hover:text-gray-400 transition-colors">
            Shop
          </Link>
          <Link to="/About" className="hover:text-gray-400 transition-colors">
            About Us
          </Link>
          <Link to="/Contact" className="hover:text-gray-400 transition-colors">
            Contact Us
          </Link>
        </nav>

        {/* Centered Logo */}
        <div className="logo absolute left-1/2 transform -translate-x-1/2 text-center text-xs font-bold">
          <h1>MATCHFIT</h1>
          <h2 className="text-2xl font-semibold">Wardrobe</h2>
          <div className="bg-white w-5 h-1 mx-auto"></div>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4 ml-auto">
          {/* User Icon - Hidden on mobile */}
          <div className="hidden md:block">
            <FontAwesomeIcon
              className="text-xl hover:text-gray-400 transition-colors cursor-pointer"
              icon={faUserAlt}
            />
          </div>

          {/* Cart Icon - Hidden on mobile */}
          <div
            className="hidden md:block relative cursor-pointer"
            onClick={toggleCart}
          >
            <FontAwesomeIcon
              className="text-xl hover:text-gray-400 transition-colors"
              icon={faCartShopping}
            />
            <div className="countbox absolute top-[-10px] right-[-10px] bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </div>
          </div>

          {/* Mobile Menu Toggle Button - Always visible on mobile */}
          <FontAwesomeIcon
            className="text-xl hover:text-gray-400 transition-colors cursor-pointer md:hidden"
            icon={isSidebarOpen ? faTimes : faBars}
            onClick={toggleSidebar}
          />
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white z-40 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-6">MATCHFIT</h2>
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className="hover:text-gray-400 transition-colors"
              onClick={closeAllPanels}
            >
              Home
            </Link>
            <Link
              to="/Shop"
              className="hover:text-gray-400 transition-colors"
              onClick={closeAllPanels}
            >
              Shop
            </Link>
            <Link
              to="/About"
              className="hover:text-gray-400 transition-colors"
              onClick={closeAllPanels}
            >
              About Us
            </Link>
            <Link
              to="/Contact"
              className="hover:text-gray-400 transition-colors"
              onClick={closeAllPanels}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>

      {/* Cart Panel */}
      <div
        className={`fixed inset-y-0 right-0 w-80 bg-gray-800 text-white z-40 transform transition-transform duration-300 ease-in-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 h-full flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Your Cart</h2>
            <FontAwesomeIcon
              icon={faTimes}
              className="text-xl cursor-pointer hover:text-gray-400"
              onClick={toggleCart}
            />
          </div>
          <div className="flex-grow overflow-y-auto">
            {/* Cart items would go here */}
            <p className="text-center text-gray-400 mt-10">
              Your cart is empty
            </p>
          </div>
          <div className="border-t border-gray-700 pt-4">
            <div className="flex justify-between mb-4">
              <span>Subtotal</span>
              <span>$0.00</span>
            </div>
            <button className="w-full bg-white text-gray-800 py-2 rounded font-medium hover:bg-gray-200 transition-colors">
              Checkout
            </button>
          </div>
        </div>
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
