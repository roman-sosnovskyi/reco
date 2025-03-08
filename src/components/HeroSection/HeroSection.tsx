import { HeroSectionProps } from "./types/HeroSection.types";
import styles from "./HeroSection.module.scss";
import "@/styles/index.scss";

import RecoBg from "../RecoBg/RecoBg";
import HeroButtons from "../HeroButtons/HeroButtons";
import HighlightText from "../HighLightText/HighLightText";
import heroDesc1x from "@/assets/images/sections/hero/hero-desc-1x.png";
import heroDesc2x from "@/assets/images/sections/hero/hero-desc-2x.png";

const HeroSection = ({ className }: HeroSectionProps) => {
  const combinedClass = className
    ? `${styles.heroSection} ${className}`
    : styles.heroSection;
  return (
    <section className="container">
      <div className={combinedClass}>
        <RecoBg />
        <article className={styles.mainContent}>
          <div className={styles.textField}>
            <h1 className={styles.slogan}>
              <HighlightText>RECO</HighlightText> — це бренд створений з
              любов&#x2019;ю до волосся
            </h1>
            <p className={styles.text}>
              Кожен заслуговує на здорове, сильне та блискуче волосся <br />
              <HighlightText>RECO</HighlightText> — це інструмент, який дарує
              нове життя <br /> вашому волоссю
            </p>
            <HeroButtons />
          </div>
          <figure className={styles.imageContainer}>
            <picture>
              <source srcSet={`${heroDesc1x} 1x, ${heroDesc2x} 2x`} />
              <img
                src={heroDesc1x}
                alt="RECO продукція"
                className={styles.image}
              />
            </picture>
            <figcaption>Інноваційний догляд для вашого волосся</figcaption>
          </figure>
        </article>
      </div>
    </section>
  );
};

export default HeroSection;
