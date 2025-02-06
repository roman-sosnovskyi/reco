import { MainPageProps } from "./types/MainPage.types";
import styles from "./MainPage.module.scss";
import HeroSection from "@/libs/components/HeroSection/HeroSection";
import RecoBg from "@/libs/components/RecoBg/RecoBg";
import Button from "@/libs/components/Button/Button";

const MainPage = ({ className }: MainPageProps) => {
  const combinedClass = className
    ? `${styles.main_page} ${className}`
    : styles.main_page;
  return (
    <div className={combinedClass}>
      <HeroSection>
        <RecoBg />
        <div className={styles.text_field}>
          <p className={styles.slogan}>
            <span className={styles.highlight}>RECO</span> — це бренд створений{" "}
            <br /> з любов’ю до волосся
          </p>
          <p className={styles.text}>
            Кожен заслуговує на здорове, сильне та блискуче волосся <br />
            <span className={styles.highlight}>RECO</span> — це інструмент, який
            дарує нове життя вашому
            <br /> волоссю
          </p>
        </div>
        <div className={styles.buttonBar}>
          <Button size="l" variant="primary">
            ЗАМОВИТИ
          </Button>
          <Button size="l" variant="black">
            ДІЗНАТИСЬ БІЛЬШЕ
          </Button>
        </div>
      </HeroSection>
    </div>
  );
};

export default MainPage;
