import { SocialMediaHubProps } from "./types/SocialMediaHub.types";
import styles from "./SocialMediaHub.module.scss";

const SocialMediaHub = ({
  children,
  className,
  ...props
}: SocialMediaHubProps) => {
  const combinedClass = className
    ? `${styles.social_media_hub} ${className}`
    : styles.social_media_hub;
  return (
    <div {...props} className={combinedClass}>
      {children}
    </div>
  );
};

export default SocialMediaHub;
