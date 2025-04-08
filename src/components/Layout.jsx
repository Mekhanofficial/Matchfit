import { Outlet } from "react-router-dom";
import HeaderPage from "./Header";

const Layout = () => {
  return (
    <>
      <HeaderPage />
      <main className="pt-20">
        {" "}
        {/* Adjust padding to match header height */}
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
