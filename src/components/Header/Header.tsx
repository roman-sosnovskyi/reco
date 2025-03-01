import styles from "./Header.module.scss";
import { HeaderProps } from "./types/Header.types";
import Logo from "@/components/Image/Image";
import logo1x from "@/assets/images/logo/logo-1x.png";
import logo2x from "@/assets/images/logo/logo-2x.png";
import classNames from "classnames";
import { navigationButtons } from "@/constants/navigationButtons";
import NavButtons from "@/components/NavButtons/NavButton";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import CallButton from "../CallButton/CallButton";
import CartButton from "../CartButton/CartButton";
import { phoneNumber } from "@/constants/contacts";

const Header = ({ className }: HeaderProps) => {
  const combinedClass = classNames(styles.header, className);

  return (
    <header className={combinedClass}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <Logo
            src1x={logo1x}
            src2x={logo2x}
            alt="Логотип компанії RECO"
            size="small"
          />
        </Link>
        <NavBar>
          <NavButtons
            labels={navigationButtons.map((button) => button.title)}
            buttons={navigationButtons}
          />
        </NavBar>
        <div className={styles.active_btns}>
          <Link to={`tel:${phoneNumber}`} className={styles.call_btn}>
            <CallButton phoneNumber={phoneNumber} />
          </Link>
          <Link to="/cart" className={styles.cart_btn}>
            <CartButton />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
