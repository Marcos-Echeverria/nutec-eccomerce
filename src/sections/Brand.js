import React from 'react';
import bannerImage from '../assets/images/BannerMarcas.webp';

const Brand = () => {
    return (
        <div style={{
            backgroundImage: `url(${bannerImage})`, height: '100vh', width: '100%',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}>
            {/* Tu contenido del componente Brand aquí */}
        </div>
    );
};

export default Brand;
