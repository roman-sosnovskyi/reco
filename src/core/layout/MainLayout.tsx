import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "./MainLayout.module.scss";
import { CartContext } from "@/context/CartContext";
import { useCart } from "@/hooks/useCart";
import ButtonUp from "@/components/ButtonUp/ButtonUp";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const cartHook = useCart();
  return (
    <CartContext.Provider value={cartHook}>
      <div className={styles.main_ly}>
        <Header />
        <Outlet />
        <ButtonUp />
        <Footer />
      </div>
    </CartContext.Provider>
  );
};

export default MainLayout;
