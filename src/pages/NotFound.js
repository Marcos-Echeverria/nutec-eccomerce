import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

const NotFoundPage = () => {
    return (
        <Container 
            fluid 
            className="d-flex flex-column justify-content-center align-items-center text-center" 
            style={{ 
                height: '100vh', // Usamos height en lugar de minHeight
                backgroundColor: '#000', 
                color: '#fff', 
                padding: '0',
                margin: '0',
            }}
        >
            <div style={{ marginBottom: '30px' }}>
                <h1 style={{ fontSize: '100px', fontWeight: 'bold' }}>404</h1>
                <p style={{ fontSize: '24px', fontWeight: '300', marginBottom: '20px' }}>
                    ¡Ups! No encontramos la página que buscabas.
                </p>
            </div>
            
            <Button 
                as={Link} 
                to="/" 
                variant="outline-light" 
                style={{ 
                    padding: '10px 30px', 
                    fontSize: '18px', 
                    borderRadius: '30px',
                    fontWeight: '500',
                    textTransform: 'uppercase',
                    border: '2px solid #fff',
                    transition: 'background 0.3s ease, color 0.3s ease'
                }}
                onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#fff';
                    e.target.style.color = '#000';
                }}
                onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#fff';
                }}
            >
                Volver al inicio
            </Button>
        </Container>
    );
};

export default NotFoundPage;
