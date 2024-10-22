import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const ProductGallery = () => {
    const products = [
        {
            id: 1,
            name: "Tinta Nutec Diamond D-10",
        },
        {
            id: 2,
            name: "Tinta Nutec Amethyst 4.50-HYB",
        },
        {
            id: 3,
            name: "Mative Light Chair",
        },
        {
            id: 4,
            name: "SID Sing Galaxy / Solvente",
        }
    ];

    return (
        <div className="product-gallery py-4">
            <Container fluid style={{ maxWidth: '1600px' }}>  {/* Modificamos el ancho máximo del container */}
                <Row className="g-5">  {/* Ajustamos el margen entre las tarjetas */}
                    {products.map(product => (
                        <Col key={product.id} md={3} className="d-flex flex-column align-items-stretch">
                            {/* La tarjeta con el fondo oscuro */}
                            <div className="bg-dark rounded-4" style={{ height: '300px', width: '100%' }}></div>  

                            {/* Nombre del producto fuera de la tarjeta */}
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
