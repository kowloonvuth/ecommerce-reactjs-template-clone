import React, { createContext, useState, useContext } from 'react';

// Create the CartContext
const CartContext = createContext();

// Custom hook to use CartContext
export const useCart = () => {
    return useContext(CartContext);
};

// CartProvider component to manage cart state
export function CartProvider({ children }) {
    // Initialize cartItems as an empty array
    const [cartItems, setCartItems] = useState([]);

    // Function to add item to the cart
    const addToCart = (item) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((i) => i.id === item.id);
            if (existingItem) {
                // If item already exists in the cart, increase its quantity
                return prevItems.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            } else {
                // If item is new, add it to the cart with quantity 1
                return [...prevItems, { ...item, quantity: 1 }];
            }
        });
    };

    // Function to remove item from the cart by its id
    const removeItem = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    // Calculate the total number of items in the cart
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cartItems, cartCount, addToCart, removeItem }}>
            {children}
        </CartContext.Provider>
    );
}
