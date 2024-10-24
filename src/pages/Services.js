import ServiceIcon from '../assets/images/ServicioTecnico-Icon1.webp';
import { Button } from 'react-bootstrap';
import React from 'react';
import ServiceTecnicoDown from '../assets/images/ServicioTecnico-Down.jpg';

const Services = () => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        width: '100%',
        margin: '0 auto',
        background: 'linear-gradient(to bottom, #000000, #d2a800)',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        height: '100vh'

    };

    const titleContainerStyle = {
        textAlign: 'center',
        marginBottom: '40px'
    };

    const titleStyle = {
        fontSize: '2rem',
        margin: '5px 0',
        fontWeight: 'bold'
    };


    const contentWrapperStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
    };

    const serviceContentStyle = {
        flex: '1',
        textAlign: 'left', // Alineamos el texto a la izquierda
        marginLeft: '20%',

    };

    const listStyle = {
        listStyle: 'none', // Sin viñetas
        padding: '0',
        margin: '0 0 20px 0',
        width: '100%', // Ajustar el ancho para evitar variaciones
        textAlign: 'left', // Garantizamos que el texto se alinee a la izquierda
    };

    const listItemStyle = {
        margin: '10px 0', // Evitar variaciones de posición
        padding: '5px 0',  // Espacio interno para los ítems
        fontSize: '1.5rem' // Tamaño uniforme del texto
    };

    const iconContainerStyle = {
        flex: '1',
        display: 'flex',
        alignItems: 'center'
    };

    const imageStyle = {
        maxWidth: '100%',
        height: 'auto',
        transition: 'transform 0.3s ease, filter 0.3s ease',  // Efecto de transición para cambios
        filter: 'grayscale(0%)',  // Icono en colores normales
    };

    const imageHoverStyle = {
        transform: 'scale(1.1)',  // Agranda el icono un poco
        filter: 'grayscale(50%)'  // Cambia el color del icono
    };

    const [isHovered, setIsHovered] = React.useState(false)

    return (
        <>
            <div style={containerStyle}>
                <div style={titleContainerStyle}>
                    <h1 style={titleStyle}>SERVICIO TÉCNICO</h1>
                    <h1 style={titleStyle}>IMPRESORAS GRAN FORMATO</h1>
                </div>

                <div style={contentWrapperStyle}>
                    <div style={serviceContentStyle}>
                        <ul style={listStyle}>
                            <li style={listItemStyle}>REPUESTOS ORIGINALES</li>
                            <li style={listItemStyle}>MANTENIMIENTO PREVENTIVO</li>
                            <li style={listItemStyle}>DIAGNOSTICO</li>
                            <li style={listItemStyle}>REPARACION</li>
                            <li style={listItemStyle}>INSTALACIONES</li>
                            <li style={listItemStyle}>SOFTWARE, RIPS</li>
                            <li style={listItemStyle}>GESTION DE COLOR, PERFILES</li>
                            <li style={listItemStyle}>ASESORAMIENTO. SOPORTE ONLINE</li>
                        </ul>
                    </div>

                    <div style={iconContainerStyle}>
                        <img
                            src={ServiceIcon}
                            alt="Ícono Servicio Técnico"
                            draggable="false"  // Evita que se pueda arrastrar el icono
                            style={isHovered ? { ...imageStyle, ...imageHoverStyle } : imageStyle}  // Aplica el estilo según el estado hover
                            onMouseEnter={() => setIsHovered(true)}  // Activa el efecto al pasar el cursor
                            onMouseLeave={() => setIsHovered(false)}  // Quita el efecto al salir el cursor
                        />
                    </div>
                </div>
                <Button
                    variant="dark"
                    className="px-4 py-3 mt-3 hero-button"
                    href="https://wa.me/5491123751804"
                >
                    <span className="h5 m-0 text-white">Más información</span>
                </Button>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <img
                    src={ServiceTecnicoDown}
                    alt="Servicio Técnico Down"
                    style={{
                        maxWidth: '60vw'
                    }}
                />
            </div>
        </>

    );
};

export default Services;