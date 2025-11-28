import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);

    const addToCart = (quantity) => {
        setCartCount(prevCount => prevCount + quantity);

    };

    const removeFromCart = (quantity) => {
        setCartCount(prevCount => Math.max(prevCount - quantity, 0));
    };

    const clearCart = () => {
        setCartCount(0);
    };

    return (
        <CartContext.Provider value={{ cartCount, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
