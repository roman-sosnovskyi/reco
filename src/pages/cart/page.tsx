import styles from "./CartPage.module.scss";
import CartItems from "@/components/CartItems/CartItems";
import CartSummary from "@/components/CartSummary/CartSummary";

export default function CartPage() {
  return (
    <main className={styles.cartPage}>
      <h1>КОШИК</h1>
      <div className={styles.cartContainer}>
        <CartItems />
        <CartSummary />
      </div>
    </main>
  );
}
