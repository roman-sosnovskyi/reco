import { useEffect } from "react";
import "@/styles/index.scss";
import styles from "./Insta.module.scss";
import BackgroundCircles from "../BackgroundCircles/BackgroundCircles";

const InstagramWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="container">
      <div className={styles.instaContaoner}>
        <BackgroundCircles className={styles.backgroundCircles} />
        <div
          className="elfsight-app-ca342234-6376-4789-98da-cfb5f70544ae"
          data-elfsight-app-lazy
        ></div>
      </div>
    </div>
  );
};

export default InstagramWidget;
