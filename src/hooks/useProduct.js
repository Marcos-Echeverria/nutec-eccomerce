import { useState, useEffect } from 'react';
import { useProduct as useProductContext } from '../context/ProductContext';
import { getProducts } from '../services/productService';

export const useProduct = () => {
    const { products, setProducts } = useProductContext();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();
                setProducts(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [setProducts]);

    return { products, loading, error };
};
