import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (plant) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === plant.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === plant.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        return [...prevItems, { ...plant, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (id, change) => {
    setCartItems(prevItems => {
      return prevItems
        .map(item => 
          item.id === id 
            ? { ...item, quantity: item.quantity + change } 
            : item
        )
        .filter(item => item.quantity > 0);
    });
  };

  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalCost = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  const value = {
    cartItems,
    totalItems,
    totalCost,
    addToCart,
    updateQuantity,
    removeItem
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}