import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

function SocialButton() {
    const [hoveredButton, setHoveredButton] = useState(null);

    const handleMouseEnter = (icon) => {
        setHoveredButton(icon);
    };

    const handleMouseLeave = () => {
        setHoveredButton(null);
    };

    const openLink = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div style={{}}>
            <Button
                variant="outline-light"
                className="rounded-circle me-3 btn-sm"
                style={{ backgroundColor: '#F6AF03' }}
                onMouseEnter={() => handleMouseEnter('instagram')}
                onMouseLeave={handleMouseLeave}
                onClick={() => openLink('https://www.instagram.com/axnnutec/')}
            >
                <FaInstagram
                    color={hoveredButton === 'instagram' ? 'black' : 'white'}
                    size={24}
                />
            </Button>

            <Button
                variant="outline-light"
                className="rounded-circle me-3 btn-sm"
                style={{ backgroundColor: '#F6AF03', color: 'white' }}
                onMouseEnter={() => handleMouseEnter('facebook')}
                onMouseLeave={handleMouseLeave}
                onClick={() => openLink('https://www.facebook.com/profile.php?id=61567224303708')}
            >
                <FaFacebook
                    color={hoveredButton === 'facebook' ? 'black' : 'white'}
                    size={24}
                />
            </Button>

            <Button
                variant="outline-light"
                className="rounded-circle me-3 btn-sm"
                style={{ backgroundColor: '#F6AF03' }}
                onMouseEnter={() => handleMouseEnter('whatsapp')}
                onMouseLeave={handleMouseLeave}
                onClick={() => openLink('https://wa.me/5491163980209')}
            >
                <FaWhatsapp
                    color={hoveredButton === 'whatsapp' ? 'black' : 'white'}
                    size={24}
                />
            </Button>
        </div>
    );
}

export default SocialButton;
