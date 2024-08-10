import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

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

const MyItems = () => {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:5000/items')
            .then(response => {
                setItems(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the data!", error);
            });
    }, []);

    const handleAddItem = () => {
        navigate('/additem');
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/items/${id}`)
            .then(() => {
                setItems(items.filter(item => item.id !== id));
            })
            .catch(error => {
                console.error("There was an error deleting the item!", error);
            });
    };

    const handleUpdate = (id) => {
        // Navigate to the update page (assuming you have one)
        navigate(`/updateitem/${id}`);
    };

    return (
        <Container>
            <div className="d-flex justify-content-end my-4">
                <Button onClick={handleAddItem}>Add Item</Button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Ingredients</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.ingredients.join(', ')}</td>
                            <td>&#8377;{item.price}</td>
                            <td>
                                <Button 
                                    variant="warning" 
                                    onClick={() => handleUpdate(item.id)} 
                                    className="me-2"
                                >
                                    Update
                                </Button>
                                <Button 
                                    variant="danger" 
                                    onClick={() => handleDelete(item.id)}
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default MyItems;