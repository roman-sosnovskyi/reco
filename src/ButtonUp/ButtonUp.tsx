import styles from "./ButtonUp.module.scss";
import ArrowUpIcon from "../assets/icon/arowUp.svg";
import { ButtonUpProps } from "./types/ButtonUp";
import React from "react";

const ButtonUp: React.FC<ButtonUpProps> = ({ className }) => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`${styles.buttonUp} ${className}`}
      onClick={handleScrollToTop}
    >
      <img src={ArrowUpIcon} alt="Arrow Up" className={styles.icon} />
    </button>
  );
};

export default ButtonUp;
