import { useCartContext } from "@/hooks/useCartContext";
import styles from "./CartPage.module.scss";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCartContext();

  const total = cart.reduce((acc, item) => {
    const price = item.size ? item.sizes[item.size] : 0;
    return acc + (price || 0) * (item.quantity || 1);
  }, 0);

  return (
    <main className={styles.cartPage}>
      <h1>Shopping Cart</h1>

      <section className={styles.cartItems}>
        <h2>Your Items</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id} className={styles.cartItem}>
                <div>
                  <img src={item.photo} alt={item.name} />
                  <p>{item.name}</p>
                  {item.size && (
                    <>
                      <p>Size: {item.size}</p>
                      <p>Price: ${item.sizes[item.size]}</p>
                    </>
                  )}
                  <p>Quantity: {item.quantity || 1}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item, item.size || "")}
                  className={styles.removeItem}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className={styles.cartSummary}>
        <h2>Summary</h2>
        <p>Total: ${total}</p>
        <button className={styles.clearCart} onClick={clearCart}>
          Clear Cart
        </button>
      </section>

      <section className={styles.checkout}>
        <button className={styles.checkoutButton}>Proceed to Checkout</button>
      </section>
    </main>
  );
}
