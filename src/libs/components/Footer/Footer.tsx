import styles from "./Footer.module.scss";
import { FooterProps } from "./types/Footer.types";
import Logo from "../Logo/Logo";
import PhoneForm from "../PhoneForm/PhoneForm";
import SocialMediaHub from "../SocialMediaHub/SocialMediaHub";
import SocialMediaBtn from "../SocialMediaBtn/SocialMediaBtn";
import instagram from "@/assets/instagram.svg";
import telegram from "@/assets/telegram.svg";
import viber from "@/assets/viber.svg";
const Footer = ({ className }: FooterProps) => {
  const combinedClass = className
    ? `${styles.header} ${className}`
    : styles.header;
  return (
    <footer className={`${combinedClass} ${styles.footer}`}>
      <div className={styles.footer_container}>
        <Logo />
        <PhoneForm />
        <SocialMediaHub>
          <SocialMediaBtn icon={<img src={instagram} alt="Instagram" />} />
          <SocialMediaBtn icon={<img src={telegram} alt="Telegram" />} />
          <SocialMediaBtn icon={<img src={viber} alt="Viber" />} />
        </SocialMediaHub>
      </div>
    </footer>
  );
};

export default Footer;
