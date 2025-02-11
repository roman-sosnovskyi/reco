import styles from "./Footer.module.scss";
import { FooterProps } from "./types/Footer.types";
import Logo from "@/libs/components/Image/Image";
import PhoneForm from "@/libs/components/PhoneForm/PhoneForm";
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
      </div>
    </footer>
  );
};

export default Footer;
