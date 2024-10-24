import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

import { Layout } from '../../components/molecules/index.js';
import { inkData } from '../../data/index.js';

const ProductGrid = () => {
  return (
    <Layout>
      <Row className="justify-content-center">
        {inkData.map((ink, index) => (
          <Col md={6} lg={4} key={index} className="mb-4 d-flex">
            {/* Añadimos la clase de sombra de Bootstrap y una personalizada para el hover */}
            <Card className="ink-card h-100 w-100 shadow-lg text-white"> 
              <div className="ink-image-as-background" style={{ backgroundImage: `url(${ink.imageUrl})` }}>
                <div className="ink-content p-4 d-flex flex-column justify-content-end h-100">
                  <Card.Title className="mb-3" style={{ fontWeight: '700', textShadow: '2px 2px 10px rgba(0, 0, 0, 1)' }}>{ink.name}</Card.Title>
                  <Card.Text className="mb-4" style={{ fontWeight: '600', textShadow: '2px 2px 10px rgba(0, 0, 0, 1)' }}>
                    {ink.description.length > 50
                      ? ink.description.substring(0, 50) + '...'
                      : ink.description}
                  </Card.Text>
                  <Button variant="light" className="rounded-pill ink-button align-self-end">Ver más</Button>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Layout>
  );
};

export default ProductGrid;
