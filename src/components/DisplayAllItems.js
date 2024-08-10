import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';

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
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/items')
            .then(response => {
                setItems(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the data!", error);
            });
    }, []);

    const handleShowModal = (item) => {
        setSelectedItem(item);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedItem(null);
    };

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
                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="mb-3">{item.name}</Card.Title>
                                <div className="d-flex flex-column justify-content-between mt-auto">
                                    <Card.Text className="mb-3">
                                        <strong>Price: &#8377;{item.price}</strong>
                                    </Card.Text>
                                    <Button 
                                        variant="primary" 
                                        onClick={() => handleShowModal(item)}
                                    >
                                        Details
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* Modal for displaying item details */}
            {selectedItem && (
                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedItem.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p><strong>Ingredients:</strong></p>
                        <p>{selectedItem.ingredients.join(', ')}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </Container>
    );
}

export default DisplayAllItems;