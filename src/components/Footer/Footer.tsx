import styles from "./Footer.module.scss";
import { FooterProps } from "./types/Footer.types";
import Logo from "@/components/Image/Image";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";
import AddressForm from "../AddressForm/AddressForm";
import SocialMediaHub from "../SocialMediaHub/SocialMediaHub";
import { address, phoneNumber, email } from "@/constants/contacts";

const Footer = ({ className }: FooterProps) => {
  const combinedClass = className
    ? `${styles.header} ${className}`
    : styles.header;
  return (
    <footer className={`${combinedClass} ${styles.footer}`}>
      <div className={styles.footer_container}>
        <Link to="/">
          <Logo src={logo} alt="Логотип компанії RECO" size="medium" />
        </Link>{" "}
        <AddressForm
          address={address}
          phoneNumber={phoneNumber}
          email={email}
        />
        <SocialMediaHub>
          <button></button>
        </SocialMediaHub>
      </div>
    </footer>
  );
};

export default Footer;
