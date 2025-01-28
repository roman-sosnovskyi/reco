import styles from "./Header.module.scss";
import { HeaderProps } from "./types/Header.types";
import Logo from "../Logo/Logo";
import PhoneButton from "../PhoneButton/PhoneButton";
import CartButton from "../CartButton/CartButton";
import Button from "../Button/Button";

const Header = ({ className }: HeaderProps) => {
  const combinedClass = className
    ? `${styles.header} ${className}`
    : styles.header;

  const buttonLabels = ["КАТАЛОГ", "ПРО НАС", "ВІДГУКИ", "КОНТАКТИ"];

  return (
    <header className={combinedClass}>
      <div className={styles.container}>
        <Logo />
        <div className={styles.nav_btns}>
          {buttonLabels.map((label, index) => (
            <Button key={index} variant="black">
              {label}
            </Button>
          ))}
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
