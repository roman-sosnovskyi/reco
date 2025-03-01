import styles from "./AddressForm.module.scss";
import { AddressFormProps } from "./types/AddressForm.types";
import PaymentIcon from "@/assets/images/sections/footer/visa-mastercard.svg";

const AddressForm = ({
  className,
  phoneNumber,
  email,
  address
}: AddressFormProps) => {
  const combinedClass = className
    ? `${styles.header} ${className}`
    : styles.header;

  const phoneLink = `tel:${phoneNumber}`;
  const mailLink = `mailto:${email}`;

  return (
    <div className={`${combinedClass} ${styles.address_form_container}`}>
      <div className={styles.info_item}>{address}</div>

      <div className={styles.info_item}>
        <a href={phoneLink}>{phoneNumber}</a>
      </div>

      <div className={styles.info_item}>
        <a href={mailLink}>{email}</a>
      </div>

      <div className={styles.payment_icon_container}>
        <img
          src={PaymentIcon}
          alt="Visa and Mastercard payment options"
          className={styles.payment_icon}
        />
      </div>
    </div>
  );
};

export default AddressForm;
