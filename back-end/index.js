const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Tshirts fetching
// Serve static files from the 'public' directory
app.use('/tshirts', express.static(path.join(__dirname, 'public/tshirts')));

// Endpoint to get all images
app.get('/api/tshirts', (req, res) => {
  const imagesDir = path.join(__dirname, 'public/tshirts');
  fs.readdir(imagesDir, (err, files) => {
    if (err) {
      return res.status(500).send('Unable to scan directory');
    }
    const imageUrls = files.map(file => `http://localhost:5000/tshirts/${file}`);
    res.json(imageUrls);
  });
});

// Shirts fetching
// Serve static files from the 'public' directory
app.use('/shirts', express.static(path.join(__dirname, 'public/shirts')));

// Endpoint to get all images
app.get('/api/shirts', (req, res) => {
  const imagesDir = path.join(__dirname, 'public/shirts');
  fs.readdir(imagesDir, (err, files) => {
    if (err) {
      return res.status(500).send('Unable to scan directory');
    }
    const imageUrls = files.map(file => `http://localhost:5000/shirts/${file}`);
    res.json(imageUrls);
  });
});


app.get('/', (req, res) => {
    res.send('Hello from Node.js server');
});

app.post('/api/data', (req, res) => {
    const data = req.body;
    // process data
    res.send('Data received');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
