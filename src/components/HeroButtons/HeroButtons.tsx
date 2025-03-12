import { useState, useEffect } from "react";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import styles from "./HeroButtons.module.scss";

const HeroButtons = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.buttonBar}>
      <Button
        size={isMobile ? "s" : "l"}
        variant="primary"
        className={styles.button}
      >
        <div className={styles.iconContainer}>
          <Icon
            name="icon-arrow-up-right2"
            size={30}
            fill="white"
            stroke="none"
            className={styles.ButtonIcon}
          />
        </div>
        <span className={styles.button__text}>ЗАМОВИТИ</span>
      </Button>
      <Button size={isMobile ? "s" : "l"} variant="secondary">
        <div className={styles.secondСontainer}>
          <Icon
            name="icon-arrow-up-right2"
            size={isMobile ? 16 : 30}
            fill="white"
            stroke="none"
            className={styles.SecondIcon}
          />
        </div>
        <span className={styles.moreInfoText}>ПРО НАС</span>
      </Button>
    </div>
  );
};

export default HeroButtons;
