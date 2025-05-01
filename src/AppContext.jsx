import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [showCartAlert, setShowCartAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  // Persist cart and wishlist to localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const showAlert = (message) => {
    setAlertMessage(message);
    setShowCartAlert(true);
    setTimeout(() => setShowCartAlert(false), 3000);
  };

  const parsePrice = (price) => {
    if (typeof price === "number") return price;
    if (typeof price === "string") {
      // Remove currency symbols and commas, then parse to float
      const numericValue = parseFloat(price.replace(/[^\d.-]/g, ""));
      return isNaN(numericValue) ? 0 : numericValue;
    }
    return 0;
  };

  const addToCart = (product, quantity = 1) => {
    const productWithParsedPrice = {
      ...product,
      price: parsePrice(product.price),
    };

    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...productWithParsedPrice, quantity }];
    });

    const productName = product.name || product.designer || "Item";
    showAlert(`${productName} added to cart!`);
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const addToWishlist = (product) => {
    setWishlist((prev) =>
      prev.some((item) => item.id === product.id) ? prev : [...prev, product]
    );
    const productName = product.name || product.designer || "Item";
    showAlert(`${productName} added to wishlist!`);
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prev) => prev.filter((item) => item.id !== productId));
  };

  // Calculate cart total safely
  const cartTotal = cart.reduce((sum, item) => {
    const itemPrice = parsePrice(item.price);
    const itemQuantity = item.quantity || 1;
    return sum + itemPrice * itemQuantity;
  }, 0);

  return (
    <AppContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        addToWishlist,
        removeFromWishlist,
        cartCount: cart.reduce((sum, item) => sum + (item.quantity || 1), 0),
        wishlistCount: wishlist.length,
        cartTotal,
        showCartAlert,
        alertMessage,
        showAlert,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
