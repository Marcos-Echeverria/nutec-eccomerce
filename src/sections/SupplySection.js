import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importamos Link
import Layout from '../components/molecules/Layout'; // Usamos el layout común

const SupplySection = () => {
    return (
        <div className="position-relative">
            {/* Blur en la parte superior */}
            <div 
                className="blur-effect position-absolute w-100" 
                style={{
                    top: '-30px',    // Posición por encima del contenido
                    height: '40px', // Altura del blur
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5))', // Degradado hacia arriba
                    filter: 'blur(20px)', // Aplicar desenfoque
                    zIndex: 1
                }}
            ></div>

            <Layout>
                <h2 className="text-center mt-5 mb-4" style={{ fontWeight: '700', textShadow: '2px 2px 3px rgba(0, 0, 0, 0.3)' }}>Nuestros Productos</h2>
                
                <Row className="mb-4">
                    {/* Tintas */}
                    <Col md={6} className="mb-4">
                        <div 
                            className="bg-dark text-white p-4 rounded-4 h-100 d-flex flex-column justify-content-end"
                            style={{
                                minHeight: '60vh',    // Incremento de altura mínima
                                height: 'calc(1044 / 952 * 55vw)', // Relación de aspecto 1044x952 en pantallas grandes
                            }}
                        >
                            <div>
                                <strong className="fs-3 d-block mb-2">Tintas</strong>
                                <p className="mb-4">La tinta Nutec es una tinta de calidad premium, que ofrece el más alto nivel de estabilidad de impresión.</p>
                                <Link to="/products" className="btn btn-outline-light rounded-pill px-4 py-2">Más info</Link> {/* Link a /products */}
                            </div>
                        </div>
                    </Col>

                    {/* Equipos y Servicio Técnico */}
                    <Col md={6} className="d-flex flex-column">
                        <Row className="mb-4">
                            {/* Equipos */}
                            <Col md={12} className="mb-4">
                                <div 
                                    className="bg-dark text-white p-4 rounded-4 h-100 d-flex flex-column justify-content-end"
                                    style={{
                                        minHeight: '35vh',  // Incremento de altura mínima
                                        height: 'calc(500 / 687 * 55vw)', // Relación de aspecto 687x500
                                    }}
                                >
                                    <div>
                                        <strong className="fs-3 d-block mb-2">Equipos</strong>
                                        <p className="mb-4">Trabajamos con tecnología de vanguardia que garantiza precisión y confiabilidad.</p>
                                        <Link to="/products" className="btn btn-outline-light rounded-pill px-4 py-2">Más info</Link> {/* Link a /products */}
                                    </div>
                                </div>
                            </Col>

                            {/* Servicio Técnico */}
                            <Col md={12}>
                                <div 
                                    className="bg-dark text-white p-4 rounded-4 h-100 d-flex flex-column justify-content-end"
                                    style={{
                                        minHeight: '35vh',  // Incremento de altura mínima
                                        height: 'calc(500 / 687 * 55vw)', // Relación de aspecto 687x500
                                    }}
                                >
                                    <div>
                                        <strong className="fs-3 d-block mb-2">Servicio Técnico</strong>
                                        <p className="mb-4">Ofrecemos un servicio técnico especializado para garantizar el óptimo funcionamiento de nuestros equipos.</p>
                                        <Link to="/services" className="btn btn-outline-light rounded-pill px-4 py-2">Más info</Link> {/* Link a /services */}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                {/* Insumos para Impresión */}
                <Row>
                    <Col md={12}>
                        <div 
                            className="bg-dark text-white p-4 rounded-4 h-100 d-flex flex-column justify-content-end"
                            style={{
                                minHeight: '35vh',   // Incremento de altura mínima
                                height: 'calc(500 / 1676 * 100vw)',  // Relación de aspecto 1676x500
                            }}
                        >
                            <div>
                                <strong className="fs-3 d-block mb-2">Insumos para Impresión</strong>
                                <p className="mb-4">Ofrecemos una amplia gama de insumos para impresión de alta calidad.</p>
                                <Link to="/supplies" className="btn btn-outline-light rounded-pill px-4 py-2">Más info</Link> {/* Link a /supplies */}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Layout>
        </div>
    );
};

export default SupplySection;
