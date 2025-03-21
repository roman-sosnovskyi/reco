import FeedbackForm from "../FeedbackForm/FeedbackForm";
import recoilDesc1xPng from "@/assets/images/sections/feedback/recoil-desc-1x.png";
import recoilDesc2xPng from "@/assets/images/sections/feedback/recoil-desc-2x.png";
import recoilDesc1xWebp from "@/assets/images/sections/feedback/recoil-desc-1x.webp";
import recoilDesc2xWebp from "@/assets/images/sections/feedback/recoil-desc-2x.webp";
import "@/styles/index.scss";
import styles from "./FeedbackSection.module.scss";
import BackgroundCircles from "../BackgroundCircles/BackgroundCircles";

const FeedbackSection = () => {
  return (
    <section className="container">
      <div className={styles.feedbackSection}>
        <div className={styles.formCirclesContainer}>
          <div className={styles.formCircles}></div>
        </div>
        <BackgroundCircles className={styles.backgroundCircles} />
        <div className={styles.feedbackArrow}></div>
        <h2 className={styles.feedbackTitle}>
          Залиште свої дані, щоб отримати більше інформації
        </h2>
        <div className={styles.feedbackContent}>
          <FeedbackForm />
          <div className={styles.feedbackImgContainer}>
            <picture>
              <source
                srcSet={`${recoilDesc1xWebp} 1x, ${recoilDesc2xWebp} 2x`}
                type="image/webp"
              />
              <source
                srcSet={`${recoilDesc1xPng} 1x, ${recoilDesc2xPng} 2x`}
                type="image/png"
              />
              <img
                src={recoilDesc1xPng}
                alt="recoil"
                className={styles.feedbackImg}
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
