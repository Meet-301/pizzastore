import axios from 'axios';
import { useEffect, useState } from 'react';

function DisplayAllItems() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/items')
            .then(response => {
                setItems(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the items!', error);
            });
    }, []);

    return (
        <div>
            <h1>All Items</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default DisplayAllItems;