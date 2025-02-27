import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import styles from "./HeroButtons.module.scss";
const HeroButtons = () => {
  return (
    <div className={styles.buttonBar}>
      <Button size="m" variant="primary" className={styles.button}>
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
      <Button size="l" variant="secondary">
        ДІЗНАТИСЬ БІЛЬШЕ
      </Button>
    </div>
  );
};

export default HeroButtons;
