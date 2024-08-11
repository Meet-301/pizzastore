import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link for internal routing

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} className="text-center mb-3">
            <h5>Quick Links</h5>
            <Nav className="justify-content-center">
              <Nav.Item>
                <Nav.Link as={Link} to="/about" className="text-light">About Us</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/contact" className="text-light">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={12} className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;