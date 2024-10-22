import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Layout from '../components/molecules/Layout';

const SupplySection = () => {
    return (
        <div className="position-relative">
            <div
                className="blur-effect position-absolute w-100"
                style={{
                    top: '-30px',
                    height: '40px',
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5))',
                    filter: 'blur(20px)',
                    zIndex: 1
                }}
            ></div>

            <Layout>
                <h2 className="text-center mt-5 mb-4" style={{ fontWeight: '700', textShadow: '2px 2px 3px rgba(0, 0, 0, 0.3)' }}>Nuestros Productos</h2>

                <Row className="mb-4">
                    <Col md={6} className="mb-4">
                        <div
                            className="bg-dark text-white p-4 rounded-4 h-100 d-flex flex-column justify-content-end"
                            style={{
                                minHeight: '60vh',
                                height: 'calc(1044 / 952 * 55vw)',
                                backgroundImage: 'url(/Camaleon.jpg)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >
                            <div style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' }}> {/* Sombra agregada */}
                                <strong className="fs-3 d-block mb-2">Tintas Nutec</strong>
                                <p className="mb-4">La tinta Nutec es una tinta de calidad premium, que ofrece el más alto nivel de estabilidad de impresión.</p>
                                <Link to="/products" className="btn btn-outline-light rounded-pill px-4 py-2">Más info</Link>
                            </div>
                        </div>
                    </Col>

                    <Col md={6} className="d-flex flex-column">
                        <Row className="mb-4">
                            <Col md={12} className="mb-4">
                                <div
                                    className="Equipos bg-dark text-white p-4 rounded-4 h-100 d-flex flex-column justify-content-end"
                                    style={{
                                        minHeight: '35vh',
                                        height: 'calc(500 / 687 * 55vw)',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                    }}
                                >
                                    <div style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' }}> {/* Sombra agregada */}
                                        <strong className="fs-3 d-block mb-2">Equipos</strong>
                                        <p className="mb-4">Trabajamos con tecnología de vanguardia que garantiza precisión y confiabilidad.</p>
                                        <Link to="/products" className="btn btn-outline-light rounded-pill px-4 py-2">Más info</Link>
                                    </div>
                                </div>
                            </Col>

                            <Col md={12}>
                                <div
                                    className="Servicio-tecnico bg-dark text-white p-4 rounded-4 h-100 d-flex flex-column justify-content-end"
                                    style={{
                                        minHeight: '35vh',
                                        height: 'calc(500 / 687 * 55vw)',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                    }}
                                >
                                    <div style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' }}> {/* Sombra agregada */}
                                        <strong className="fs-3 d-block mb-2">Servicio Técnico</strong>
                                        <p className="mb-4">Ofrecemos un servicio técnico especializado para garantizar el óptimo funcionamiento de nuestros equipos.</p>
                                        <Link to="/services" className="btn btn-outline-light rounded-pill px-4 py-2">Más info</Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <div
                            className="Insumos bg-dark text-white p-4 rounded-4 h-100 d-flex flex-column justify-content-end"
                            style={{
                                minHeight: '35vh',
                                height: 'calc(500 / 1676 * 100vw)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >
                            <div style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' }}> {/* Sombra agregada */}
                                <strong className="fs-3 d-block mb-2">Insumos para Impresión</strong>
                                <p className="mb-4">Ofrecemos una amplia gama de insumos para impresión de alta calidad.</p>
                                <Link to="/supplies" className="btn btn-outline-light rounded-pill px-4 py-2">Más info</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Layout>
        </div>
    );
};

export default SupplySection;
