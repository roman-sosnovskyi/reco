import React, { useState, useRef, useEffect } from "react";
import { Product } from "@/types/types";
import { useCartContext } from "@/hooks/useCartContext";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ProductCard.module.scss";
import HighlightText from "../HighLightText/HighLightText";

export const ProductCard: React.FC<{ products: Product[] }> = ({
  products
}) => {
  if (!products || products.length === 0) {
    return <div>Продукты не найдены.</div>;
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const currentProduct = products[currentIndex];

  if (!currentProduct) {
    return <div>Продукт не найден.</div>;
  }

  const sizes = currentProduct.sizes
    ? Object.entries(currentProduct.sizes)
    : [];
  const { addToCart } = useCartContext();

  const handleNext = () => {
    if (isAnimating) return;
    setDirection("left");
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setDirection("right");
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Будь ласка, виберіть розмір!");
      return;
    }

    const newItem = {
      id: currentProduct.id,
      name: currentProduct.name,
      size: selectedSize,
      price: currentProduct.sizes[selectedSize],
      photo: currentProduct.photo
    };

    const storedCart = localStorage.getItem("cart");
    const cart = storedCart ? JSON.parse(storedCart) : [];

    cart.push(newItem);

    localStorage.setItem("cart", JSON.stringify(cart));
    addToCart(currentProduct, selectedSize);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touchStartX = e.touches[0].clientX;
    carouselRef.current!.dataset.touchStart = touchStartX.toString();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!carouselRef.current!.dataset.touchStart) return;
    const touchStartX = parseFloat(carouselRef.current!.dataset.touchStart);
    const touchEndX = e.touches[0].clientX;
    const deltaX = touchStartX - touchEndX;

    if (deltaX > 50) handleNext();
    if (deltaX < -50) handlePrev();
    delete carouselRef.current!.dataset.touchStart;
  };

  const handleAnimationComplete = () => {
    setIsAnimating(false);
  };

  useEffect(() => {
    setSelectedSize(null);
  }, [currentIndex]);

  return (
    <div className={styles.card}>
      <div
        className={styles.carousel}
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <button onClick={handlePrev} className={styles.arrowLeft}>
          ←
        </button>
        <div className={styles.image_container}>
          <AnimatePresence mode="wait">
            <motion.img
              key={currentProduct.id}
              src={currentProduct.photo}
              alt={currentProduct.name}
              className={styles.image}
              initial={{ opacity: 0, x: direction === "left" ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction === "left" ? -100 : 100 }}
              transition={{ duration: 0.5 }}
              onAnimationComplete={handleAnimationComplete}
            />
          </AnimatePresence>
          <button
            className={styles.addToCart}
            onClick={handleAddToCart}
            disabled={!selectedSize}
          >
            Додати в кошик
          </button>
        </div>
        <button onClick={handleNext} className={styles.arrowRight}>
          →
        </button>
      </div>
      <div className={styles.info}>
        <HighlightText>
          <h2>{currentProduct.name}</h2>
        </HighlightText>
        <p>{currentProduct.description}</p>
        <div className={styles.sizes}>
          {sizes.length === 0 ? (
            <div>Размеры не доступны</div>
          ) : (
            sizes.map(([size]) => (
              <label key={size}>
                <input
                  type="radio"
                  name="size"
                  value={size}
                  checked={selectedSize === size}
                  onChange={() => handleSizeChange(size)}
                />
                {size}
              </label>
            ))
          )}
        </div>
        <button>Learn more</button>
      </div>
    </div>
  );
};
