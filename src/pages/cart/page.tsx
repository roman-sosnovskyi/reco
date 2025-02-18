import { useState } from "react";
import styles from "./CartPage.module.scss"; // Стиль для страницы

export default function CartPage() {
  const [items, setItems] = useState([
    { id: 1, name: "Product 1", price: 20, quantity: 2 },
    { id: 2, name: "Product 2", price: 15, quantity: 1 },
    { id: 3, name: "Product 3", price: 30, quantity: 3 }
  ]);

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleRemoveItem = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setItems([]);
  };

  return (
    <main className={styles.cartPage}>
      <h1>Shopping Cart</h1>

      {/* Секция с товарами в корзине */}
      <section className={styles.cartItems}>
        <h2>Your Items</h2>
        {items.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {items.map((item) => (
              <li key={item.id} className={styles.cartItem}>
                <div>
                  <p>{item.name}</p>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <button
                  onClick={() => handleRemoveItem(item.id)}
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
        <button className={styles.clearCart} onClick={handleClearCart}>
          Clear Cart
        </button>
      </section>

      <section className={styles.checkout}>
        <button className={styles.checkoutButton}>Proceed to Checkout</button>
      </section>
    </main>
  );
}
