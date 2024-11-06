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
                    fontSize: '2.5rem',
                    textAlign: 'center',
                    marginBottom: '20px',
                    color: '#333',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    position: 'relative'
                }}>
                    Insumos para Impresión
                    <span style={{
                        display: 'block',
                        width: '10rem',
                        height: '4px',
                        backgroundColor: '#007BFF',
                        margin: '10px auto',
                        borderRadius: '2px'
                    }} />
                </h2>

                <p style={{
                    textAlign: 'center',
                    fontSize: '1.25rem',
                    color: '#666',
                    fontStyle: 'italic',
                    maxWidth: '600px',
                    margin: '0 auto',
                    lineHeight: '1.6'
                }}>
                    Encuentra los mejores insumos para tus necesidades de impresión.
                </p>

                <InsumoImpresion productos={productos} />
            </section>

            {/* Sección de Vinilos */}
            <section style={{ marginBottom: '60px', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Vinilos</h2>
                <p style={{ fontSize: '1.125rem', color: '#666' }}>
                    Gran variedad de vinilos de la mejor calidad.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img
                        src={Vinilos}
                        alt="VinilosImg"
                        style={{ maxWidth: '90%', height: 'auto' }}
                    />
                </div>
            </section>

            <hr style={{ border: 'none', borderTop: '2px solid #ccc', margin: '40px 0' }} />

            {/* Sección de Accesorios */}
            <section style={{ marginBottom: '60px', textAlign: 'center', marginTop: '3rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Accesorios</h2>
                <p style={{ fontSize: '1.125rem', color: '#666' }}>
                    Todo tipo de accesorios para complementar tus proyectos.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img
                        src={Accesorios}
                        alt="AccesoriosImg"
                        style={{ maxWidth: '90%', height: 'auto', marginTop: '3rem' }}
                    />
                </div>
            </section>
        </div>
    );
};

export default Insumos;
