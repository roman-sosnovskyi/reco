import BackgroundCircles from "@/components/BackgroundCircles/BackgroundCircles";
import styles from "./CartPage.module.scss";
import CartItems from "@/components/CartItems/CartItems";
import CartSummary from "@/components/CartSummary/CartSummary";
import HighlightText from "@/components/HighLightText/HighLightText";
import "@/styles/index.scss";

export default function CartPage() {
  return (
    <main>
      <section className="container">
        <div className={styles.cartPage}>
          <BackgroundCircles className={styles.backgroundCirclesTop} />
          <h1>
            <HighlightText>КОШИК</HighlightText>
          </h1>
          <div className={styles.cartContainer}>
            <CartItems />
            <CartSummary />
          </div>
          <BackgroundCircles className={styles.backgroundCirclesCenter} />
        </div>
      </section>
    </main>
  );
}
