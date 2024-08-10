import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import '../styles/Home.css'; // Adjusted import

function Home() {
    return (
        <div className="home-page">
            {/* Slider Section */}
            <Carousel className="hero-slider">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1603031979863-2b4f9c3c3b59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHBpenphfGVufDB8fHx8MTYyNjUxODMyMA&ixlib=rb-1.2.1&q=80&w=1080"
                        alt="Delicious Pizza"
                    />
                    <Carousel.Caption>
                        <h3>Welcome to the Best Pizza Store</h3>
                        <p>Enjoy our delicious, hot, and fresh pizzas delivered straight to your door.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1571456905141-5a0c9e6d945b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHBpenphfGVufDB8fHx8MTYyNjUxODMyMA&ixlib=rb-1.2.1&q=80&w=1080"
                        alt="Fresh Ingredients"
                    />
                    <Carousel.Caption>
                        <h3>Fresh Ingredients</h3>
                        <p>We use only the freshest ingredients for a perfect pizza every time.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fHBpenphfGVufDB8fHx8MTYyNjUxODMyMA&ixlib=rb-1.2.1&q=80&w=1080"
                        alt="Fast Delivery"
                    />
                    <Carousel.Caption>
                        <h3>Fast Delivery</h3>
                        <p>Get your pizza delivered hot and fresh in record time.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* Feature Section */}
            <div className="features-section">
                <Container>
                    <Row>
                        <Col md={4} className="text-center">
                            <img
                                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
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
                                src="https://images.unsplash.com/photo-1581873372794-1e1e6a3e8f47"
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