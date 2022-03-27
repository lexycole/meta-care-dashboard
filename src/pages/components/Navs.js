import React from 'react';
import { Row, Col, Container } from '@themesberg/react-bootstrap';


export default () => (
  <article>
    <Container className="px-0">
      <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
        <Col className="d-block mb-4 mb-md-0">
          <h1 className="h2">Navs</h1>
          <p className="mb-0">
            Use navigation tabs to break up pieces of content.
          </p>
        </Col>
      </Row>
    </Container>
  </article>
);
