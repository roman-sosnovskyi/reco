import styles from "./Footer.module.scss";
import { FooterProps } from "./types/Footer.types";
import Logo from "@/components/Image/Image";
import AddressForm from "../AddressForm/AddressForm";
import logo from "@/assets/logo.svg";
import SocialMediaHub from "../SocialMediaHub/SocialMediaHub";

const Footer = ({ className }: FooterProps) => {
  const combinedClass = className
    ? `${styles.header} ${className}`
    : styles.header;
  return (
    <footer className={`${combinedClass} ${styles.footer}`}>
      <div className={styles.footer_container}>
        <Logo src={logo} alt="Логотип" size="medium" />
        <AddressForm />
        <SocialMediaHub>
          <button></button>
        </SocialMediaHub>
      </div>
    </footer>
  );
};

export default Footer;
