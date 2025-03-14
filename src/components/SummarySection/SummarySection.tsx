import { Product } from "@/types/types";
import { useCartContext } from "@/hooks/useCartContext";
import styles from "./SummarySection.module.scss";
import { useMemo } from "react";

const SummarySection = () => {
  interface CartItem extends Product {
    size?: string;
    quantity?: number;
  }
  const { cart, decreaseQuantity, addToCart } = useCartContext();
  const handleIncreaseQuantity = (item: CartItem) => {
    addToCart(item, item.size || "");
  };
  const total = useMemo(() => {
    return cart.reduce((acc, item) => {
      const price = item.size ? item.sizes[item.size] : 0;
      return acc + (price || 0) * (item.quantity || 1);
    }, 0);
  }, [cart]);

  const handleDecreaseQuantity = (item: CartItem) => {
    if (item.quantity && item.quantity > 1) {
      decreaseQuantity(item, item.size || "");
    }
  };
  return (
    <section className={styles.cartItems}>
      <h1> ВАШЕ ЗАМОВЛЕННЯ </h1>
      {cart.length === 0 ? (
        <p>**ЗАМОВЛЕННЯ ВІДСУТНЄ**</p>
      ) : (
        <ul className={styles.cartList}>
          {cart.map((item) => (
            <li key={`${item.id}-${item.size}`} className={styles.cartItem}>
              <div className={styles.imageContainer}>
                {" "}
                <img src={item.photo} alt={item.name} />
              </div>
              <div className={styles.infoContainer}>
                <p className={styles.title}>{item.name}</p>

                <div className={styles.controlContainer}>
                  {item.size && (
                    <>
                      <p> {item.size}</p>
                      <div className={styles.quantityControl}>
                        <button
                          onClick={() => handleDecreaseQuantity(item)}
                          className={styles.quantityButton}
                        >
                          -
                        </button>
                        <p>{item.quantity || 1}</p>
                        <button
                          onClick={() => handleIncreaseQuantity(item)}
                          className={styles.quantityButton}
                        >
                          +
                        </button>
                      </div>
                      <p className={styles.price}>
                        {item.sizes[item.size]} грн
                      </p>
                    </>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
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
      <div className={styles.summaryTotal}>
        <h3>Всього</h3>
        <p>₴{total}</p>
      </div>
      <p>(Visa, MasterCard, ApplePay, Google Pay)</p>
    </section>
  );
};

export default SummarySection;
