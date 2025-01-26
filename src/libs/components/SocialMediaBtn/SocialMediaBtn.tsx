import styles from "./SocialMediaBtn.module.scss";
import { SocialMediaBtnProps } from "./types/SocialMediaBtn.types";

const SocialMediaBtn = ({ className, icon, ...props }: SocialMediaBtnProps) => {
  const combinedClass = className
    ? `${styles.social_media_button} ${className}`
    : styles.social_media_button;
  return (
    <button {...props} className={combinedClass}>
      {icon && <span className="icon-wrapper">{icon}</span>}
    </button>
  );
};

export default SocialMediaBtn;
