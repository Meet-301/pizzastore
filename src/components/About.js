import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <div className="py-5 bg-light">
      <Container>
        {/* Section Heading */}
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h1 className="display-4">About Our Pizza Store</h1>
            <p className="lead text-muted">
              Discover what makes our pizza store special and learn more about our offerings.
            </p>
          </Col>
        </Row>

        {/* Our Story Section */}
        <Row className="align-items-center my-5">
          <Col md={6} className="mb-4">
            <h2 className="h4">Our Story</h2>
            <p>
              Established with a passion for great pizza, our store has been serving delicious, handcrafted pizzas to our community. We focus on quality ingredients and innovative recipes to ensure an unforgettable dining experience.
            </p>
            <p>
              Our journey began with a commitment to delivering exceptional pizza, and we continue to strive for excellence with every pizza we make.
            </p>
          </Col>
          <Col md={6} className="mb-4">
            <img
              src="/images/storefront.jpg"  // Placeholder image representing the store
              alt="Our Store"
              className="img-fluid rounded"
            />
          </Col>
        </Row>

        {/* Our Offerings Section */}
        <Row className="align-items-center my-5">
          <Col md={6} className="mb-4">
            <h2 className="h4">Our Offerings</h2>
            <p>
              We offer a diverse menu of pizzas, each crafted with care and the finest ingredients. From classic favorites to unique gourmet options, there's something for everyone to enjoy.
            </p>
            <p>
              In addition to our pizzas, we provide a selection of appetizers, salads, and desserts to complement your meal. Explore our menu and experience the flavors we have to offer.
            </p>
          </Col>
          <Col md={6} className="mb-4">
            <img
              src="/images/menu.jpg"  // Placeholder image showcasing menu items
              alt="Our Menu"
              className="img-fluid rounded"
            />
          </Col>
        </Row>

        {/* Our Values Section */}
        <Row className="align-items-center my-5">
          <Col md={6} className="mb-4">
            <h2 className="h4">Our Values</h2>
            <p>
              We are dedicated to maintaining the highest standards of quality, integrity, and customer satisfaction. Our core values guide every aspect of our business, from the ingredients we use to the service we provide.
            </p>
            <p>
              We believe in creating a positive impact in our community and continuously improving to offer the best possible experience to our guests.
            </p>
          </Col>
          <Col md={6} className="mb-4">
            <img
              src="/images/values.jpg"  // Placeholder image representing values or community
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