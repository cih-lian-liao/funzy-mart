import "./CartModal.css";
import { useCart } from "../hooks/useCart.js";
import { useState } from "react";

export default function CartModal() {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateItemQuantity,
    clearCart,
  } = useCart();

  const [notification, setNotification] = useState(null);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  // Show notification
  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  // Handle checkout
  const handleCheckout = async () => {
    if (cartItems.length === 0) {
      showNotification('Your cart is empty!', 'error');
      return;
    }

    setIsCheckingOut(true);
    
    try {
      // Simulate checkout process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real app, this would integrate with payment processing
      showNotification('Order placed successfully! Thank you for your purchase! 🎉', 'success');
      clearCart();
      setIsCartOpen(false);
    } catch (error) {
      showNotification('Checkout failed. Please try again.', 'error');
      console.error('Checkout error:', error);
    } finally {
      setIsCheckingOut(false);
    }
  };

  // Handle quantity update with error handling
  const handleQuantityUpdate = (itemId, newQuantity) => {
    const result = updateItemQuantity(itemId, newQuantity);
    if (!result.success) {
      showNotification(result.message, 'error');
    }
  };

  if (!isCartOpen) return null;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-modal__overlay" onClick={() => setIsCartOpen(false)}>
      <div
        className="cart-modal__container"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {/* Notification */}
        {notification && (
          <div className={`cart-modal__notification cart-modal__notification--${notification.type}`}>
            {notification.message}
          </div>
        )}

        <div className="cart-modal__header">
          <h3>🛒 Your Cart ({cartItems.length} items)</h3>
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
                <div className="cart-modal__item-info">
                  <p className="cart-modal__item-name">{item.name}</p>
                  <p className="cart-modal__item-price">${item.price.toFixed(2)} USD</p>
                  <p className="cart-modal__item-stock">Stock: {item.stock || 'N/A'}</p>
                  <button
                    className="cart-modal__remove"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>

                {/* Quantity controls */}
                <div className="cart-modal__quantity-controls">
                  <button
                    className="cart-modal__quantity-btn"
                    onClick={() => handleQuantityUpdate(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    max={item.stock || 999}
                    className="cart-modal__quantity-input"
                    value={item.quantity}
                    onChange={(e) => {
                      const newQty = parseInt(e.target.value, 10);
                      if (newQty >= 1) {
                        handleQuantityUpdate(item.id, newQty);
                      }
                    }}
                  />
                  <button
                    className="cart-modal__quantity-btn"
                    onClick={() => handleQuantityUpdate(item.id, item.quantity + 1)}
                    disabled={item.quantity >= (item.stock || 999)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="cart-modal__footer">
          <div className="cart-modal__summary">
            <p className="cart-modal__subtotal">
              Subtotal: ${subtotal.toFixed(2)} USD
            </p>
            <p className="cart-modal__tax">
              Tax (8.5%): ${(subtotal * 0.085).toFixed(2)} USD
            </p>
            <p className="cart-modal__total">
              Total: ${(subtotal * 1.085).toFixed(2)} USD
            </p>
          </div>
          <button 
            className="cart-modal__checkout-button"
            onClick={handleCheckout}
            disabled={isCheckingOut || cartItems.length === 0}
          >
            {isCheckingOut ? 'Processing...' : 'Proceed to Checkout'}
          </button>
        </div>
      </div>
    </div>
  );
}
