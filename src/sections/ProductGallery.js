import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import tintaDiamondD10 from '../assets/images/Tintas/diamond-d10.png';
import tintaAmethyst450 from '../assets/images/Tintas/a20.png';
import mativeLightChair from '../assets/images/Tintas/ruby-sol.png';
import sidSingGalaxy from '../assets/images/Tintas/botellitad10.png';

const ProductGallery = () => {
    const products = [
        {
            id: 1,
            name: "Tinta Nutec Diamond D-10",
            image: tintaDiamondD10,
        },
        {
            id: 2,
            name: "Tinta Nutec Amethyst",
            image: tintaAmethyst450,
        },
        {
            id: 3,
            name: "Ruby R10-HYB",
            image: mativeLightChair,
        },
        {
            id: 4,
            name: "Diamond D10 ESM",
            image: sidSingGalaxy,
        }
    ];

    return (
        <div className="product-gallery py-4">
            <Container fluid style={{ maxWidth: '1600px' }}>
                <Row className="g-5">
                    {products.map(product => (
                        <Col key={product.id} md={3} className="d-flex flex-column align-items-stretch">
                            {/* Contenedor principal con fondo blanco y sombras suaves en los bordes */}
                            <div
                                className="product-card rounded-4 position-relative shadow-md"  // Bootstrap shadow-sm para sombra suave
                                style={{
                                    height: '300px',  // Altura de la carta
                                    width: '100%',
                                    padding: '20px',
                                    backgroundColor: '#ffffff',  // Fondo blanco
                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(0, 0, 0, 0.005)', // Sombras suaves y leves en los bordes
                                    borderRadius: '12px', // Bordes redondeados para suavizar el diseño
                                    overflow: 'hidden',
                                }}
                            >
                                {/* Imagen del producto */}
                                <div className="image-container" style={{
                                    height: '100%',  // Imagen ocupa todo el espacio de la carta
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        style={{
                                            maxHeight: '70%',
                                            maxWidth: '70%',
                                            objectFit: 'contain',
                                        }}
                                    />
                                </div>
                            </div>


                            {/* Nombre del producto fuera de la carta */}
                            <div className="text-container text-start mt-2 ms-2">
                                <h6 style={{ fontSize: '1rem', fontWeight: '700', letterSpacing: '0.5px' }}> {/* Texto separado y centrado */}
                                    {product.name}
                                </h6>
                            </div>
                        </Col>
                    ))}

                </Row>
            </Container>
        </div>
    );
};

export default ProductGallery;
