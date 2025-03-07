import { NavBarProps } from "./types/NavBar.types";
import styles from "./NavBar.module.scss";

const NavBar = ({ children, className }: NavBarProps) => {
  const combinedClass = className
    ? `${className} ${styles.navBar}`
    : styles.navBar;
  return <nav className={combinedClass}>{children}</nav>;
};

export default NavBar;
