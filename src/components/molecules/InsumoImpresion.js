import React from 'react';

const InsumoImpresion = ({ productos }) => {
    return (
        <div>
            {productos.map((producto) => (
                <div key={producto.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '40px', borderBottom: '1px solid #ddd' }}>
                    {/* Contenido de texto a la izquierda */}
                    <div style={{ flex: '1', paddingRight: '20px' }}>
                        <h2 style={{ fontSize: '32px', color: '#2c3e50', marginBottom: '10px' }}>{producto.nombre}</h2>
                        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#333' }}>
                            {producto.descripcion}
                        </p>
                    </div>

                    {/* Imagen grande a la derecha */}
                    <div style={{ flex: '1', textAlign: 'right' }}>
                        <img
                            src={producto.imagen}
                            alt={producto.nombre}
                            style={{ width: '300px', height: 'auto', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default InsumoImpresion;
