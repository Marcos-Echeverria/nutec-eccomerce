import React, { useState } from 'react';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import ServiceIcon from '../assets/images/ServicioTecnico-Icon1.webp';
import ServiceTecnicoDown from '../assets/images/ServicioTecnico-Down.jpg';

const Services = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <Container fluid className="d-flex flex-column align-items-center py-5" style={{ background: 'linear-gradient(to bottom, #000000, #d2a800)', color: 'white', minHeight: '100vh' }}>
                <Row className="text-center mb-4">
                    <Col>
                        <h1 className="display-4 font-weight-bold" style={{ fontSize: 'calc(1.5rem + 1.5vw)' }}>SERVICIO TÉCNICO</h1>
                        <h2 className="font-weight-bold" style={{ fontSize: 'calc(1.2rem + 1.2vw)' }}>IMPRESORAS GRAN FORMATO</h2>
                    </Col>
                </Row>
                
                <Row className="w-100 justify-content-center align-items-center flex-column-reverse flex-md-row">
                    <Col md={6} className="px-5 text-center text-md-left mb-4 mb-md-0">
                        <ul className="list-unstyled" style={{ fontSize: 'calc(1rem + 0.5vw)' }}>
                            <li className="py-2">REPUESTOS ORIGINALES</li>
                            <li className="py-2">MANTENIMIENTO PREVENTIVO</li>
                            <li className="py-2">DIAGNOSTICO</li>
                            <li className="py-2">REPARACION</li>
                            <li className="py-2">INSTALACIONES</li>
                            <li className="py-2">SOFTWARE, RIPS</li>
                            <li className="py-2">GESTION DE COLOR, PERFILES</li>
                            <li className="py-2">ASESORAMIENTO. SOPORTE ONLINE</li>
                        </ul>
                    </Col>

                    <Col md={6} className="d-flex justify-content-center mb-4 mb-md-0">
                        <Image
                            src={ServiceIcon}
                            alt="Ícono Servicio Técnico"
                            fluid
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            style={{
                                transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                                filter: isHovered ? 'grayscale(50%)' : 'grayscale(0%)',
                                transition: 'transform 0.3s ease, filter 0.3s ease',
                                maxWidth: '80%',
                                maxHeight: 'calc(200px + 10vw)', // Escalado dinámico
                            }}
                        />
                    </Col>
                </Row>

                <Button variant="light" className="mt-4 px-4 py-3" href="https://wa.me/5491123751804" style={{ fontSize: 'calc(0.8rem + 0.5vw)' }}>
                    <span className="h5 m-0">Más información</span>
                </Button>
            </Container>

            <Container fluid className="d-flex justify-content-center py-4">
                <Image src={ServiceTecnicoDown} alt="Servicio Técnico Down" fluid style={{ maxWidth: '80%', maxHeight: 'calc(300px + 10vw)' }} />
            </Container>
        </>
    );
};

export default Services;
