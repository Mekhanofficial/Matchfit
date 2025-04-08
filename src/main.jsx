import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/Home";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShopSidebar from "./pages/Shop";
import { AppWrapper } from "./AppContext";
import Layout from "./components/Layout";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";

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
        element: <ShopSidebar />,
      },
      {
        path: "/Wishlist",
        element: <Wishlist />,
      },
      {
        path: "/Checkout",
        element: <Checkout />,
      },
      // Add other routes here
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
