import React from 'react';
import { inkData } from '../../../data/index.js';
import { Container, Row, Col } from 'react-bootstrap';

const Compatibilitys = ({ id }) => {
    const ink = inkData.find(item => Number(item.id) === Number(id));

    if (!ink) {
        return <p>Compatibilidad no disponible.</p>;
    }

    return (
        <section className="ink-compatibility-section py-5">
            <Container>
                <h3 className="mb-4">Compatibilidad con impresoras y cabezales</h3>
                <Row>
                    {ink.compatibilitys.map((compatibility, index) => (
                        <Col key={index} md={6} className="mb-3">
                            <h5>{compatibility.brand}</h5>
                            <ul>
                                {compatibility.printhead.map((head, i) => (
                                    <li key={i}>{head}</li>
                                ))}
                            </ul>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Compatibilitys;
