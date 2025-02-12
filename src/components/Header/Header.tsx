import styles from "./Header.module.scss";
import { HeaderProps } from "./types/Header.types";
import Logo from "@/components/Image/Image";
import logo from "@/assets/logo.svg";
import classNames from "classnames";
import { navigationButtons } from "@/conatsnt/navigationButtons";
import NavButtons from "@/components/NavButtons/NavButton";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import CallButton from "../CallButton/CallButton";
import CartButton from "../CartButton/CartButton";

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
          <CallButton className={styles.call_btn} />
          <CartButton className={styles.cart_btn} />
        </div>
      </div>
    </header>
  );
};

export default Header;
