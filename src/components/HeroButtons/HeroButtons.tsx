import Button from "../Button/Button";
import styles from "./HeroButtons.module.scss";
import ArrowIcon from "@/assets/button/arow_btn.svg";

const HeroButtons = () => {
  return (
    <div className={styles.buttonBar}>
      <Button size="m" variant="primary" icon={ArrowIcon}>
        ЗАМОВИТИ
      </Button>
      <Button size="l" variant="secondary">
        ДІЗНАТИСЬ БІЛЬШЕ
      </Button>
    </div>
  );
};

export default HeroButtons;
