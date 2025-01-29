import React from "react";
import styles from "./SocialMediaBtn.module.scss";
import { SocialMediaBtnProps } from "./types/SocialMediaBtn.types";

const SocialMediaBtn: React.FC<SocialMediaBtnProps> = ({
  onClick,
  disabled,
  className,
  icon,
  link,
  alt
}) => {
  const combinedClass = className
    ? `${styles.social_media_button} ${className}`
    : styles.social_media_button;

  const buttonContent = (
    <button
      onClick={onClick}
      disabled={disabled}
      className={combinedClass}
      aria-label={alt}
    >
      {icon}
    </button>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {buttonContent}
    </a>
  ) : (
    buttonContent
  );
};

export default SocialMediaBtn;
