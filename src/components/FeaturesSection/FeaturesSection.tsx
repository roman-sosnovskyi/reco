import classNames from "classnames";
import { FeaturesSectionProps } from "./types/FeaturesSection.types";
import recoil1xPng from "@/assets/images/sections/features/recoil-desc-1x.png";
import recoil1xWebp from "@/assets/images/sections/features/recoil-desc-1x.webp";
import recoil2xPng from "@/assets/images/sections/features/recoil-desc-2x.png";
import recoil2xWebp from "@/assets/images/sections/features/recoil-desc-2x.webp";
import styles from "./FeaturesSection.module.scss";

const FeaturesSection = ({ className }: FeaturesSectionProps) => {
  const classes = classNames(styles.featuresSection, className);

  return (
    <section className={classes}>
      <h2>Особливості продукту</h2>

      <div className={styles.featuresLeftSide}>
        <article className={styles.featuresArticleLeft}>
          <h3>Ефективність</h3>
          <p className={styles.featuresArticleLeftText}>
            <span>Ефективність</span>
            навіть для волосся з 5 ступенем пошкодження
          </p>
        </article>

        <a href="#about">Про нас</a>
      </div>

      <div className={styles.featuresImgContainer}>
        <picture>
          <source
            srcSet={`${recoil1xWebp} 1x, ${recoil2xWebp} 2x`}
            type="image/webp"
          />
          <source
            srcSet={`${recoil1xPng} 1x, ${recoil2xPng} 2x`}
            type="image/png"
          />
          <img src={recoil1xPng} alt="recoil" className={styles.featuresImg} />
        </picture>
      </div>

      <div className={styles.featuresArticlesRight}>
        <article className={styles.featuresArticleRightTop}>
          <h3>Простота у використанні:</h3>
          <p className={styles.featuresArticleRightTopText}>
            Простота у використанні: ідеально підходить як{" "}
            <span>для професійних майстрів</span>, так і
            <span>для домашнього догляду</span>
          </p>
        </article>

        <article className={styles.featuresArticleRightBottom}>
          <h3>Комплексний підхід:</h3>
          <p className={styles.featuresArticleRightBottomText}>
            Комплексний підхід: RECO не лише відновлює, але й забезпечує{" "}
            <span>захист, зволоження та живлення</span> завдяки лінійці
            продуктів
          </p>
        </article>
      </div>
    </section>
  );
};

export default FeaturesSection;
