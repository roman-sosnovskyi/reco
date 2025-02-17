import FeedbackForm from "../FeedbackForm/FeedbackForm";

import styles from "./FeedbackSection.module.scss";

const FeedbackSection = () => {
  return (
    <section className={styles.feedbackSection}>
      <h2 className={styles.feedbackTitle}>
        Залиште свої дані, щоб отримати більше інформації
      </h2>
      <div className={styles.feedbackContent}>
        <FeedbackForm />
        <div className={styles.feedbackImgContainer}></div>
      </div>
    </section>
  );
};

export default FeedbackSection;
