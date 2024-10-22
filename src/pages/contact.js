import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Formulario from '../components/molecules/Form';
import { Mail, Phone, MapPin, } from 'lucide-react';
import Social from '../components/atoms/SocialButton';


const Contact = () => {
    return (
        <Container fluid className="d-flex justify-content-center align-items-center py-5 rounded-3"
            style={{
                backgroundImage: "url('/GenteFelizColores.jpeg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Row className="align-items-stretch" style={{
                borderRadius: '15px',
                boxShadow: '3px 4px 8px rgba(0, 0, 0, 0.1)',
                width: '80vw',
                height: '80vh',
                overflow: 'hidden'
            }}>

                {/* Columna de información de contacto */}
                <Col md={5} className="text-white p-4 d-flex flex-column" style={{ backgroundColor: '#001B29' }}>
                    <div style={{ marginLeft: '1rem' }}>
                        <h3 className="mb-4">Información de Contacto</h3>
                        <p className="mb-4" style={{ color: '#D3D3D3' }}>¿Cómo contactarnos?</p>
                    </div>
                    <div className="d-flex flex-column" style={{ marginTop: 'auto', gap: '2rem', marginLeft: '1rem' }}>
                        <div className="mb-3">
                            <Phone size={20} className="me-2" />
                            <span>1123751804</span>
                        </div>
                        <div className="mb-3">
                            <Mail size={20} className="me-2" />
                            <span>info@axiondigital.cl</span>
                        </div>
                        <div className="mb-3">
                            <MapPin size={20} className="me-2" />
                            <span>Chubut 1332 - Barracas</span>
                        </div>
                    </div>
                    <div className="mt-auto" style={{ marginBottom: '1rem', marginLeft: '1rem' }} >
                        <Social />

                    </div>
                </Col>

                {/* Columna del formulario */}
                <Col
                    style={{
                        opacity: 0.9,
                        position: 'relative',
                        backdropFilter: 'blur(13px)', // Ajusta el valor para cambiar el nivel de desenfoque
                        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Color de fondo con transparencia
                    }}
                    md={7} className="bg-white p-4">
                    <Formulario />

                </Col>
            </Row>
        </Container>
    );
};

export default Contact;