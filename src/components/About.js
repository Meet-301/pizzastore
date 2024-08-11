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

        {/* Our Values Section */}
        <Row className="align-items-center my-5">
          <Col md={6} className="mb-4">
            <h2 className="h4">Our Values</h2>
            <p>
              We believe in integrity, excellence, and community. Our handshake is more than just a gesture—it’s our commitment to these principles.
            </p>
          </Col>
          <Col md={6} className="mb-4">
            <img
              src="/images/handshake.jpg"  // Assuming you have the handshake image in the public/images folder
              alt="Our Values"
              className="img-fluid rounded"
            />
          </Col>
        </Row>

        {/* Our Story Section */}
        <Row className="align-items-center my-5">
          <Col md={6} className="mb-4">
            <h2 className="h4">Our Story</h2>
            <p>
              From humble beginnings, our brand has grown into a beacon of quality and innovation. Our story is one of dedication and passion, continuously striving to bring the best to our community.
            </p>
          </Col>
          <Col md={6} className="mb-4">
            <img
              src="/images/story.jpg"  // Placeholder image for our story
              alt="Our Story"
              className="img-fluid rounded"
            />
          </Col>
        </Row>

        {/* Our Offerings Section */}
        <Row className="align-items-center my-5">
          <Col md={6} className="mb-4">
            <h2 className="h4">Our Offerings</h2>
            <p>
              We offer a wide range of products and services designed to meet the needs of our diverse clientele. Each offering reflects our commitment to quality and customer satisfaction.
            </p>
          </Col>
          <Col md={6} className="mb-4">
            <img
              src="/images/offerings.jpg"  // Placeholder image for offerings
              alt="Our Offerings"
              className="img-fluid rounded"
            />
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default About;
