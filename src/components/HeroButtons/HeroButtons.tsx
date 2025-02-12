import Button from "../Button/Button";
import styles from "./HeroButtons.module.scss";

const HeroButtons = () => {
  return (
    <div className={styles.buttonBar}>
      <Button size="m" variant="primary">
        ЗАМОВИТИ
      </Button>
      <Button size="m" variant="black">
        ДІЗНАТИСЬ БІЛЬШЕ
      </Button>
    </div>
  );
};

export default HeroButtons;
