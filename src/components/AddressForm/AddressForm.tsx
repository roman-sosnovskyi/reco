import styles from "./AddressForm.module.scss";
import { AddressFormProps } from "./types/AddressForm.types";
import PaymentIcon from "@/assets/visa_mastercard.svg";

const AddressForm = ({
  className,
  phoneNumber,
  email,
  address
}: AddressFormProps) => {
  const combinedClass = className
    ? `${styles.header} ${className}`
    : styles.header;

  return (
    <div className={`${combinedClass} ${styles.address_form_container}`}>
      <div className={styles.info_item}>{address}</div>

      <div className={styles.info_item}>
        <a href="tel:+380680001143">{phoneNumber}</a>
      </div>

      <div className={styles.info_item}>
        <a href="mailto:beautynails@gmail.com">{email}</a>
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
