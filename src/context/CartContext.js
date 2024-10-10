import { createContext, useState, useContext } from 'react';

// Crear el contexto
const CartContext = createContext();

// Hook personalizado para usar el contexto del carrito
export const useCart = () => useContext(CartContext);

// Provider para manejar el carrito
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addProductToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const removeProductFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, setCart, addProductToCart, removeProductFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
