import styles from "./Header.module.scss";
import { HeaderProps } from "./types/Header.types";

const Header = ({ children, className }: HeaderProps) => {
  const combinedClass = className
    ? `${styles.header} ${className}`
    : styles.header;
  return <header className={combinedClass}>{children}</header>;
};

export default Header;
