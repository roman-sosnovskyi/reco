import { FC } from "react";
import { CartButtonProps } from "./types/CartButton.types";
import styles from "./CartButton.module.scss";
import classNames from "classnames";
import Icon from "@/components/Icon/Icon";

const CartButton: FC<CartButtonProps> = ({ className, onClick = () => {} }) => {
  const classes = classNames(styles.button, className);

  return (
    <button className={classes} onClick={onClick}>
      <Icon
        name="icon-cart"
        size={40}
        color="none"
        stroke="black"
        className={styles.icon}
      />
    </button>
  );
};

export default CartButton;
