import styles from "./Header.module.scss";
import { HeaderProps } from "./types/Header.types";
import Button from "../Button/Button";
import phoneBtnImg from "@/assets/phone_btn.svg";
import Logo from "@/components/Image/Image";
import logo from "@/assets/logo.svg";
import classNames from "classnames";
import { navigationButtons } from "@/conatsnt/navigationButtons";
import NavButtons from "@/components/NavButtons/NavButton";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";

const Header = ({ className }: HeaderProps) => {
  const combinedClass = classNames(styles.header, className);

  return (
    <header className={combinedClass}>
      <div className={styles.container}>
        <Link to="/">
          <Logo src={logo} alt="Логотип компанії RECO" size="medium" />
        </Link>{" "}
        <NavBar>
          <NavButtons
            labels={navigationButtons.map((button) => button.title)}
            buttons={navigationButtons}
          />
        </NavBar>
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
