import React from "react";
import styles from "../ProductCard/ProductCard.module.scss";
import { SlideProps } from "./types/Slide.types";
import Button from "../Button/Button";

export const Slide: React.FC<SlideProps> = ({
  product,
  isActive,
  selectedSize,
  onAddToCart
}) => {
  return (
    <li className={`${styles.slide} ${isActive ? styles.active : ""}`}>
      <img src={product.photo} alt={product.name} className={styles.image} />
      {isActive && (
        <div className={styles.buttonPlace}>
          <Button
            size="m"
            variant="primary"
            className={styles.addToCart}
            onClick={onAddToCart}
            disabled={!selectedSize}
          >
            ДОДАТИ В КОШИК
          </Button>
        </div>
      )}
    </li>
  );
};
