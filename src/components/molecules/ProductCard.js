import styled from 'styled-components';
import { Button } from '../atoms/index.js';
import { formatPrice } from '../../utils/formatPrice';

const Card = styled.div`
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    width: 250px;
    text-align: center;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
    max-width: 100%;
    height: auto;
    border-radius: 8px;
`;

const ProductTitle = styled.h3`
    font-size: 18px;
    margin: 12px 0;
`;

const ProductDescription = styled.p`
    font-size: 14px;
    color: #555;
`;

const ProductPrice = styled.p`
    font-size: 16px;
    font-weight: bold;
    margin: 8px 0;
`;

const ProductCard = ({ title, description, imageUrl, price  }) => {
    return (
        <Card>
            <ProductImage src={imageUrl} alt={title} />
            <ProductTitle>{title}</ProductTitle>
            <ProductDescription>{description}</ProductDescription>
            <ProductPrice>{formatPrice(price)}</ProductPrice>
            <Button>Add to Cart</Button>
        </Card>
    );
};

export default ProductCard;
