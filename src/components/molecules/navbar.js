import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navegacion() {
    return (
        <>
            <Navbar bg="white" data-bs-theme="white" sticky="top" className="shadow-sm">
                <Container>
                    <Navbar.Brand href="#home">Logo</Navbar.Brand>
                    <Nav className="">
                        <Nav.Link href="#home">Feature 1</Nav.Link>
                        <Nav.Link href="#features">Feature 2</Nav.Link>
                        <Nav.Link href="#pricing">Feature 3</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Navegacion;