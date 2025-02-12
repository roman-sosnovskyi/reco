import { FC } from "react";
import { CallButtonProps } from "./types/CallButton.types";
import styles from "./CallButton.module.scss";
import classNames from "classnames";
import phoneIcon from "@/assets/phone_btn.svg";

const CallButton: FC<CallButtonProps> = ({ className, onClick }) => {
  const classes = classNames(styles.button, className);

  return (
    <button className={classes} onClick={onClick}>
      <span className={styles.button__text}>+380 50 988 33 39</span>
      <img src={phoneIcon} alt="icon" className={styles.button__icon} />
    </button>
  );
};

export default CallButton;
