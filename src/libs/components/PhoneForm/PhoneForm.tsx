import styles from "./PhoneForm.module.scss";
import { PhoneFormProps } from "./types/PhoneForm.types";
import SendButton from "@/libs/components/SendButton/SendButton";
import sendBtnImg from "@/assets/send_button.svg";

const PhoneForm = ({ className }: PhoneFormProps) => {
  return (
    <form className={`${styles.phone_form_container} ${className}`}>
      <span className={styles.form_text}>Номер телефону</span>
      <input
        className={styles.phone_input}
        type="tel"
        placeholder="+380 __ ___ __ __"
      />
      <SendButton className={styles.send_button}>
        <img
          className={styles.send_button_image}
          src={sendBtnImg}
          alt="Отправить"
        />
      </SendButton>
    </form>
  );
};

export default PhoneForm;
