import { RecoBgProps } from "./types/RecoBg.types";
import styles from "./RecoBg.module.scss";

const RecoBg = ({ className, children }: RecoBgProps) => {
  const combinedClass = className
    ? `${styles.background} ${className}`
    : styles.background;
  return (
    <div className={combinedClass}>
      <div className={styles.wordLayer} style={{ zIndex: 7 }}>
        RECO
      </div>
      <div className={styles.wordLayer} style={{ zIndex: 6 }}>
        RECO
      </div>
      <div className={styles.wordLayer} style={{ zIndex: 5 }}>
        RECO
      </div>
      <div className={styles.wordLayer} style={{ zIndex: 4 }}>
        RECO
      </div>
      <div className={styles.wordLayer} style={{ zIndex: 3 }}>
        RECO
      </div>
      <div className={styles.wordLayer} style={{ zIndex: 2 }}>
        RECO
      </div>
      <div className={styles.wordLayer} style={{ zIndex: 1 }}>
        RECO
      </div>
      {children}
    </div>
  );
};

export default RecoBg;
