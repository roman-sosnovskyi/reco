import styles from "./Footer.module.scss";
import { FooterProps } from "./types/Footer.types";
import Logo from "../Logo/Logo";
import PhoneForm from "../PhoneForm/PhoneForm";
const Footer = ({ className }: FooterProps) => {
  const combinedClass = className
    ? `${styles.header} ${className}`
    : styles.header;
  return (
    <footer className={`${combinedClass} ${styles.footer}`}>
      <div className={styles.footer_container}>
        <Logo />
        <PhoneForm />
      </div>
    </footer>
  );
};

export default Footer;
