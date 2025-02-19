import React, { useState } from "react";
import { Product } from "@/types/types";
import { useCartContext } from "@/hooks/useCartContext";
import styles from "./ProductCard.module.scss";
export const ProductCard: React.FC<{ products: Product[] }> = ({
  products
}) => {
  if (!products || products.length === 0) {
    return <div>Продукты не найдены.</div>;
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const currentProduct = products[currentIndex];

  if (!currentProduct) {
    return <div>Продукт не найден.</div>;
  }

  const sizes = currentProduct.sizes
    ? Object.entries(currentProduct.sizes)
    : [];

  const { addToCart } = useCartContext();

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart(currentProduct, selectedSize);
    } else {
      alert("Будь ласка, виберіть розмір!");
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.carousel}>
        <button onClick={handlePrev} className={styles.arrowLeft}>
          ←
        </button>
        <img
          src={currentProduct.photo}
          alt={currentProduct.name}
          style={{ width: "100%", maxHeight: "300px", objectFit: "contain" }}
        />
        <button onClick={handleNext} className={styles.arrowRight}>
          →
        </button>
      </div>
      <div className={styles.info}>
        <h2>{currentProduct.name}</h2>
        <p>{currentProduct.description}</p>
        <div className={styles.sizes}>
          {sizes.length === 0 ? (
            <div>Размеры не доступны</div>
          ) : (
            sizes.map(([size, price]) => (
              <label key={size}>
                <input
                  type="radio"
                  name="size"
                  value={size}
                  checked={selectedSize === size}
                  onChange={() => handleSizeChange(size)}
                />
                {size} — {price} грн
              </label>
            ))
          )}
        </div>
        <button
          className={styles.addToCart}
          onClick={() => {
            handleAddToCart();
          }}
          disabled={!selectedSize}
        >
          Додати в кошик
        </button>
      </div>
    </div>
  );
};
