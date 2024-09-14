// Load the Express module
const express = require('express');

// Create an Express application
const app = express();

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Hello, World! This is a sample Node.js Application');
});

// Another route
app.get('/about', (req, res) => {
    res.send('This is the About page of my first Node.js app.');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
