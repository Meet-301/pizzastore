import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <div className="py-5 bg-light">
      <Container>
        {/* Section Heading */}
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h1 className="display-4">About Us</h1>
            <p className="lead text-muted">
              Discover the story behind our brand and what makes us unique.
            </p>
          </Col>
        </Row>

        {/* About Content */}
        <Row className="align-items-center my-5">
          <Col md={6} className="mb-4">
            <h2 className="h4">Our Mission</h2>
            <p>
              Our mission is to provide the best pizza experience by using only the freshest ingredients and delivering unparalleled service. We are committed to quality, innovation, and customer satisfaction.
            </p>
          </Col>
          <Col md={6} className="mb-4">
            <img
              src= "/images/chef.jpg"
              alt="Our Mission"
              className="img-fluid rounded"
            />
          </Col>
        </Row>

        <Row className="align-items-center my-5">
          <Col md={6} className="order-md-2 mb-4">
            <h2 className="h4">Our Vision</h2>
            <p>
              We envision a world where every meal is a delightful experience, and we strive to be a part of that by offering delicious pizzas that bring people together.
            </p>
          </Col>
          <Col md={6} className="order-md-1 mb-4">
            <img
              src="https://via.placeholder.com/500"
              alt="Our Vision"
              className="img-fluid rounded"
            />
          </Col>
        </Row>

        <Row className="align-items-center my-5">
          <Col md={6} className="mb-4">
            <h2 className="h4">Our Values</h2>
            <p>
              We believe in integrity, excellence, and community. Our values guide us in everything we do, from sourcing ingredients to serving our customers.
            </p>
          </Col>
          <Col md={6} className="mb-4">
            <img
              src="https://via.placeholder.com/500"
              alt="Our Values"
              className="img-fluid rounded"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;