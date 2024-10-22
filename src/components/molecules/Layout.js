import React from 'react';
import { Container } from 'react-bootstrap';

const Layout = ({ children }) => {
    return (
        <Container fluid="lg" className="px-5 py-5">
            {children}
        </Container>
    );
};

export default Layout;
