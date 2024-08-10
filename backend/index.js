const express = require('express');
const multer = require('multer');
const path = require('path');

// Initialize Express app
const app = express();
const port = 5000;

// Set up multer for file handling
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Middleware to parse JSON and URL-encoded requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

app.get('/', (req, res) => {
    res.send('Welcome to the Pizza Store API');
});

// Route to handle updating items with image upload
app.put('/items/:id', upload.single('image'), (req, res) => {
  const itemId = req.params.id;
  const { name, ingredients, price } = req.body;
  const image = req.file ? req.file.path : null;

  // Here you would update the item in your database
  // Example response:
  res.status(200).json({
    message: 'Item updated successfully',
    data: { name, ingredients, price, image },
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});