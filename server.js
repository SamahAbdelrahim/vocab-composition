const express = require('express');
const path = require('path');

const app = express();
const port = 3002;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'experiment')));

// Set up a route for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'experiment', 'solidity-ratings.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});