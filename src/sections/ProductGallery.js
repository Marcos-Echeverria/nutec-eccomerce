import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Para la navegación
import { Layout } from '../components/molecules/index.js';
import { inkData } from '../data/index.js';

const ProductGallery = () => {
    const products = inkData.slice(0, 4); // Limitamos los productos a 4
    const navigate = useNavigate(); // Creamos la función para la navegación

    return (
        <Layout>
            <div className="product-gallery py-4">
                <Container fluid style={{ maxWidth: '1600px' }}>
                    <Row className="g-5">
                        {products.map(product => (
                            <Col key={product.id} md={3} className="d-flex flex-column align-items-stretch">
                                {/* Contenedor principal con fondo blanco y sombras suaves en los bordes */}
                                <div
                                    className="product-card rounded-4 position-relative shadow-md"
                                    onClick={() => navigate(`/inks/${product.id}`)} // Navegamos a la página de detalles al hacer clic
                                    style={{
                                        height: '300px',  // Altura de la carta
                                        width: '100%',
                                        padding: '20px',
                                        backgroundColor: '#ffffff',  // Fondo blanco
                                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(0, 0, 0, 0.005)', // Sombras suaves y leves en los bordes
                                        borderRadius: '12px', // Bordes redondeados para suavizar el diseño
                                        overflow: 'hidden',
                                        cursor: 'pointer', // Mostrar que es clickeable
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
                                            src={product.imageUrl}
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
        </Layout>
    );
};

export default ProductGallery;
