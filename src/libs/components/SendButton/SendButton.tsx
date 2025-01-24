import styles from "./SendButton.module.scss";
import { SendButtonProps } from "./types/SendButton.types";

const SendButton = ({ children, className }: SendButtonProps) => {
  const combinedClass = className
    ? `${styles.send_button} ${className}`
    : styles.send_button;
  return <button className={combinedClass}>{children}</button>;
};

export default SendButton;
