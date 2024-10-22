import React from 'react';

const SupplySection = () => {
    return (
        <>
            <seccion>
                <div className="contenedor-superior">
                    <div className="tintas" >
                        <strong>Tintas</strong>
                    </div>
                    <div className="otros">
                        <div className="equipos">
                            <strong>Equipos</strong>
                        </div>
                        <div className="servicio-tecnico">
                            <strong>Servicio Técnico</strong>
                        </div>
                    </div>
                </div>
                <div className="contenedor-inferior">
                    <strong>Insumos para Impresión</strong>
                </div>
            </seccion>
        </>
    );
};

export default SupplySection