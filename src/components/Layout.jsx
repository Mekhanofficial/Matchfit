import { Outlet } from "react-router-dom";
import FooterPage from "./Footer";
import HeaderPage from "./Header";
import ScrollToTop from "./ScrollToTop";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useAppContext } from "../AppContext";

const Layout = () => {
  const { showCartAlert, alertMessage } = useAppContext();

  return (
    <>
      <ScrollToTop />
      <HeaderPage />
      <Outlet />
      <FooterPage />

      {/* Cart Alert Notification */}
      {showCartAlert && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-3 rounded-md shadow-lg z-50 flex items-center gap-2"
        >
          <FontAwesomeIcon icon={faCheckCircle} />
          <span>{alertMessage}</span>
        </motion.div>
      )}
    </>
  );
};

export default Layout;
