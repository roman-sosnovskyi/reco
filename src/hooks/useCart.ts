import { useState, useEffect, useCallback } from "react";
import { Product } from "@/types/types";

export const useCart = () => {
  const [cart, setCart] = useState<Product[]>(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = useCallback((product: Product, size: string) => {
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
  }, []);

  const removeFromCart = useCallback((product: Product, size: string) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) => !(item.name === product.name && item.size === size)
      )
    );
  }, []);

  const decreaseQuantity = useCallback((product: Product, size: string) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.name === product.name && item.size === size
            ? { ...item, quantity: Math.max((item.quantity || 0) - 1, 1) }
            : item
        )
        .filter((item) => (item.quantity ?? 0) > 0)
    );
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  return { cart, addToCart, removeFromCart, decreaseQuantity, clearCart };
};
