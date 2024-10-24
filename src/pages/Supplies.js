import { InsumoImpresion } from '../components/molecules';
import React from 'react';
import LonaFront from '../assets/images/LonaFront.webp';
import LonaMesh from '../assets/images/Lonamesh.png';
import BlackLight from '../assets/images/BlackLight.jpeg';
import Blackout from '../assets/images/Blackout.jpg';
import Vinilos from '../assets/images/Vinilos.png';
import Accesorios from '../assets/images/Accesorios.png';

const productos = [
    {
        id: 1,
        nombre: "LONA FRONT",
        descripcion: "La Lona Front es una lona blanca para iluminación frontal, de gran calidad y resistencia con protección fungicida y rayos UV. Es ideal para banners, displays, especulares, etc.",
        imagen: LonaFront,
    },
    {
        id: 2,
        nombre: "LONA MESH",
        descripcion: "La Lona Mesh es una lona imprimible de tejido abierto o microperforado que permite el paso del aire lo cual la hace muy ligera y resistente. Es ideal para usarse en impresiones de gran tamaño y altura como publicidad en fachadas, cubrir andamios en zonas de construcción, escenarios, etc.",
        imagen: LonaMesh,
    },
    {
        id: 3,
        nombre: "LONA BACKLIGHT",
        descripcion: "Las lonas BackLight son especialmente fabricadas para la utilización en exhibidores retro iluminados. Brinda una excelente calidad de impresión y durabilidad al exterior, se usa comúnmente en anuncios luminosos, cajas de luz, displays entre otros que requieran iluminación posterior.",
        imagen: BlackLight,
    },
    {
        id: 4,
        nombre: "LONA BLOCKOUT",
        descripcion: "La Lona Blockout es una lona imprimible de ambas caras, ligera y resistente. Es ideal para usarse en impresiones de gran tamaño y altura como publicidades de doble exposición y reducir los costos de realización.",
        imagen: Blackout,
    },

];

const Insumos = () => {
    return (
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>

            {/* Sección de Insumos para Impresión */}
            <section style={{ marginBottom: '60px' }}>
                <h2 style={{
                    fontSize: '36px', // Aumentar el tamaño de la fuente
                    textAlign: 'center',
                    marginBottom: '20px',
                    color: '#333', // Cambiar el color del texto
                    fontWeight: 'bold', // Hacer el texto más audaz
                    textTransform: 'uppercase', // Transformar el texto a mayúsculas
                    letterSpacing: '1px', // Espaciado entre letras
                    position: 'relative' // Para la sombra
                }}>
                    Insumos para Impresión
                    <span style={{
                        display: 'block',
                        width: '10rem', // Ancho de la línea
                        height: '4px', // Altura de la línea
                        backgroundColor: '#007BFF', // Color de la línea
                        margin: '10px auto', // Centrar la línea
                        borderRadius: '2px' // Esquinas redondeadas
                    }} />
                </h2>

                <p style={{
                    textAlign: 'center',
                    fontSize: '20px', // Aumentar el tamaño de la fuente
                    color: '#666',
                    fontStyle: 'italic', // Estilo de fuente en cursiva
                    maxWidth: '600px', // Limitar el ancho del texto
                    margin: '0 auto', // Centrar el párrafo
                    lineHeight: '1.6' // Aumentar el espacio entre líneas
                }}>
                    Encuentra los mejores insumos para tus necesidades de impresión.
                </p>

                <InsumoImpresion productos={productos} />
            </section>

            {/* Sección de Vinilos */}
            <section style={{ marginBottom: '60px', alignSelf: 'center', justifySelf: 'center' }}>
                <h2 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '20px' }}>Vinilos</h2>
                <p style={{ textAlign: 'center', fontSize: '18px', color: '#666' }}>
                    Gran variedad de vinilos de la mejor calidad.
                </p>
                <div>
                    <img
                        src={Vinilos}
                        alt="VinilosImg"
                        style={{ display: 'flex', justifyContent: 'center' }}
                    />
                </div>
            </section>
            <hr style={{ border: 'none', borderTop: '2px solid #ccc', margin: '40px 0' }} />
            {/* Sección de Accesorios */}
            <section style={{ marginBottom: '60px', alignSelf: 'center', justifySelf: 'center', marginTop: '3rem' }}>
                <h2 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '20px' }}>Accesorios</h2>
                <p style={{ textAlign: 'center', fontSize: '18px', color: '#666' }}>
                    Todo tipo de accesorios para complementar tus proyectos.
                </p>
                <img
                    src={Accesorios}
                    alt="AccesoriosImg"
                    style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}
                />
            </section>

        </div>
    );
};

export default Insumos;
