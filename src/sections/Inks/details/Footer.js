import React from 'react';
import inkDetailFooter from '../../../assets/images/inkDetailfooter.webp';

const Footer = () => {
    return (
        <footer className="ink-detail-footer">
            <div className="footer-overlay">
                <img src={inkDetailFooter} alt="Ink Detail Rainbow" className="img-fluid w-100" />
            </div>
        </footer>
    );
};

export default Footer;
