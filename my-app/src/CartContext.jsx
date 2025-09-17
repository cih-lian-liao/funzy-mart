import { useState, useEffect } from "react";
import { CartContext } from "./contexts/CartContext.js";
import { getProductById } from "./data/products.js";

export function CartProvider({ children }) {
  // Load cart from localStorage on initialization
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem('funzymart-cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Save cart to localStorage whenever cartItems changes
  useEffect(() => {
    try {
      localStorage.setItem('funzymart-cart', JSON.stringify(cartItems));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }, [cartItems]);

  const addToCart = (product, quantity = 1) => {
    try {
      // Validate input
      if (!product || !product.id) {
        throw new Error('Invalid product data');
      }
      
      if (quantity <= 0 || !Number.isInteger(quantity)) {
        throw new Error('Invalid quantity');
      }

      // Get current product data to check stock
      const currentProduct = getProductById(product.id);
      if (!currentProduct) {
        throw new Error('Product not found');
      }

      setCartItems((prev) => {
        const existingItem = prev.find((item) => item.id === product.id);
        const currentQuantity = existingItem ? existingItem.quantity : 0;
        const newTotalQuantity = currentQuantity + quantity;

        // Check stock availability
        if (newTotalQuantity > currentProduct.stock) {
          throw new Error(`Only ${currentProduct.stock} items available in stock`);
        }

        if (existingItem) {
          return prev.map((item) =>
            item.id === product.id
              ? { ...item, quantity: newTotalQuantity }
              : item
          );
        } else {
          return [...prev, { ...product, quantity }];
        }
      });

      return { success: true, message: 'Item added to cart successfully' };
    } catch (error) {
      console.error('Error adding to cart:', error);
      return { success: false, message: error.message };
    }
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Clear entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Get cart total
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Get cart item count
  const getCartItemCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  const updateItemQuantity = (id, quantity) => {
    try {
      if (!id) {
        throw new Error('Invalid product ID');
      }
      
      if (quantity < 0 || !Number.isInteger(quantity)) {
        throw new Error('Invalid quantity');
      }

      // Get current product data to check stock
      const currentProduct = getProductById(id);
      if (!currentProduct) {
        throw new Error('Product not found');
      }

      // Check stock availability
      if (quantity > currentProduct.stock) {
        throw new Error(`Only ${currentProduct.stock} items available in stock`);
      }

      setCartItems((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, quantity: quantity } : item
        )
      );

      return { success: true, message: 'Quantity updated successfully' };
    } catch (error) {
      console.error('Error updating cart item quantity:', error);
      return { success: false, message: error.message };
    }
  };


  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    isCartOpen,
    setIsCartOpen,
    updateItemQuantity,
    clearCart,
    getCartTotal,
    getCartItemCount,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
}
