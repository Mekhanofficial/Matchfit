import { useState, useEffect } from "react";
import { useAppContext } from "../AppContext";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faEnvelope,
  faMapMarkerAlt,
  faCreditCard,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { faCcVisa, faCcMastercard } from "@fortawesome/free-brands-svg-icons";

export default function Checkout() {
  const { cart, removeFromCart, clearCart } = useAppContext();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "US",
    cardNumber: "",
    expDate: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  useEffect(() => {
    if (cart.length === 0) {
      navigate("/");
    }
  }, [cart, navigate]);

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const cardRegex = /^\d{16}$/;
    const cvvRegex = /^\d{3}$/;
    const expRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!emailRegex.test(formData.email))
      newErrors.email = "Invalid email address";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.zip.match(/^\d{5}$/)) newErrors.zip = "Invalid ZIP code";
    if (!cardRegex.test(formData.cardNumber))
      newErrors.cardNumber = "Invalid card number";
    if (!expRegex.test(formData.expDate))
      newErrors.expDate = "Invalid expiration date";
    if (!cvvRegex.test(formData.cvv)) newErrors.cvv = "Invalid CVV";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const orderId = Math.floor(Math.random() * 1000000);
      clearCart();
      navigate(`/order-confirmation/${orderId}`);
    } catch (error) {
      console.error("Order submission failed:", error);
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
        <Link to="/" className="text-[#16bb7c] hover:underline">
          Continue shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center mb-8 space-x-2">
        <Link to="/cart" className="text-[#16bb7c] hover:text-[#119a6a]">
          Cart
        </Link>
        <span className="text-gray-400">/</span>
        <span className="text-gray-600 font-medium">Checkout</span>
      </div>

      <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-6">
              <FontAwesomeIcon
                icon={faUserCircle}
                className="w-5 h-5 text-[#16bb7c] mr-2"
              />
              <h2 className="text-xl font-semibold text-gray-800">
                Contact Information
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.firstName ? "border-red-500" : "border-gray-200"
                  } focus:ring-2 focus:ring-[#16bb7c] focus:border-transparent`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.lastName ? "border-red-500" : "border-gray-200"
                  } focus:ring-2 focus:ring-[#16bb7c] focus:border-transparent`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700 flex items-center">
                  Email *
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="w-4 h-4 text-gray-400 ml-2"
                  />
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.email ? "border-red-500" : "border-gray-200"
                  } focus:ring-2 focus:ring-[#16bb7c] focus:border-transparent`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-6">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="w-5 h-5 text-[#16bb7c] mr-2"
              />
              <h2 className="text-xl font-semibold text-gray-800">
                Shipping Address
              </h2>
            </div>

            <div className="grid gap-6">
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">
                  Street Address *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.address ? "border-red-500" : "border-gray-200"
                  } focus:ring-2 focus:ring-[#16bb7c] focus:border-transparent`}
                />
                {errors.address && (
                  <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                )}
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.city ? "border-red-500" : "border-gray-200"
                    } focus:ring-2 focus:ring-[#16bb7c] focus:border-transparent`}
                  />
                  {errors.city && (
                    <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                  )}
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">
                    State *
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.state ? "border-red-500" : "border-gray-200"
                    } focus:ring-2 focus:ring-[#16bb7c] focus:border-transparent`}
                  />
                  {errors.state && (
                    <p className="text-red-500 text-sm mt-1">{errors.state}</p>
                  )}
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">
                    ZIP Code *
                  </label>
                  <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.zip ? "border-red-500" : "border-gray-200"
                    } focus:ring-2 focus:ring-[#16bb7c] focus:border-transparent`}
                  />
                  {errors.zip && (
                    <p className="text-red-500 text-sm mt-1">{errors.zip}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Payment */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-6">
              <FontAwesomeIcon
                icon={faCreditCard}
                className="w-5 h-5 text-[#16bb7c] mr-2"
              />
              <h2 className="text-xl font-semibold text-gray-800">
                Payment Details
              </h2>
            </div>

            <div className="space-y-6">
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700 flex items-center">
                  Card Number *
                  <div className="flex space-x-2 ml-2">
                    <FontAwesomeIcon
                      icon={faCcVisa}
                      className="w-8 h-5 text-gray-400"
                    />
                    <FontAwesomeIcon
                      icon={faCcMastercard}
                      className="w-8 h-5 text-gray-400"
                    />
                  </div>
                </label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.cardNumber ? "border-red-500" : "border-gray-200"
                  } focus:ring-2 focus:ring-[#16bb7c] focus:border-transparent`}
                  placeholder="4242 4242 4242 4242"
                />
                {errors.cardNumber && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.cardNumber}
                  </p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">
                    Expiration Date *
                  </label>
                  <input
                    type="text"
                    name="expDate"
                    value={formData.expDate}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.expDate ? "border-red-500" : "border-gray-200"
                    } focus:ring-2 focus:ring-[#16bb7c] focus:border-transparent`}
                    placeholder="MM / YY"
                  />
                  {errors.expDate && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.expDate}
                    </p>
                  )}
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700 flex items-center">
                    CVV *
                    <FontAwesomeIcon
                      icon={faLock}
                      className="w-4 h-4 text-gray-400 ml-2"
                    />
                  </label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.cvv ? "border-red-500" : "border-gray-200"
                    } focus:ring-2 focus:ring-[#16bb7c] focus:border-transparent`}
                    placeholder="123"
                  />
                  {errors.cvv && (
                    <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-fit sticky top-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Order Summary
          </h2>

          <div className="space-y-4 mb-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between group"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover border border-gray-200"
                  />
                  <div>
                    <p className="font-medium text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>
                </div>
                <p className="font-medium">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-3 border-t pt-4">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span className="text-[#16bb7c]">Free</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Taxes</span>
              <span>${(total * 0.08).toFixed(2)}</span>
            </div>
          </div>

          <div className="flex justify-between font-semibold text-gray-800 pt-4 mt-4 border-t">
            <span>Total</span>
            <span>${(total * 1.08).toFixed(2)}</span>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-[#16bb7c] to-[#119a6a] text-white py-4 rounded-xl font-medium mt-8
                     hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-white rounded-full animate-spin" />
                <span>Processing Order...</span>
              </div>
            ) : (
              "Place Secure Order"
            )}
          </button>

          <p className="text-center text-sm text-gray-500 mt-4">
            <FontAwesomeIcon
              icon={faLock}
              className="w-4 h-4 inline-block mr-1"
            />
            Your transaction is secured with SSL encryption
          </p>
        </div>
      </form>
    </div>
  );
}
