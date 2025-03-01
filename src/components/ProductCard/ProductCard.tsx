import React, { useState, useEffect } from "react";
import { Product } from "@/types/types";
import { useCartContext } from "@/hooks/useCartContext";
import styles from "./ProductCard.module.scss";
import "@/styles/index.scss";
import HighlightText from "../HighLightText/HighLightText";
import Button from "../Button/Button";
import ButtonArrow from "../ArowButton/ArowButton.types";
import Icon from "../Icon/Icon";

export const ProductCard: React.FC<{ products: Product[] }> = ({
  products
}) => {
  if (!products || products.length === 0) {
    return <div>Продукты не найдены.</div>;
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [direction, setDirection] = useState("");

  const currentProduct = products[currentIndex];
  if (!currentProduct) {
    return <div>Продукт не найден.</div>;
  }

  const sizes = currentProduct.sizes
    ? Object.entries(currentProduct.sizes)
    : [];
  const { addToCart } = useCartContext();

  const handleNext = () => {
    setDirection("next");
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const handlePrev = () => {
    setDirection("prev");
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

  useEffect(() => {
    setSelectedSize(null);
  }, [currentIndex]);

  return (
    <section className="container">
      <div className={styles.card}>
        <div className={styles.carousel}>
          <ButtonArrow
            icon="left"
            onClick={handlePrev}
            className={styles.arrowLeft}
          />
          <div className={`${styles.image_container} ${styles[direction]}`}>
            <img
              src={currentProduct.photo}
              alt={currentProduct.name}
              className={styles.image}
            />
            <Button
              size="m"
              variant="primary"
              className={styles.addToCart}
              onClick={handleAddToCart}
              disabled={!selectedSize}
            >
              Додати в кошик
            </Button>
          </div>
          <ButtonArrow
            icon="right"
            onClick={handleNext}
            className={styles.arrowRight}
          />
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
          <Button variant="secondary" size="l" className={styles.moreButton}>
            <div className={styles.iconContainer}>
              <Icon
                name="icon-arrow-up-right2"
                size={24}
                fill="white"
                stroke="none"
              />
            </div>
            <span className={styles.moreButtonText}>БІЛЬШЕ ТОВАРІВ </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
