import styles from "./ArowButton.module.scss";
import React from "react";
import { ButtonArrowProps } from "./types/ArowButton";
import Icon from "../Icon/Icon";

const ButtonArrow: React.FC<ButtonArrowProps> = ({
  className,
  icon,
  onClick
}) => {
  return (
    <button className={`${styles.buttonArrow} ${className}`} onClick={onClick}>
      {icon === "left" ? (
        <Icon
          name="icon-arrow-right2"
          size={30}
          fill="black"
          stroke="none"
          className={styles.arrowLeft}
        />
      ) : (
        <Icon
          name="icon-arrow-right2"
          size={30}
          fill=" black"
          stroke="none"
          className={styles.arrowRight}
        />
      )}
    </button>
  );
};

export default ButtonArrow;
