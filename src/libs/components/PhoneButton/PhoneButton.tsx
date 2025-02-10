import { PhoneButtonProps } from "./types/PhoneButton.types";
import styles from "./PhoneButton.module.scss";
import phoneBtn from "@/assets/phone_btn.svg";
const PhoneButton = ({ className }: PhoneButtonProps) => {
  return (
    <div className={`${styles.phone_btn_container} ${className}`}>
      <span className={styles.phone_number}> +380 50 988 33 39</span>
      <button className={styles.phone_button}>
        <img
          className={styles.phone_btn_image}
          src={phoneBtn}
          alt="Phone button"
        />
      </button>
    </div>
  );
};

export default PhoneButton;
