import { useCartContext } from "@/hooks/useCartContext";
import styles from "./SummarySection.module.scss";
import { useMemo } from "react";

const SummarySection = () => {
  const { cart } = useCartContext();

  const total = useMemo(() => {
    return cart.reduce((acc, item) => {
      const price = item.size && item.sizes ? item.sizes[item.size] || 0 : 0;
      return acc + price * (item.quantity || 1);
    }, 0);
  }, [cart]);

  return (
    <section className={styles.cartItems}>
      <h1 className={styles.header}>ВАШЕ ЗАМОВЛЕННЯ</h1>
      {cart.length === 0 ? (
        <p>ЗАМОВЛЕННЯ ВІДСУТНЄ</p>
      ) : (
        <ul className={styles.cartList}>
          {cart.map((item) => (
            <li
              key={`${item.id}-${item.size || "default"}`}
              className={styles.cartItem}
            >
              <div className={styles.imageContainer}>
                <img src={item.photo} alt={item.name} />
              </div>
              <div className={styles.infoContainer}>
                <p className={styles.title}>{item.name}</p>
                <div className={styles.controlContainer}>
                  {item.size ? (
                    <>
                      <p>{item.size}</p>
                      <p className={styles.quantity}>{item.quantity || 1} шт</p>
                      <p className={styles.price}>
                        {item.sizes[item.size]} грн
                      </p>
                    </>
                  ) : (
                    <p className={styles.price}>{item.price} грн</p>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className={styles.deliveryOptions}>
        <p>Доставка</p>
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
      <div className={styles.summaryTotal}>
        <h3>Загалом</h3>
        <p>₴{total}</p>
      </div>
      <p className={styles.summaryTotal}>Оплата карткою</p>
      <p className={styles.summaryPaymentMethods}>
        (Visa, MasterCard, ApplePay, Google Pay)
      </p>
      <div className={styles.buttonPlaceholder}>
        <button
          type="submit"
          form="summaryForm"
          className={styles.checkoutButton}
        >
          Підтвердити замовлення
        </button>
      </div>
    </section>
  );
};

export default SummarySection;
