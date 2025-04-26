import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/Home";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShopSidebar from "./components/Shop";
import { AppWrapper } from "./AppContext";
import Layout from "./components/Layout";
import Wishlist from "./components/Wishlist";
import Checkout from "./components/Checkout";
import CheckoutPage from "./pages/Checkout";
import ShopPage from "./pages/Shop";
import AboutusPage from "./pages/About";
import WishlistPage from "./pages/Wishlist";
import ProductDetails from "./components/ProductDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));

const proRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/Shop",
        element: <ShopPage />,
      },
      {
        path: "/Wishlist",
        element: <WishlistPage />,
      },
      {
        path: "/Checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },

      {
        path: "/About",
        element: <AboutusPage />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <AppWrapper>
      <RouterProvider router={proRouter} />
    </AppWrapper>
  </React.StrictMode>
);
