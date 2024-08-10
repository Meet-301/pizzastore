import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import '../styles/Home.css';
import pizza1 from "../images/pizza1.jpg"
import pizza2 from "../images/pizza2.jpg"
import pizza3 from "../images/pizza3.jpg"
import ingredient from "../images/ingredient.jpg"

function Home() {
    return (
        <div className="home-page">
            {/* Slider Section */}
            <Carousel className="hero-slider">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src= {pizza1}
                        alt="Delicious Pizza"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src= {pizza2}
                        alt="Fresh Ingredients"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src= {pizza3}
                        alt="Fast Delivery"
                    />
                </Carousel.Item>
            </Carousel>

            {/* Feature Section */}
            <div className="features-section">
                <Container>
                    <Row>
                        <Col md={4} className="text-center">
                            <img
                                src= {ingredient}
                                alt="Fresh Ingredients"
                                className="img-fluid feature-image"
                            />
                            <h3>Fresh Ingredients</h3>
                            <p>Only the freshest ingredients to ensure that every bite is a delight.</p>
                        </Col>
                        <Col md={4} className="text-center">
                            <img
                                src="https://images.unsplash.com/photo-1574760186312-1ab54acb1936"
                                alt="Fast Delivery"
                                className="img-fluid feature-image"
                            />
                            <h3>Fast Delivery</h3>
                            <p>Quick and reliable delivery straight to your doorstep.</p>
                        </Col>
                        <Col md={4} className="text-center">
                            <img
                                src="https://images.unsplash.com/photo-1599785209707-b379da082de6?ixlib=rb-4.0.3&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGRlc3Nlcml0JTIwZGVsaXZlcnl8fDB8fHx8MTY4MDc1MjUzOA&ixlib=rb-1.2.1&q=80&w=1080"
                                alt="Great Taste"
                                className="img-fluid feature-image"
                            />
                            <h3>Great Taste</h3>
                            <p>Experience the authentic taste of expertly crafted pizzas.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Home;