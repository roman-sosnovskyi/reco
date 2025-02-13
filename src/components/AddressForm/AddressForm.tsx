import styles from "./AddressForm.module.scss";
import { AddressFormProps } from "./types/AddressForm.types";
import PaymentIcon from "@/assets/visa_mastercard.svg"; // Проверь путь

const AddressForm = ({ className }: AddressFormProps) => {
  const combinedClass = className
    ? `${styles.header} ${className}`
    : styles.header;

  return (
    <div className={`${combinedClass} ${styles.address_form_container}`}>
      <div className={styles.info_item}>
        <strong>Адреса:</strong> м. Запоріжжя,
        <br /> вул. Героїв України 12
      </div>

      <div className={styles.info_item}>
        <a href="tel:+380680001143">+380 68 000 11 43</a>
      </div>

      <div className={styles.info_item}>
        <a href="mailto:beautynails@gmail.com">beautynails@gmail.com</a>
      </div>

      <div className={styles.payment_icon_container}>
        <img
          src={PaymentIcon}
          alt="Visa & Mastercard"
          className={styles.payment_icon}
        />
      </div>
    </div>
  );
};

export default AddressForm;
