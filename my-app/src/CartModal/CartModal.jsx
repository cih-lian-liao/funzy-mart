import "./CartModal.css";
import { useCart } from "../CartContext.jsx";

export default function CartModal() {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateItemQuantity,
  } = useCart();

  if (!isCartOpen) return null;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-modal__overlay" onClick={() => setIsCartOpen(false)}>
      <div
        className="cart-modal__container"
        onClick={(e) => e.stopPropagation()} // 防止點 Modal 裡面就關掉
      >
        <div className="cart-modal__header">
          <h3>🛒 Your Cart</h3>
          <button
            className="cart-modal__close-button"
            onClick={() => setIsCartOpen(false)}
          >
            close
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="cart-modal__items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-modal__item">
                <img src={item.img} alt={item.name} />
                <div>
                  <p>{item.name}</p>
                  <p>${item.price.toFixed(2)} USD</p>
                  <button
                    className="cart-modal__remove"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>

                {/* ✅ 新增數量輸入欄位 */}
                <input
                  type="number"
                  min="1"
                  className="cart-modal__quantity-input"
                  value={item.quantity}
                  onChange={(e) => {
                    const newQty = parseInt(e.target.value, 10);
                    if (newQty >= 1) {
                      updateItemQuantity(item.id, newQty);
                    }
                  }}
                />
              </div>
            ))}
          </div>
        )}

        <div className="cart-modal__footer">
          <p className="cart-modal__subtotal">
            Subtotal: ${subtotal.toFixed(2)} USD
          </p>
          <button className="cart-modal__checkout-button">Checkout</button>
        </div>
      </div>
    </div>
  );
}
