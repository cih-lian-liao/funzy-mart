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
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

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
      
      // Generate order details
      const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      const tax = subtotal * 0.085;
      const total = subtotal + tax;
      const orderNumber = `FM-${Date.now()}`;
      
      const orderInfo = {
        orderNumber,
        items: cartItems,
        subtotal,
        tax,
        total,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString()
      };
      
      setOrderDetails(orderInfo);
      setShowSuccessScreen(true);
      
      // Clear cart after showing success screen
      clearCart();
    } catch (error) {
      showNotification('Checkout failed. Please try again.', 'error');
      console.error('Checkout error:', error);
    } finally {
      setIsCheckingOut(false);
    }
  };

  // Handle closing success screen
  const handleCloseSuccessScreen = () => {
    setShowSuccessScreen(false);
    setOrderDetails(null);
    setIsCartOpen(false);
  };

  // Handle quantity update with error handling
  const handleQuantityUpdate = (itemId, newQuantity) => {
    const result = updateItemQuantity(itemId, newQuantity);
    if (!result.success) {
      showNotification(result.message, 'error');
    }
  };

  if (!isCartOpen) return null;

  // Show success screen if checkout was successful
  if (showSuccessScreen && orderDetails) {
    return (
      <div className="cart-modal__overlay" onClick={handleCloseSuccessScreen}>
        <div
          className="cart-modal__success-container"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="cart-modal__success-content">
            <h2 className="cart-modal__success-title">Order Placed Successfully!</h2>
            <p className="cart-modal__success-message">
              Thank you for your purchase! Your order has been confirmed.
            </p>
            
            <div className="cart-modal__order-details">
              <h3>Order Details</h3>
              <div className="cart-modal__order-info">
                <p><strong>Order Number:</strong> {orderDetails.orderNumber}</p>
                <p><strong>Date:</strong> {orderDetails.date}</p>
                <p><strong>Time:</strong> {orderDetails.time}</p>
              </div>
              
              <div className="cart-modal__order-items">
                <h4>Items Ordered:</h4>
                {orderDetails.items.map((item) => (
                  <div key={item.id} className="cart-modal__order-item">
                    <img src={item.img} alt={item.name} className="cart-modal__order-item-img" />
                    <div className="cart-modal__order-item-info">
                      <p className="cart-modal__order-item-name">{item.name}</p>
                      <p className="cart-modal__order-item-qty">Qty: {item.quantity}</p>
                      <p className="cart-modal__order-item-price">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="cart-modal__order-summary">
                <p><strong>Subtotal:</strong> ${orderDetails.subtotal.toFixed(2)}</p>
                <p><strong>Tax:</strong> ${orderDetails.tax.toFixed(2)}</p>
                <p className="cart-modal__order-total"><strong>Total:</strong> ${orderDetails.total.toFixed(2)}</p>
              </div>
            </div>
            
            <div className="cart-modal__success-actions">
              <button 
                className="cart-modal__continue-shopping"
                onClick={handleCloseSuccessScreen}
              >
                Continue Shopping
              </button>
              <button 
                className="cart-modal__view-orders"
                onClick={handleCloseSuccessScreen}
              >
                View Order History
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
