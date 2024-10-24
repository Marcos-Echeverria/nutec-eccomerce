import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { inkData } from '../../../data/index.js';

const InkDetailHero = ({ id }) => {
    const ink = inkData.find(item => Number(item.id) === Number(id));

    if (!ink) {
        return <p>Producto no encontrado.</p>;
    }

    // Generar el gradiente de acuerdo a los colores definidos en ink.styles.colors
    const gradientColors = ink.styles.colors.join(", ");
    const gradientStyle = `linear-gradient(to bottom, ${gradientColors})`;
    console.log(gradientStyle)

    return (
        <section className="ink-detail-hero text-white" style={{ background: gradientStyle, padding: '50px 0' }}>
            <Container>
                <Row className="align-items-center py-5">
                    {/* Columna de la información de la tinta */}
                    <Col md={6} className="text-left">
                        <h1 style={{ fontWeight: "700", textShadow: '3px 3px 8px rgba(0, 0, 0, 0.9)' }}>{ink.name}</h1>
                        <p className="lead" style={{ fontWeight: "500", textShadow: '3px 3px 8px rgba(0, 0, 0, 0.9)' }}>{ink.description}</p>

                        {/* Características */}
                        <h3 style={{ fontWeight: "600", textShadow: '3px 3px 8px rgba(0, 0, 0, 0.9)' }}>Características</h3>
                        <ul>
                            {ink.features.map((feature, index) => (
                                <li key={index} style={{ fontWeight: "500", textShadow: '3px 3px 8px rgba(0, 0, 0, 0.9)' }}>{feature}</li>
                            ))}
                        </ul>

                        {/* Logos de certificación */}
                        {ink.certifiedBy && ink.certifiedBy.length > 0 && (
                        <div className="certifications mt-4">
                            <h4>Certificado por:</h4>
                            <div className="d-flex">
                                {ink.certifiedBy.map((logo, index) => (
                                    <img key={index} src={logo} alt={`Certificado por ${logo}`} className="img-fluid mx-2 certification-logo" />
                                ))}
                            </div>
                        </div>
                        )}
                    </Col>

                    {/* Columna de la imagen del producto */}
                    <Col md={6} className="text-center">
                        <img src={ink.imageUrl} alt={ink.name} className="img-fluid product-image" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default InkDetailHero;
