import { CartButtonProps } from "./types/CartButton.types";
import styles from "./CartButton.module.scss";
import cartBtn from "@/assets/cart_btn.svg";
const CartButton = ({ className }: CartButtonProps) => {
  return (
    <button className={`${styles.cart_button} ${className}`}>
      <img className={styles.cart_btn_image} src={cartBtn} alt="Cart button" />
    </button>
  );
};

export default CartButton;
