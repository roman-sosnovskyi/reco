import FeedbackForm from "../FeedbackForm/FeedbackForm";
import recoilDesc1x from "../../assets/FeedbackSection/recoil-desc-1x.png";
import recoilDesc2x from "../../assets/FeedbackSection/recoil-desc-2x.png";

import styles from "./FeedbackSection.module.scss";

const FeedbackSection = () => {
  return (
    <section className={styles.feedbackSection}>
      <h2 className={styles.feedbackTitle}>
        Залиште свої дані, щоб отримати більше інформації
      </h2>
      <div className={styles.feedbackContent}>
        <FeedbackForm />
        <div className={styles.feedbackImgContainer}>
          <picture>
            <source srcSet={`${recoilDesc1x} 1x, ${recoilDesc2x} 2x`} />
            <img src={recoilDesc1x} alt="recoil" />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
