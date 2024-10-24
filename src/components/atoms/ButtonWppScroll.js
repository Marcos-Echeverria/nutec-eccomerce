import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaWhatsapp } from 'react-icons/fa';

function ButtonWppScroll() {
    const [hoveredButton, setHoveredButton] = useState(null);

    const handleMouseEnter = () => {
        setHoveredButton(true);
    };

    const handleMouseLeave = () => {
        setHoveredButton(false);
    };

    const openLink = (url) => {
        window.open(url, '_blank');
    };

    return (
        <>
            <Button
                variant="outline-light"
                className="rounded-circle"
                style={{
                    backgroundColor: '#25D366',
                    position: 'fixed',
                    bottom: '10px',
                    right: '20px',
                    zIndex: 1000, // Para asegurarte de que el botón esté encima de otros elementos
                    padding: '10px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
                    border: 'none',
                    margin: '3rem',
                    width: '4rem',
                    height: '4rem'
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => openLink('https://wa.me/5491123751804')}
            >
                <FaWhatsapp
                    color={hoveredButton ? 'black' : 'white'}
                    size={40}
                />
            </Button>
        </>
    );
}

export default ButtonWppScroll;
