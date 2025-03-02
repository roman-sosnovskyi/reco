import Icon from "../Icon/Icon";
import styles from "./ButtonUp.module.scss";
import { ButtonUpProps } from "./types/ButtonUp";
import React from "react";
import { useLocation } from "react-router-dom";

const ButtonUp: React.FC<ButtonUpProps> = ({ className }) => {
  const location = useLocation();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (location.pathname !== "/") {
    return null;
  }

  return (
    <button
      className={`${styles.buttonUp} ${className}`}
      onClick={handleScrollToTop}
    >
      <div className={styles.iconContainer}>
        <Icon
          name="icon-arrow-right2"
          size={30}
          fill="black"
          stroke="none"
          className={styles.feedbackButtonIcon}
        />
      </div>
    </button>
  );
};

export default ButtonUp;
