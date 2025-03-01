import styles from "./CartPage.module.scss";
import CartItems from "@/components/CartItems/CartItems";
import CartSummary from "@/components/CartSummary/CartSummary";
import HighlightText from "@/components/HighLightText/HighLightText";

export default function CartPage() {
  return (
    <main className={styles.cartPage}>
      <h1>
        <HighlightText>КОШИК</HighlightText>
      </h1>
      <div className={styles.cartContainer}>
        <CartItems />
        <CartSummary />
      </div>
    </main>
  );
}
