import { FC } from "react";
import { CallButtonProps } from "./types/CallButton.types";
import styles from "./CallButton.module.scss";
import classNames from "classnames";
import Icon from "@/components/Icon/Icon";

const CallButton: FC<CallButtonProps> = ({
  className,
  onClick,
  phoneNumber
}) => {
  const classes = classNames(styles.button, className);

  return (
    <button className={classes} onClick={onClick}>
      <span className={styles.button__text}>{phoneNumber}</span>{" "}
      <Icon
        name="icon-phone"
        size={32}
        color="none"
        stroke="white"
        className={styles.icon}
      />
    </button>
  );
};

export default CallButton;
