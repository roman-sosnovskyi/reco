import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { CartContext } from "@/context/CartContext";
import { useCart } from "@/hooks/useCart";
import ButtonUp from "@/components/ButtonUp/ButtonUp";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const cartHook = useCart();
  return (
    <CartContext.Provider value={cartHook}>
      <Header />
      <Outlet />
      <ButtonUp />
      <Footer />
    </CartContext.Provider>
  );
};

export default MainLayout;
