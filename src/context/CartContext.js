import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    });
  
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  
    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
  
    const addToCart = (product) => {
      setCart((prevCart) => {
        const existingItem = prevCart.find((item) => item.id === product.id);
        if (existingItem) {
          return prevCart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          );
        }
        return [...prevCart, { ...product, quantity: 1 }];
      });
    };
  
    const removeFromCart = (productId) => {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === productId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ).filter((item) => item.quantity > 0)
      );
    };
  
    const deleteFromCart = (productId) => {
      setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, deleteFromCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};
