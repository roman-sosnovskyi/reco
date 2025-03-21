import styles from "./error404.module.scss";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span className={styles.four}>4</span>
        <img className={styles.image} src="" alt="" />
        <span className={styles.four}>4</span>
      </div>
      <p className={styles.text}>
        Ой! Ця сторінка явно переживає день неслухняного волосся!
      </p>
      <Link to="/">На головну</Link>
      <Link to="catalog">каталог</Link>
    </div>
  );
};

export default Error404;
