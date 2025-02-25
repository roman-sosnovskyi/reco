import styles from "./ArowButton.module.scss";
import ArowLeft from "@/assets/icon/ArowLeft.svg";
import ArowRight from "@/assets/icon/ArowRight.svg";
import React from "react";
import { ButtonArrowProps } from "./types/ArowButton";

const ButtonArrow: React.FC<ButtonArrowProps> = ({
  className,
  icon,
  onClick
}) => {
  const iconSrc = icon === "left" ? ArowLeft : ArowRight;
  const iconAlt = icon === "left" ? "Arrow Left" : "Arrow Right";

  return (
    <button className={`${styles.buttonArrow} ${className}`} onClick={onClick}>
      <img src={iconSrc} alt={iconAlt} className={styles.icon} />
    </button>
  );
};

export default ButtonArrow;
