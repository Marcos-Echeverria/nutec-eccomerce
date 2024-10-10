import { createContext, useState, useContext } from 'react';

// Crear el contexto
const ProductContext = createContext();

// Hook personalizado para usar el contexto del producto
export const useProduct = () => useContext(ProductContext);

// Provider para manejar el producto
export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const clearProducts = () => {
        setProducts([]);
    };

    return (
        <ProductContext.Provider value={{ products, setProducts, clearProducts }}>
            {children}
        </ProductContext.Provider>
    );
};
