import { ProductCard } from "../components/molecules/index.js";
import { useProduct } from '../hooks/useProduct';

const Products = () => {
    const { products, loading, error } = useProduct();

    if (loading) return <p>Loading products...</p>;
    if (error) return <p>Error loading products: {error.message}</p>;

    return (
        <div>
            <h1>Products Page</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        title={product.name}
                        description={product.description}
                        imageUrl={product.image}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default Products;
  