import styles from "./Header.module.scss";
import { HeaderProps } from "./types/Header.types";
import Button from "../Button/Button";
import phoneBtnImg from "@/assets/phone_btn.svg";
import Logo from "@/libs/components/Image/Image";
import logo from "@/assets/logo.svg";

const Header = ({ className }: HeaderProps) => {
  const combinedClass = className
    ? `${styles.header} ${className}`
    : styles.header;

  const buttonLabels = ["КАТАЛОГ", "ПРО НАС", "ВІДГУКИ", "КОНТАКТИ"];

  return (
    <header className={combinedClass}>
      <div className={styles.container}>
        <div className={styles.logo_container}>
          <Logo src={logo} alt="Логотип" size="medium" />
        </div>
        <div className={styles.nav_btns}>
          {buttonLabels.map((label, index) => (
            <Button key={index} variant="black">
              {label}
            </Button>
          ))}
        </div>
        <div className={styles.active_btns}>
<Button size="l" variant="primary" icon={phoneBtnImg}>
            +380 50 988 33 39
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
