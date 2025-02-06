import { HeroSectionProps } from "./types/HeroSection.types";
import styles from "./HeroSection.module.scss";
import RecoBg from "../RecoBg/RecoBg";
import Button from "../Button/Button";
import reco1 from "@/assets/images/reco1.svg";
import reco2 from "@/assets/images/reco2.svg";
import termo from "@/assets/images/termo.svg";

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
          <Button size="m" variant="primary">
            ЗАМОВИТИ
          </Button>
          <Button size="m" variant="black">
            ДІЗНАТИСЬ БІЛЬШЕ
          </Button>
        </div>
      </div>
      <div className={styles.image_container}>
        <img src={reco1} alt="Image 1" className={styles.image_l1} />
        <img src={reco2} alt="Image 1" className={styles.image_l2} />
        <img src={termo} alt="Image 1" className={styles.image_l3} />
      </div>
    </section>
  );
};

export default HeroSection;
