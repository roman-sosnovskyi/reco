import { MainPageProps } from "./types/MainPage.types";
import styles from "./MainPage.module.scss";
import HeroSection from "@/libs/pages/HeroSection/HeroSection";
import RecoBg from "@/libs/components/RecoBg/RecoBg";

const MainPage = ({ className }: MainPageProps) => {
  const combinedClass = className
    ? `${styles.main_page} ${className}`
    : styles.main_page;
  return (
    <div className={combinedClass}>
      <HeroSection>
        <RecoBg className={styles.reco_bg}></RecoBg>
        <div className={styles.textBar}>
          <span className={styles.slogan}>
            <span style={{ color: "#FFD700" }}>RECO</span> — це бренд створений{" "}
            <br /> з любов’ю до волосся
          </span>
          <span className={styles.text}>
            Кожен заслуговує на здорове, сильне та блискуче волосся <br />
            <span style={{ color: "#FFD700" }}> RECO </span> — це інструмент,
            який дарує нове життя вашому <br /> волоссю
          </span>
        </div>
        <div className={styles.buttonBar}>
          <button>ЗАМОВИТИ</button>
          <button>ДIЗНАТИСЯ БIЛЬШЕ</button>
        </div>
      </HeroSection>
    </div>
  );
};

export default MainPage;
