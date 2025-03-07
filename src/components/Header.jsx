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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Header */}
      <header className="flex justify-between items-center p-4 text-white absolute w-full top-0 z-50">
        {/* Logo */}
        <div className="logo">
          <h2 className="text-2xl font-bold">MATCHFIT</h2>
        </div>

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

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon
            className="text-xl hover:text-gray-400 transition-colors cursor-pointer"
            icon={faUserAlt}
          />
          <Link to="/cart" className="relative">
            <FontAwesomeIcon
              className="text-xl hover:text-gray-400 transition-colors"
              icon={faCartShopping}
            />
            <div className="countbox absolute top-[-10px] right-[-10px] bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </div>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <FontAwesomeIcon
            className="text-xl hover:text-gray-400 transition-colors cursor-pointer md:hidden"
            icon={isSidebarOpen ? faTimes : faBars}
            onClick={toggleSidebar}
          />
        </div>
      </header>

      {/* Sidebar (Mobile) */}
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
              onClick={toggleSidebar}
            >
              Home
            </Link>
            <Link
              to="/Shop"
              className="hover:text-gray-400 transition-colors"
              onClick={toggleSidebar}
            >
              Shop
            </Link>
            <Link
              to="/About"
              className="hover:text-gray-400 transition-colors"
              onClick={toggleSidebar}
            >
              About Us
            </Link>
            <Link
              to="/Contact"
              className="hover:text-gray-400 transition-colors"
              onClick={toggleSidebar}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>

      {/* Overlay for Sidebar (Mobile) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}
