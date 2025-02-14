import { HeroSectionProps } from "./types/HeroSection.types";
import styles from "./HeroSection.module.scss";
import RecoBg from "../RecoBg/RecoBg";
import HeroButtons from "../HeroButtons/HeroButtons";
import HighlightText from "../HighLightText/HighLightText";
import heroSectionImg from "@/assets/images/heroSectionImg.svg";

const HeroSection = ({ className }: HeroSectionProps) => {
  const combinedClass = className
    ? `${styles.heroSection} ${className}`
    : styles.heroSection;
  return (
    <section className={combinedClass}>
      <RecoBg />
      <div className={styles.main_content}>
        <div className={styles.text_field}>
          <p className={styles.slogan}>
            <HighlightText>RECO</HighlightText> — це бренд створений <br /> з
            любов’ю до волосся
          </p>
          <p className={styles.text}>
            Кожен заслуговує на здорове, сильне та блискуче волосся <br />
            <HighlightText>RECO</HighlightText> — це інструмент, який дарує нове
            життя вашому
            <br /> волоссю
          </p>
          <HeroButtons />
        </div>
        <div className={styles.image_container}>
          <img src={heroSectionImg} alt="Image 1" className={styles.image} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
