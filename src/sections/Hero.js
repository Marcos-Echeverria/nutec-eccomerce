import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import Layout from '../components/molecules/Layout'; // Importamos Layout

const Hero = () => {
    return (
        <div id="home" className="banner-section position-relative text-white d-flex align-items-center" style={{ height: '90vh', backgroundImage: 'url(/your-background-image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            
            {/* Overlay oscuro detrás del contenido */}
            <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0, backgroundColor: 'rgba(0, 0, 0, 0.3)', zIndex: 1 }}></div>

            {/* Aseguramos que el contenido esté por encima del overlay */}
            <div style={{ zIndex: 2, position: 'relative', width: '100%' }}>
                <Layout>
                    <Row>
                        <Col md={6}>
                            <p className="fs-5" style={{ fontWeight: '700', textShadow: '3px 3px 8px rgba(0, 0, 0, 0.9)', marginBottom: '1rem' }}>
                                Calidad garantizada
                            </p>
                            <h1 className="display-1" style={{ fontWeight: '700', textShadow: '4px 4px 10px rgba(0, 0, 0, 1)', marginBottom: '1rem' }}>
                                Axion Digital
                            </h1>
                            <p className="fs-5" style={{ fontWeight: '700', textShadow: '3px 3px 8px rgba(0, 0, 0, 0.9)', marginTop: '0.5rem', marginBottom: '2rem' }}>
                                Importación de insumos gráficos de calidad
                            </p>
                            <div className="d-flex">
                                <Button
                                    variant="dark"
                                    className="px-4 py-3 mt-3 hero-button"
                                >
                                    <span className="h5 m-0 text-white">Más información</span>
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Layout>
            </div>

            {/* Blur hacia abajo */}
            <div className="blur-effect position-absolute w-100" style={{ bottom: '-50px', height: '100px', background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))', filter: 'blur(20px)', zIndex: 1 }}></div>
        </div>
    );
};

export default Hero;
