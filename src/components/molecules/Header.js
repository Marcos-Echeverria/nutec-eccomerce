import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';

function Header() {
    const location = useLocation();

    const handleLogoClick = () => {
        if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    return (
        <>
            <Navbar
                expand="lg"
                style={{ backgroundColor: 'white', padding: '0.5rem 2rem' }}
                data-bs-theme="white"
                sticky="top"
                className="shadow-sm"
            >
                <Container className="d-flex justify-content-between align-items-center">
                    <Navbar.Brand>
                        <Link to="/" className="d-inline-block" onClick={handleLogoClick}>
                            <Image
                                src="/Logo-img.png"
                                width="120"
                                height="60"
                                className="d-inline-block"
                                alt="Nutec logo"
                            />
                        </Link>
                    </Navbar.Brand>

                    {/* Toggle button for hamburger menu */}
                    <Navbar.Toggle aria-controls="navbar-nav" />

                    {/* Collapsible nav links */}
                    <Navbar.Collapse id="navbar-nav" className="justify-content-end">
                        <Nav className="d-flex">
                            <Link className="fs-5 mx-2 nav-link" to="/inks">Tintas</Link>
                            <Link className="fs-5 mx-2 nav-link" to="/printers">Equipos</Link>
                            <Link className="fs-5 mx-2 nav-link" to="/services">Servicio Técnico</Link>
                            <Link className="fs-5 mx-2 nav-link" to="/supplies">Insumos</Link>
                            <HashLink smooth to="/#contact-us" className="fs-5 mx-2 nav-link">Contacto</HashLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
