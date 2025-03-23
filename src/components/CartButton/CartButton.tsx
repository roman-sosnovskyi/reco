import { FC } from "react";
import { CartButtonProps } from "./types/CartButton.types";
import styles from "./CartButton.module.scss";
import classNames from "classnames";
import Icon from "@/components/Icon/Icon";
import { useCartContext } from "@/hooks/useCartContext";

const CartButton: FC<CartButtonProps> = ({ className, onClick = () => {} }) => {
  const { cart } = useCartContext();
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const classes = classNames(styles.button, className, {
    [styles.disabled]: totalItems === 0
  });

  return (
    <button className={classes} onClick={onClick} disabled={totalItems === 0}>
      <Icon name="icon-cart" stroke="black" size={25} className={styles.icon} />
      {totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}
    </button>
  );
};

export default CartButton;
