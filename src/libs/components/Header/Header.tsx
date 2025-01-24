import styles from "./Header.module.scss";
import { HeaderProps } from "./types/Header.types";
import Logo from "../Logo/Logo";
import PhoneButton from "../PhoneButton/PhoneButton";
import CartButton from "../CartButton/CartButton";

const Header = ({ className }: HeaderProps) => {
  const combinedClass = className
    ? `${styles.header} ${className}`
    : styles.header;
  return (
    <header className={combinedClass}>
      <div className={styles.container}>
        <Logo />
        <div className={styles.nav_btns}>
          <button className={styles.button}>BUTTON</button>
          <button className={styles.button}>BUTTON</button>
          <button className={styles.button}>BUTTON</button>
          <button className={styles.button}>BUTTON</button>
        </div>
        <div className={styles.active_btns}>
          <PhoneButton />
          <CartButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
