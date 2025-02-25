import classNames from "classnames";
import { FeaturesSectionProps } from "./types/FeaturesSection.types";
import recoil1x from "@/assets/images/sections/features/recoil-desc-1x.png";
import recoil2x from "@/assets/images/sections/features/recoil-desc-2x.png";
import styles from "./FeaturesSection.module.scss";

const FeaturesSection = ({ className }: FeaturesSectionProps) => {
  const classes = classNames(styles.featuresSection, className);

  return (
    <section className={classes}>
      <h2>Особливості продукту</h2>

      <div>
        <article className={styles.featuresArticleLeft}>
          <h3>Ефективність</h3>
          <p>
            <span>Ефективність</span>
            навіть для волосся з 5 ступенем пошкодження
          </p>
        </article>

        <a href="#about">Про нас</a>
      </div>

      <div>
        <picture>
          <source srcSet={`${recoil1x} 1x, ${recoil2x} 2x`} />
          <img src={recoil1x} alt="recoil" />
        </picture>
      </div>

      <div className={styles.featuresArticlesRight}>
        <article className={styles.featuresArticleRightTop}>
          <h3>Простота у використанні:</h3>
          <p>
            Простота у використанні: ідеально підходить як{" "}
            <span>для професійних майстрів</span>, так і
            <span>для домашнього догляду</span>
          </p>
        </article>

        <article className={styles.featuresArticleRightBottom}>
          <h3>Комплексний підхід:</h3>
          <p>
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
