import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

// Importa las imágenes locales de forma explícita
import tintaDiamondD10 from '../assets/images/Tintas/diamond-d10.png';
import tintaAmethyst450 from '../assets/images/Tintas/a20.png';
import mativeLightChair from '../assets/images/Tintas/ruby-sol.png';
import sidSingGalaxy from '../assets/images/Tintas/botellitad10.png';

const ProductGallery = () => {
    const products = [
        {
            id: 1,
            name: "Tinta Nutec Diamond D-10",
            image: tintaDiamondD10,  // Usamos la imagen importada
        },
        {
            id: 2,
            name: "Tinta Nutec Amethyst",
            image: tintaAmethyst450,  // Usamos la imagen importada
        },
        {
            id: 3,
            name: "Ruby R10-HYB",
            image: mativeLightChair,  // Usamos la imagen importada
        },
        {
            id: 4,
            name: "Diamond D10 ESM",
            image: sidSingGalaxy,  // Usamos la imagen importada
        }
    ];

    return (
        <div className="product-gallery py-4">
            <Container fluid style={{ maxWidth: '1600px' }}>
                <Row className="g-5">
                    {products.map(product => (
                        <Col key={product.id} md={3} className="d-flex flex-column align-items-stretch">
                            {/* Tarjeta con imagen de fondo */}
                            <div
                                className="product-image bg-dark rounded-4"
                                style={{
                                    height: '300px',
                                    width: '100%',
                                    backgroundImage: `url(${product.image})`,
                                    backgroundSize: 'contain',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            ></div>

                            {/* Nombre del producto */}
                            <div className="text-start mt-1">
                                <h5>{product.name}</h5>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default ProductGallery;
