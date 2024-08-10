import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';

/**
 * @typedef {Object} Item
 * @property {number} id
 * @property {string} name
 * @property {string[]} ingredients
 * @property {number} price
 * @property {string} image
 */

/**
 * @type {Item[]}
 */

function DisplayAllItems() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/items')
            .then(response => {
                setItems(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the data!", error);
            });
    }, []);

    return (
        <Container className="display-all-items">
            <h2 className="text-center my-4">All Pizzas</h2>
            <Row>
                {items.map(item => (
                    <Col md={4} key={item.id} className="mb-4">
                        <Card>
                            <Card.Img 
                                variant="top" 
                                src={item.image} 
                                className="img-fluid" 
                                style={{ height: '200px', objectFit: 'cover' }} 
                            />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    {item.description}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Price: &#8377;{item.price}</strong>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default DisplayAllItems;