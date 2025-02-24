import styles from "./Footer.module.scss";
import { FooterProps } from "./types/Footer.types";
import Logo from "@/components/Image/Image";
import logo1x from "@/assets/images/logo/logo-1x.png";
import logo2x from "@/assets/images/logo/logo-2x.png";
import { Link } from "react-router-dom";
import AddressForm from "../AddressForm/AddressForm";
import SocialMediaHub from "../SocialMediaHub/SocialMediaHub";
import { address, phoneNumber, email } from "@/constants/contacts";
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";

const Footer = ({ className }: FooterProps) => {
  const combinedClass = className
    ? `${styles.header} ${className}`
    : styles.header;
  return (
    <footer className={`${combinedClass} ${styles.footer}`}>
      <div className={styles.footer_container}>
        <Link to="/">
          <Logo
            src1x={logo1x}
            src2x={logo2x}
            alt="Логотип компанії RECO"
            size="medium"
          />
        </Link>{" "}
        <AddressForm
          address={address}
          phoneNumber={phoneNumber}
          email={email}
        />
        <SocialMediaHub>
          <SocialMediaLinks platform={"instagram"} />
          <SocialMediaLinks platform={"viber"} />
          <SocialMediaLinks platform={"telegram"} />
        </SocialMediaHub>
      </div>
    </footer>
  );
};

export default Footer;
