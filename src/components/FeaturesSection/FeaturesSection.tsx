import classNames from "classnames";
import { FeaturesSectionProps } from "./types/FeaturesSection.types";
import recoil1xPng from "@/assets/images/sections/features/recoil-desc-1x.png";
import recoil1xWebp from "@/assets/images/sections/features/recoil-desc-1x.webp";
import recoil2xPng from "@/assets/images/sections/features/recoil-desc-2x.png";
import recoil2xWebp from "@/assets/images/sections/features/recoil-desc-2x.webp";
import styles from "./FeaturesSection.module.scss";
import HighlightText from "../HighLightText/HighLightText";

const FeaturesSection = ({ className }: FeaturesSectionProps) => {
  const classes = classNames(styles.featuresSection, className);

  return (
    <section className="container">
      <div className={classes}>
        <h2>Особливості продукту</h2>
        <div className={styles.featuresLeftSide}>
          <div className={styles.featuresArticleContainer}>
            <article className={styles.featuresArticleLeft}>
              <h3>Ефективність</h3>
              <p className={styles.featuresArticleLeftText}>
                <HighlightText>Ефективність </HighlightText>
                навіть для волосся з 5 ступенем пошкодження
              </p>
            </article>
          </div>
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
            <img
              src={recoil1xPng}
              alt="recoil"
              className={styles.featuresImg}
            />
          </picture>
        </div>
        <div className={styles.featuresRightSide}>
          <div className={styles.featuresArticleContainer}>
            <article className={styles.featuresArticleRightTop}>
              <h3>Простота у використанні</h3>
              <p className={styles.featuresArticleRightTopText}>
                Простота у використанні: ідеально підходить як{" "}
                <HighlightText>для професійних майстрів</HighlightText>, так і
                <HighlightText> для домашнього догляду</HighlightText>
              </p>
            </article>
          </div>
          <div className={styles.featuresArticleContainer}>
            <article className={styles.featuresArticleRightBottom}>
              <h3>Комплексний підхід</h3>
              <p className={styles.featuresArticleRightBottomText}>
                Комплексний підхід: <HighlightText>RECO</HighlightText> не лише
                відновлює, але й забезпечує{" "}
                <HighlightText>захист, зволоження та живлення</HighlightText>{" "}
                завдяки лінійці продуктів
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
