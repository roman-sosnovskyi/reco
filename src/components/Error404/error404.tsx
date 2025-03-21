import styles from "./error404.module.scss";
import { Link } from "react-router-dom";
import Icon from "@/components/Icon/Icon";
import reco1x from "@/assets/images/sections/error/reco-every_day-1x.png";
import reco2x from "@/assets/images/sections/error/reco-every_day-2x.png";
import BackgroundCircles from "../BackgroundCircles/BackgroundCircles";

const Error404 = () => {
  return (
    <div className={styles.container}>
      <BackgroundCircles className={styles.backgroundCirclesLeft} />

      <div className={styles.placeholder}>
        <div className={styles.title}>
          <span className={styles.four}>4</span>
          <picture>
            <source srcSet={`${reco1x} 1x, ${reco2x} 2x`} />
            <img src={reco1x} alt="RECO продукція" className={styles.image} />
          </picture>
          <span className={styles.four}>4</span>
        </div>
        <p className={styles.text}>
          Ой! Ця сторінка явно переживає день неслухняного волосся!
        </p>
        <div className={styles.btnContainer}>
          <Link className={styles.homeBtn} to="/">
            <div className={styles.iconContainer}>
              <Icon
                name="icon-arrow-up-right2"
                fill="white"
                stroke="none"
                className={styles.homeBtnIcon}
              />
            </div>
            <span className={styles.homeBtnText}> Назад до головної</span>
          </Link>
          <Link className={styles.catalogBtn} to="/catalog">
            каталог
          </Link>
        </div>
      </div>
      <BackgroundCircles className={styles.backgroundCirclesRight} />
    </div>
  );
};

export default Error404;
