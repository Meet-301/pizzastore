import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <div className="py-5 bg-light">
      <Container>
        {/* Section Heading */}
        <Row className="justify-content-center">
          <Col md={8} className="text-center mb-4">
            <h1 className="display-4">Contact Us</h1>
            <p className="lead text-muted">
              Get in touch with us for any inquiries or support
            </p>
          </Col>
        </Row>

        {/* Contact Details */}
        <Row className="mb-5">
          <Col md={6} className="mb-4">
            <h2 className="h4">Our Contact Details</h2>
            <p><strong>Address:</strong> Morbi</p>
            <p><strong>Phone:</strong> 9876543210</p>
            <p><strong>Email:</strong> contact@buttercrust.com</p>
          </Col>

          {/* Contact Form */}
          <Col md={6}>
            <h2 className="h4">Send Us a Message</h2>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" required />
              </Form.Group>
              
              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" required />
              </Form.Group>
              
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Your message" required />
              </Form.Group>
              
              <div className="mt-4"> {/* Added margin-top here */}
                <Button variant="primary" type="submit">
                  Send Message
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;