import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

import { Layout } from '../../components/molecules/index.js';
import { printersData } from '../../data/index.js';

const PrinterProductGrid = () => {
  return (
    <Layout>
      <section className="printer-product-grid py-5">
        {printersData.map((printer, index) => (
          <div key={index} className={`mb-4 w-100 ${index !== printersData.length - 1 ? 'with-line' : ''}`}> {/* Añade la línea de separación */}
            <Row noGutters className="align-items-center w-100">
              {/* Columna con la tarjeta que contiene solo la imagen del equipo */}
              <Col md={6}>
                <Card className="shadow-lg h-100 rounded-lg printer-card"> {/* Añadimos bordes redondeados */}
                  <div className="position-relative"> {/* Contenedor para el overlay */}
                    <img src={printer.image} alt={printer.name} className="img-fluid w-100 h-100" />
                    <div className="overlay"></div> {/* Overlay oscuro */}
                  </div>
                </Card>
              </Col>

              {/* Columna con los detalles del equipo (fuera de la tarjeta) */}
              <Col md={6} className="printer-details">
                <img src={printer.data} alt={printer.name} className="img-fluid w-100 h-100" />
              </Col>
            </Row>
          </div>
        ))}
      </section>
    </Layout>
  );
};

export default PrinterProductGrid;
