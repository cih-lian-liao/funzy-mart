import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product, quantity = 1) => {
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
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateItemQuantity = (id, quantity) => {
  setCartItems((prev) =>
    prev.map((item) =>
      item.id === id ? { ...item, quantity: quantity } : item
    )
  );
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

export function useCart() {
  return useContext(CartContext);
}
