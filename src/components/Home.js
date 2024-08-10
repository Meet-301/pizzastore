import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/Home.css';
import img from '../images/bg.jpg';

function Home() {
    return (
        <div className="home-page">
            <div className="hero-section">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <h1 className="hero-title">Welcome to the Best Pizza Store</h1>
                            <p className="hero-subtitle">
                                Delicious, hot, and fresh pizzas delivered straight to your door. Order now and satisfy your cravings!
                            </p>
                            <Button variant="primary" size="lg" className="hero-button">Order Now</Button>
                        </Col>
                        <Col md={6}>
                            <img
                                src={img}
                                alt="Delicious Pizza"
                                className="img-fluid"
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="features-section">
                <Container>
                    <Row>
                        <Col md={4}>
                            <h3>Fresh Ingredients</h3>
                            <p>We use only the freshest ingredients to ensure that every bite is a delight.</p>
                        </Col>
                        <Col md={4}>
                            <h3>Fast Delivery</h3>
                            <p>Get your pizza delivered hot and fresh in record time.</p>
                        </Col>
                        <Col md={4}>
                            <h3>Great Taste</h3>
                            <p>Experience the authentic taste of our expertly crafted pizzas.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Home;