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
              Discover the story behind the butter crust and what makes us unique
            </p>
          </Col>
        </Row>

        {/* About Content */}
        <Row className="align-items-center my-5">
          <Col md={6} className="mb-4">
          <h2 className="h4">Our Story</h2>
            <p>
              From humble beginnings in 2004, our brand has grown into a beacon of quality and innovation. Our story is one of dedication and passion, continuously striving to bring the best to our community.
            </p>
          </Col>
          <Col md={6} className="mb-4">
            <img
              src= "/images/story.jpg"
              alt="Our Story"
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
              src="/images/friends.jpg"
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
              src="/images/thumbs.jpg"
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