import React, { createContext, ReactNode } from "react";
import { Product } from "@/types/types";
import { useCart } from "@/hooks/useCart";

interface CartContextProps {
  cart: Product[];
  addToCart: (product: Product, size: string) => void;
  removeFromCart: (product: Product, size: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const cartHook = useCart();
  return (
    <CartContext.Provider value={cartHook}>{children}</CartContext.Provider>
  );
};

export { CartContext };
