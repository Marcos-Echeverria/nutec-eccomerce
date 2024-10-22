import React from 'react';
import { CDBBox, CDBLink, CDBBtn, CDBIcon } from 'cdbreact';
import Layout from './Layout';  // Importamos el Layout que mencionas

export const Footer = () => {
    return (
        <div style={{ backgroundColor: '#121314', padding: '20px 20px', width: '100%' }}>  {/* Aplicamos el backgroundColor y full width aquí */}
            <Layout> {/* Usamos el Layout para la estructura global */}
                <CDBBox display="flex" flex="column" className="mx-auto py-4" style={{ width: '100%' }}> {/* Ajustamos el ancho a 100% */}
                    <CDBBox display="flex" justifyContent="between" className="flex-wrap">
                        <CDBBox display="flex" justifyContent="between" style={{ width: '100%' }} className="flex-wrap">
                            {/* Sección Dirección */}
                            <CDBBox style={{ marginRight: '30px' }}>
                                <p className="h5 mb-4 underline-yellow" style={{ fontWeight: '600', color: 'white', width: '7rem' }}>
                                    Dirección
                                </p>
                                <CDBBox flex="column" display="flex" style={{ cursor: 'pointer', padding: '0' }}>
                                    <CDBLink href="/about" className="text-white">Av. Rivadavia 123</CDBLink>
                                    <CDBLink href="/contact" className="text-white">Distrito 1, Buenos Aires</CDBLink>
                                    <CDBLink href="/blog" className="text-white">Argentina</CDBLink>
                                </CDBBox>
                            </CDBBox>

                            {/* Sección Contacto */}
                            <CDBBox>
                                <p className="h5 mb-4 underline-yellow" style={{ width: '7rem', fontWeight: '600', color: 'white' }}>
                                    Contacto
                                </p>
                                <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                                    <CDBLink href="/pricing" className="text-white">Tel: +1 408 247 8529</CDBLink>
                                    <CDBLink href="/services" className="text-white">IG: @axiondigital</CDBLink>
                                    <CDBLink href="/faq" className="text-white">Email: info@axion.com</CDBLink>
                                </CDBBox>
                            </CDBBox>
                        </CDBBox>
                    </CDBBox>

                    <CDBBox display="flex" className="mt-5 pt-5" justifyContent="between" alignItems='center' style={{ width: '60%' }}>
                        {/* Redes sociales */}
                        <CDBBox display="flex mt-5">
                            <CDBBtn
                                flat
                                color="light"  // Fondo blanco
                                href="https://www.facebook.com/profile.php?id=61567224303708"
                                target="_blank"  // Abrir en nueva pestaña
                                rel="noopener noreferrer"  // Buena práctica de seguridad
                                className="p-2 mx-2"
                                style={{ borderRadius: '50%', width: '40px', height: '40px' }}  // Agrandar tamaño de los botones
                            >
                                <CDBIcon fab icon="facebook-f" style={{ color: 'black', fontSize: '20px' }} />  {/* Ícono en negro */}
                            </CDBBtn>

                            <CDBBtn
                                flat
                                color="light"  // Fondo blanco
                                href="https://wa.me/5491123751804"
                                target="_blank"  // Abrir en nueva pestaña
                                rel="noopener noreferrer"  // Buena práctica de seguridad
                                className="p-2 mx-2"
                                style={{ borderRadius: '50%', width: '40px', height: '40px' }}  // Agrandar tamaño de los botones
                            >
                                <CDBIcon fab icon="whatsapp" style={{ color: 'black', fontSize: '20px' }} />  {/* Ícono en negro */}
                            </CDBBtn>

                            <CDBBtn
                                flat
                                color="light"  // Fondo blanco
                                href="https://www.instagram.com/axnnutec/"
                                target="_blank"  // Abrir en nueva pestaña
                                rel="noopener noreferrer"  // Buena práctica de seguridad
                                className="p-2 mx-2"
                                style={{ borderRadius: '50%', width: '40px', height: '40px' }}  // Agrandar tamaño de los botones
                            >
                                <CDBIcon fab icon="instagram" style={{ color: 'black', fontSize: '20px' }} />  {/* Ícono en negro */}
                            </CDBBtn>
                        </CDBBox>

                        {/* Copyright, centrado */}
                        <CDBBox textAlign="center" className="mt-5">
                            <CDBBtn
                                style={{ backgroundColor: '#121314', padding: '0' }}
                                flat
                                color="dark"
                                href="https://github.com/Marcos-Echeverria"
                                target="_blank"  // Abrir en nueva pestaña
                                rel="noopener noreferrer"  // Buena práctica de seguridad
                                className="text-white"
                            >
                                &copy; {new Date().getFullYear()} Marcos Echeverria
                            </CDBBtn>
                        </CDBBox>
                    </CDBBox>
                </CDBBox>
            </Layout>
        </div>
    );
};

export default Footer;
