import { FC } from "react";
import { CartButtonProps } from "./types/CartButton.types";
import styles from "./CartButton.module.scss";
import classNames from "classnames";
import cartIcon from "@/assets/cart_btn.svg";

const CartButton: FC<CartButtonProps> = ({ className, onClick = () => {} }) => {
  const classes = classNames(styles.button, className);

  return (
    <button className={classes} onClick={onClick}>
      <img src={cartIcon} alt="Shopping cart" className={styles.button__icon} />
    </button>
  );
};

export default CartButton;
