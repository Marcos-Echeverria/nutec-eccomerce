import api from './api';

// Obtener el carrito de un usuario (puede ser local o de la base de datos)
export const getCart = async (userId) => {
    try {
        const response = await api.get(`/cart/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching cart:', error);
        throw error;
    }
};

// Agregar un producto al carrito
export const addToCart = async (userId, productId, quantity) => {
    try {
        const response = await api.post(`/cart`, {
            userId,
            productId,
            quantity,
        });
        return response.data;
    } catch (error) {
        console.error('Error adding product to cart:', error);
        throw error;
    }
};

// Eliminar un producto del carrito
export const removeFromCart = async (userId, productId) => {
    try {
        const response = await api.delete(`/cart/${userId}/${productId}`);
        return response.data;
    } catch (error) {
        console.error('Error removing product from cart:', error);
        throw error;
    }
};
