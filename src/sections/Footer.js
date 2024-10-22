import React from 'react';
import { CDBBox, CDBLink, CDBBtn, CDBIcon } from 'cdbreact';

export const Footer = () => {
    return (
        <CDBBox className="shadow" style={{ backgroundColor: '#121314', padding: '20px' }}>
            <CDBBox display="flex" flex="column" className="mx-auto py-4" style={{ width: '80%' }}>
                <CDBBox display="flex" justifyContent="between" className="flex-wrap">
                    <CDBBox>
                        <a href="/" style={{ textDecoration: 'none' }} className="d-flex align-items-center p-0 text-white no-underline">
                            <span className="ms-3 h5 font-weight-bold text-white">Axion Digital</span>
                        </a>
                    </CDBBox>
                    <CDBBox display="flex" style={{ width: '50%' }} justifyContent="between">
                        <CDBBox>
                            <p className="h5 mb-4 underline-yellow" style={{ fontWeight: '600', color: 'white', width: '7rem' }}>
                                Dirección
                            </p>
                            <CDBBox flex="column" display="flex" style={{ cursor: 'pointer', padding: '0' }}>
                                <CDBLink href="/about" className="text-white">Chubut 1332 - Barracas</CDBLink>
                                <CDBLink href="/contact" className="text-white">CP: 1286</CDBLink>
                                <CDBLink href="/blog" className="text-white">CABA</CDBLink>
                            </CDBBox>
                        </CDBBox>
                        <CDBBox>
                            <p className="h5 mb-4 underline-yellow" style={{ width: '7rem', fontWeight: '600', color: 'white' }}>
                                Productos
                            </p>
                            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                                <span href="/pricing" className="text-white">Tintas Nutec</span>
                                <span href="/services" className="text-white">Servicios</span>
                                <span href="/faq" className="text-white">Equipos</span>
                            </CDBBox>
                        </CDBBox>
                    </CDBBox>
                </CDBBox>
                <CDBBox display="flex" className="mt-4" justifyContent="between">
                    <CDBBtn style={{ backgroundColor: '#121314' }} flat color="dark" href="https://github.com/Marcos-Echeverria" className="text-white p-0">
                        &copy; {new Date().getFullYear()} Marcos Echeverria
                    </CDBBtn>
                    <CDBBox display="flex">
                        <CDBBtn style={{ backgroundColor: '#121314', textDecoration: 'none' }} flat color="dark" className="p-2" href="https://www.facebook.com/profile.php?id=61567224303708">
                            <CDBIcon fab icon="facebook-f" />
                        </CDBBtn>
                        <CDBBtn style={{ backgroundColor: '#121314', textDecoration: 'none' }} flat color="dark" className="mx-3 p-2" href="https://wa.me/5491123751804">
                            <CDBIcon fab icon="whatsapp" />
                        </CDBBtn>
                        <CDBBtn style={{ backgroundColor: '#121314', textDecoration: 'none' }} flat color="dark" className="p-2" href="https://www.instagram.com/axnnutec/">
                            <CDBIcon fab icon="instagram" />
                        </CDBBtn>
                    </CDBBox>
                </CDBBox>
            </CDBBox>
        </CDBBox>
    );
};

export default Footer;
