require('dotenv').config();
const express = require('express');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
const varlog = require('./variables/variables-logger.js'); // Import the model

const app = express();
const port = process.env.PORT || 3002;

const server = app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
  
  server.on('error', error => {
    if (error.code === 'EADDRINUSE') {
      console.log(`Port ${port} is in use, trying another port.`);
      port += 1; // increment port number by one
      server.close();
      server.listen(port);
    } else {
      console.error(error);
    }
  });

// Middleware to parse JSON
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'experiment')));

// Set up a route for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'experiment', 'solidity-ratings.html'));
});

// MongoDB connection
let raw_data = fs.readFileSync('mongo_auth.json');
let auth = JSON.parse(raw_data);  
let mongoDBUri = `mongodb://${auth.user}:${auth.password}@127.0.0.1:27017/samah?authSource=admin`;

// MongoDB
mongoose.connect(mongoDBUri)
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

// Logging
app.post('/api/log', (req, res) => {

    const { rt, trial_type, trial_index, time_elapsed, internal_node_id, subject, response, theword, block, study_id, session_id } = req.body;
  
    const newLog = new varlog({ rt, trial_type, trial_index, time_elapsed, internal_node_id, subject, response, theword , block, study_id, session_id});

    newLog.save()
        .then(() => res.send('Action logged successfully'))
        .catch(err => res.status(500).send('Error logging action: ' + err.message));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
