import styles from "./Header.module.scss";
import { FooterProps } from "./types/Footer.types";
const Footer = ({ children, className }: FooterProps) => {
  const combinedClass = className
    ? `${styles.header} ${className}`
    : styles.header;
  return <footer className={combinedClass}>{children}</footer>;
};

export default Footer;
