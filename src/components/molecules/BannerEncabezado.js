import React from 'react';
import { Button } from 'react-bootstrap';

const BannerSection = () => {
    return (
        <>
            <div className="banner-section">
                <div className="banner-content">
                    <p style={{ fontSize: '2.5rem', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>Calidad garantizada</p>
                    <h1 style={{ fontSize: '8rem', fontWeight: 'bold', textShadow: '3px 3px 6px rgba(0, 0, 0, 0.6)' }}>Axion Digital</h1>
                    <p style={{ fontSize: '2rem', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', marginTop: '1.5rem' }}>Importación de insumos gráficos de calidad</p>
                    <div className="d-flex">
                        <Button
                            variant="Dark"
                            type="submit"
                            className="px-4 custom-button"
                            style={{ backgroundColor: '#2C2F33', width: '15vw', height: '8vh', marginTop: '5rem', outline: 'none', boxShadow: 'none' }}

                        >
                            <p style={{ fontSize: '1.5rem', margin: 'auto', color: 'white' }}>Mas información</p>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerSection;
