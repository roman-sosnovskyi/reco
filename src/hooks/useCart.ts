import { useState } from "react";
import { Product } from "@/types/types";

export const useCart = () => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product, size: string) => {
    setCart((prevCart) => {
      const productInCart = prevCart.find(
        (item) => item.name === product.name && item.size === size
      );

      if (productInCart) {
        return prevCart.map((item) =>
          item.name === product.name && item.size === size
            ? { ...item, quantity: (item.quantity || 0) + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, size, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (product: Product, size: string) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.name === product.name && item.size === size
            ? { ...item, quantity: (item.quantity || 0) - 1 }
            : item
        )
        .filter((item) => item.quantity! > 0)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return { cart, addToCart, removeFromCart, clearCart };
};
