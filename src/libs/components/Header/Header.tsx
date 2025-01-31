import styles from "./Header.module.scss";
import { HeaderProps } from "./types/Header.types";
import Logo from "@/libs/components/Image/Image";
import NavBar from "@/libs/components/NavBar/NavBar";
import logo from "@/assets/logo.svg";

const Header = ({ className }: HeaderProps) => {
  const combinedClass = className
    ? `${styles.header} ${className}`
    : styles.header;
  return (
    <header className={combinedClass}>
      <div className={styles.container}>
        <Logo src={logo} alt="Логотип" size="medium" />
        <NavBar>
          <button className={styles.button}>BUTTON</button>
          <button className={styles.button}>BUTTON</button>
          <button className={styles.button}>BUTTON</button>
          <button className={styles.button}>BUTTON</button>
          {/* These are stubs. We are waiting for the component. */}
        </NavBar>
        <div className={styles.active_btns}></div>
      </div>
    </header>
  );
};

export default Header;
