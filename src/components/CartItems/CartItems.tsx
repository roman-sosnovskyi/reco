import { Product } from "@/types/types";
import { useCartContext } from "@/hooks/useCartContext";
import HighlightText from "@/components/HighLightText/HighLightText";
import styles from "./CartItems.module.scss";

const CartItems = () => {
  interface CartItem extends Product {
    size?: string;
    quantity?: number;
  }
  const { cart, removeFromCart, decreaseQuantity, addToCart } =
    useCartContext();
  const handleIncreaseQuantity = (item: CartItem) => {
    addToCart(item, item.size || "");
  };

  const handleDecreaseQuantity = (item: CartItem) => {
    if (item.quantity && item.quantity > 1) {
      decreaseQuantity(item, item.size || "");
    }
  };
  return (
    <section className={styles.cartItems}>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className={styles.cartList}>
          {cart.map((item) => (
            <li key={`${item.id}-${item.size}`} className={styles.cartItem}>
              <div className={styles.imageContainer}>
                {" "}
                <img src={item.photo} alt={item.name} />
              </div>
              <div className={styles.infoContainer}>
                <HighlightText>
                  <p className={styles.title}>{item.name}</p>
                </HighlightText>
                <p className={styles.description}>{item.description}</p>

                <div className={styles.controlContainer}>
                  {item.size && (
                    <>
                      <p> {item.size}</p>
                      <p className={styles.price}>
                        {item.sizes[item.size]} грн
                      </p>
                    </>
                  )}
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
                </div>
              </div>
              <div className={styles.removeContainer}>
                <button
                  onClick={() => removeFromCart(item, item.size || "")}
                  className={styles.removeItem}
                >
                  X
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default CartItems;
