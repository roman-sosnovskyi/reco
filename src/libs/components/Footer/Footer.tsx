import styles from "./Footer.module.scss";
import { FooterProps } from "./types/Footer.types";
import Logo from "@/libs/components/Image/Image";
import PhoneForm from "@/libs/components/PhoneForm/PhoneForm";
import SocialMediaHub from "@/libs/components/SocialMediaHub/SocialMediaHub";
import SocialMediaBtn from "@/libs/components/SocialMediaBtn/SocialMediaBtn";
import { socialMedia } from "@/conatsnt/socialMedia";
import logo from "@/assets/logo.svg";

const Footer = ({ className }: FooterProps) => {
  const combinedClass = className
    ? `${styles.header} ${className}`
    : styles.header;
  return (
    <footer className={`${combinedClass} ${styles.footer}`}>
      <div className={styles.footer_container}>
        <Logo src={logo} alt="Логотип" size="medium" />
        <PhoneForm />
        <SocialMediaHub>
          {socialMedia.map(({ src, alt, link }) => (
            <SocialMediaBtn
              key={alt}
              icon={<img src={src} alt={alt} />}
              link={link}
              alt={alt}
            />
          ))}
          {/* These are stubs. We are waiting for the component. */}
        </SocialMediaHub>
      </div>
    </footer>
  );
};

export default Footer;
