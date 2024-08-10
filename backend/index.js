const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setup storage for Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Mock database
let items = [
  { id: 1, name: 'Margherita', ingredients: ['tomato', 'mozzarella', 'basil'], price: 250, image: '/images/margherita.jpg' },
  { id: 2, name: 'Pepperoni', ingredients: ['tomato', 'mozzarella', 'pepperoni'], price: 350, image: '/images/pepperoni.jpg' },
];

// Get all items
app.get('/items', (req, res) => {
  res.json(items);
});

app.get('/',(req,res) => {
    res.send('Welcome to the Pizza Store API!');
});

// Get item by ID
app.get('/items/:id', (req, res) => {
  const item = items.find(item => item.id === parseInt(req.params.id));
  if (item) {
    res.json(item);
  } else {
    res.status(404).send('Item not found');
  }
});

// Add new item
app.post('/items', upload.single('image'), (req, res) => {
  const newItem = {
    id: items.length + 1,
    name: req.body.name,
    ingredients: req.body.ingredients.split(','),
    price: parseFloat(req.body.price),
    image: req.file ? `/images/${req.file.filename}` : '',
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

// Update an item
app.put('/items/:id', upload.single('image'), (req, res) => {
  const index = items.findIndex(item => item.id === parseInt(req.params.id));
  if (index !== -1) {
    const updatedItem = {
      ...items[index],
      name: req.body.name,
      ingredients: req.body.ingredients.split(','),
      price: parseFloat(req.body.price),
      image: req.file ? `/images/${req.file.filename}` : items[index].image,
    };
    items[index] = updatedItem;
    res.json(updatedItem);
  } else {
    res.status(404).send('Item not found');
  }
});

// Delete an item
app.delete('/items/:id', (req, res) => {
  const index = items.findIndex(item => item.id === parseInt(req.params.id));
  if (index !== -1) {
    items.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Item not found');
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});