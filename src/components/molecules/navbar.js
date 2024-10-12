import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';

function Navegacion() {
    return (
        <>
            <Navbar bg="white" data-bs-theme="white" sticky="top" className="shadow-sm">
                <Container fluid>
                    <Navbar.Brand className="ms-5" href="#home">
                        <Image
                            src="/Logo-img.png"
                            width="90"
                            height="50"
                            className="d-inline-block align-top"
                            alt="Nutec logo"
                        />
                        {''}
                    </Navbar.Brand>
                    <Nav className="ms-5" style={{ fontFamily: '"Afacad Flux", sans-serif' }}>
                        <Nav.Link className="fs-5" href="#">Equipos</Nav.Link>
                        <Nav.Link className="fs-5" href="#">Nutec</Nav.Link>
                        <Nav.Link className="fs-5" href="#">Servicio técnico</Nav.Link>
                        <Nav.Link className="fs-5" href="#">Insumos</Nav.Link>
                        <Nav.Link className="fs-5" href="#">Gestión de color</Nav.Link>
                        <Nav.Link className="fs-5" href="#">Contacto</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Navegacion;