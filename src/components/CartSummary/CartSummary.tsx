import { useMemo } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import styles from "./CartSummary.module.scss";
import { useCartContext } from "@/hooks/useCartContext";

const CartSummary = () => {
  const { cart } = useCartContext();
  const navigate = useNavigate();
  const location = useLocation();

  const total = useMemo(() => {
    return cart.reduce((acc, item) => {
      const price = item.size ? item.sizes[item.size] : 0;
      return acc + (price || 0) * (item.quantity || 1);
    }, 0);
  }, [cart]);

  const handleContinueShopping = () => {
    navigate(location.state?.from || "/");
  };

  return (
    <section className={styles.cartSummary}>
      <div className={styles.summaryContainer}>
        <h2 className={styles.summaryHeader}>ПІДСУМОК КОШИКА</h2>
        <div className={styles.totalPrice}>
          <p>Проміжний підсумок: </p>
          <p>₴{total}</p>
        </div>
        <div className={styles.summaryDelyvery}>
          <h3 className={styles.deliveryHeader}> Доставка</h3>
          <div className={styles.deliveryOptions}>
            <div className={styles.deliveryOption}>
              <input type="radio" name="delivery" id="delivery-standard" />
              <label
                className={styles.deliveryOptionDescription}
                htmlFor="delivery-standard"
              >
                Стандартна доставка
              </label>
            </div>
            <div className={styles.deliveryOption}>
              <input type="radio" name="delivery" id="delivery-express" />
              <label
                className={styles.deliveryOptionDescription}
                htmlFor="delivery-express"
              >
                Експрес доставка
              </label>
            </div>
          </div>
        </div>
        <div className={styles.summaryTotal}>
          <h3>Всього</h3>
          <p>₴{total}</p>
        </div>
      </div>
      <Link to="/summary" className={styles.checkoutButton}>
        ОФОРМИТИ ЗАМОВЛЕННЯ
      </Link>
      <button
        className={styles.continueShoppingButton}
        onClick={handleContinueShopping}
      >
        ПРОДОВЖИТИ ПОКУПКИ
      </button>
    </section>
  );
};

export default CartSummary;
