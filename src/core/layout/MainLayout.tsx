import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { MainLayoutProps } from "@/core/types/MainLayoutProps";
import styles from "./MainLayout.module.scss";
import { CartContext } from "@/context/CartContext";
import { useCart } from "@/hooks/useCart";
import ButtonUp from "@/ButtonUp/ButtonUp";

const MainLayout = ({ children }: MainLayoutProps) => {
  const cartHook = useCart();
  return (
    <CartContext.Provider value={cartHook}>
      <div className={styles.main_ly}>
        <Header />
        <main className={styles.main_content}>{children}</main>
        <ButtonUp />
        <Footer />
      </div>
    </CartContext.Provider>
  );
};

export default MainLayout;
