import { Outlet } from "react-router-dom";
import HeaderPage from "./Header";
import FooterPage from "./Footer";

const Layout = () => {
  return (
    <>
      <HeaderPage />
      <main className="pt-20">
        <Outlet />
      </main>
      <FooterPage/>
    </>
  );
};

export default Layout;
