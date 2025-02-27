import styles from "./CartSummary.module.scss";
import { useCartContext } from "@/hooks/useCartContext";

const CartSummary = () => {
  const { cart } = useCartContext();

  const total = cart.reduce((acc, item) => {
    const price = item.size ? item.sizes[item.size] : 0;
    return acc + (price || 0) * (item.quantity || 1);
  }, 0);
  return (
    <section className={styles.cartSummary}>
      <div className={styles.summaryContainer}>
        <div className={styles.summryText}>
          <h2>ПІДСУМОК КОШИКА</h2>
          <p>Проміжний підсумок: ₴{total}</p>
        </div>
        <div className={styles.summaryDelyvery}>
          <h3> Доставка</h3>
          <input type="radio" name="" id="" />
          <input type="radio" name="" id="" />
        </div>
        <div className={styles.summaryTotal}>
          <h3>Всього</h3>
          <p>₴{total}</p>
        </div>
      </div>
      <button className={styles.checkoutButton}>ОФОРМИТИ ЗАМОВЛЕННЯ</button>
      <button className={styles.checkoutButton}>ПРОДОВЖИТИ ПОКУПКИ</button>
    </section>
  );
};

export default CartSummary;
