import { useState } from "react";
import { CartContext } from "./contexts/CartContext.js";

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product, quantity = 1) => {
    try {
      // Validate input
      if (!product || !product.id) {
        throw new Error('Invalid product data');
      }
      
      if (quantity <= 0 || !Number.isInteger(quantity)) {
        throw new Error('Invalid quantity');
      }

      setCartItems((prev) => {
        const existingItem = prev.find((item) => item.id === product.id);
        if (existingItem) {
          return prev.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        } else {
          return [...prev, { ...product, quantity }];
        }
      });
    } catch (error) {
      console.error('Error adding to cart:', error);
      // Can add user notification here
    }
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateItemQuantity = (id, quantity) => {
    try {
      if (!id) {
        throw new Error('Invalid product ID');
      }
      
      if (quantity < 0 || !Number.isInteger(quantity)) {
        throw new Error('Invalid quantity');
      }

      setCartItems((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, quantity: quantity } : item
        )
      );
    } catch (error) {
      console.error('Error updating cart item quantity:', error);
    }
  };


  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    isCartOpen,
    setIsCartOpen,
    updateItemQuantity,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
}
