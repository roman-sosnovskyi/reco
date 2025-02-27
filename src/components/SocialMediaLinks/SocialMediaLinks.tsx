import React from "react";
import { SocialMediaIconProps } from "./types/SocialMediaLinks.types";
import instagram from "@/assets/icon/instagram.svg";
import telegram from "@/assets/icon/telegram.svg";
import viber from "@/assets/icon/viber.svg";
import styles from "./SocialMediaLinks.module.scss";

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({
  platform,
  size = 64
}) => {
  let iconSrc;
  let link = "";

  switch (platform) {
    case "instagram":
      iconSrc = instagram;
      link = "https://www.instagram.com";
      break;
    case "telegram":
      iconSrc = telegram;
      link = "https://t.me";
      break;
    case "viber":
      iconSrc = viber;
      link = "https://www.viber.com";
      break;
    default:
      iconSrc = instagram;
      link = "https://www.instagram.com";
  }

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img
        src={iconSrc}
        alt={`${platform} icon`}
        width={size}
        height={size}
        className={styles.icon}
      />
    </a>
  );
};

export default SocialMediaIcon;
