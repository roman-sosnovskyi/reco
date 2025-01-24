import logo from "@/assets/logo.svg";
import { LogoProps } from "./types/Logo.types";
import styles from "./Logo.module.scss";

const Logo = ({ className }: LogoProps) => {
  return (
    <div>
      <img src={logo} alt="logo" className={`${className} ${styles.logo}`} />
    </div>
  );
};

export default Logo;
