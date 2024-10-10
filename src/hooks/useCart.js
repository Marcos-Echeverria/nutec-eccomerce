import { useEffect, useState } from 'react';
import { useCart as useCartContext } from '../context/CartContext';
import { getCart, addToCart, removeFromCart } from '../services/cartService';

export const useCart = (userId) => {
    const { cart, setCart } = useCartContext();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const response = await getCart(userId);
                setCart(response);
            } catch (error) {
                console.error('Error fetching cart:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCart();
    }, [userId, setCart]);

    const addProduct = async (productId, quantity) => {
        try {
            const updatedCart = await addToCart(userId, productId, quantity);
            setCart(updatedCart);
        } catch (error) {
            console.error('Error adding product to cart:', error);
        }
    };

    const removeProduct = async (productId) => {
        try {
            const updatedCart = await removeFromCart(userId, productId);
            setCart(updatedCart);
        } catch (error) {
            console.error('Error removing product from cart:', error);
        }
    };

    return {
        cart,
        loading,
        addProduct,
        removeProduct,
    };
};