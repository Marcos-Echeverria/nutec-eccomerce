import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';

function Header() {
    return (
        <>
            <Navbar style={{ backgroundColor: 'white', padding: '0.5rem 2rem' }} data-bs-theme="white" sticky="top" className="shadow-sm">
                <Container className="d-flex justify-content-between align-items-center">
                    {/* Logo alineado a la izquierda */}
                    <Navbar.Brand>
                        <Link to="/" className="d-inline-block">
                            <Image
                                src="/Logo-img.png"
                                width="120"
                                height="60"
                                className="d-inline-block"
                                alt="Nutec logo"
                            />
                        </Link>
                    </Navbar.Brand>
                    
                    {/* Links alineados a la derecha */}
                    <Nav className="d-flex">
                        <Link className="fs-5 mx-2 nav-link" to="/products">Tintas</Link>
                        <Link className="fs-5 mx-2 nav-link" to="/products">Equipos</Link>
                        <Link className="fs-5 mx-2 nav-link" to="/services">Servicio Técnico</Link>
                        <Link className="fs-5 mx-2 nav-link" to="/supplies">Insumos</Link>
                        <HashLink smooth to="/#contact-us" className="fs-5 mx-2 nav-link">Contacto</HashLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
