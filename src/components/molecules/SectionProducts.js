import React from 'react';
import ProductCard from './ProductCard';

const Products = () => {
    return (
        <>
            <seccion>
                <div className="contenedor-superior">
                    <div className="tintas" >
                        <ProductCard />
                    </div>
                    <div className="otros">
                        <div className="equipos">
                            <ProductCard />
                        </div>
                        <div className="servicio-tecnico">
                            <ProductCard />
                        </div>
                    </div>
                </div>
                <div className="contenedor-inferior">
                    <ProductCard />
                </div>
            </seccion>
        </>
    );
};

export default Products