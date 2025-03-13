import React from "react";
import { SlidesListProps } from "./types/SliderList.types";
import styles from "../ProductCard/ProductCard.module.scss";
import Button from "../Button/Button";

export const SlidesList: React.FC<SlidesListProps> = ({
  products,
  currentIndex,
  selectedSize,
  onAddToCart
}) => {
  return (
    <>
      {products.map((product, index) => (
        <div
          key={index}
          className={`${styles.slide} ${index === currentIndex ? styles.active : ""}`}
        >
          <img
            src={product.photo}
            alt={product.name}
            className={styles.image}
          />
          {index === currentIndex && (
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
        </div>
      ))}
    </>
  );
};
