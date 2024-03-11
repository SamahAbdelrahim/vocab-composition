const express = require('express');
const path = require('path');
//{ MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const varlog = require('./variables/variables-logger'); // Import the model

app = express();
const port = 3002;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'experiment')));

// Set up a route for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'experiment', 'solidity-ratings.html'));
});

// MongoDB connection URI (assuming local MongoDB server)
//const uri = 'mongodb://localhost:27017';

const mongoCreds = require('./mongo_auth.json');
const uri = `mongodb://${mongoCreds.user}:${mongoCreds.password}@localhost:27017/`;
// Logging
app.post('/api/log', (req, res) => {
    const { 
        rt,
        trial_type,
        trial_index,
        time_elapsed,
        internal_node_id,
        subject,
    } = req.body;
  
    const newLog = new varlog({ 
        rt,
        trial_type,
        trial_index,
        time_elapsed,
        internal_node_id,
        subject,
     });

    newLog.save()
      .then(() => res.send('Action logged successfully'))
      .catch(err => res.status(500).send('Error logging action: ' + err.message));
});


// Connect to MongoDB
/*
MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 5000 }, (err, client) => {
    if (err) {
        console.error('Error connecting to MongoDB:', err);
        return;
    }

    console.log('Connected to MongoDB');

    // Select the database
    const db = client.db('samah');

    // Define a collection name
    const collectionName = 'solidity_ratings';

    // Set up a route to handle incoming data from the HTML form
    app.post('/saveData', express.json(), (req, res) => {
        const data = req.body.data; // Access the 'data' property in the request body

        // Insert each trial into the MongoDB collection
        data.forEach(trial => {
            // Insert data into the MongoDB collection
            db.collection(collectionName).insertOne(trial, (insertErr, result) => {
                if (insertErr) {
                    console.error('Error inserting data into MongoDB:', insertErr);
                    return res.status(500).json({ error: 'Internal Server Error' });
                }

                console.log('Data inserted into MongoDB:', result.ops);
            });
        });

        res.json({ success: true });
    });
});
*/

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});



// const express = require('express');
// const path = require('path');

// const app = express();
// const port = 3002;

// // Serve static files from the "public" directory
// app.use(express.static(path.join(__dirname, 'experiment')));

// // Set up a route for the root URL
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'experiment', 'solidity-ratings.html'));
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running at http://localhost:${port}`);
// });



// const express = require('express');
// const path = require('path');
// const { MongoClient } = require('mongodb');

// const app = express();
// const port = 3002;

// // Serve static files from the "public" directory
// app.use(express.static(path.join(__dirname, 'experiment')));

// // Set up a route for the root URL
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'experiment', 'solidity-ratings.html'));
// });

// // Set up a route for handling button clicks
// app.post('/button-click', (req, res) => {
//     // Connect to MongoDB
//     MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
//         if (err) {
//             console.error('Error connecting to MongoDB:', err);
//             res.status(500).send('Internal Server Error');
//             return;
//         }

//         // Choose your database and collection name
//         const db = client.db('samah');
//         const collection = db.collection('test');

//         // Insert data into MongoDB
//         collection.insertOne({ buttonClick: new Date() }, (insertErr) => {
//             client.close();
//             if (insertErr) {
//                 console.error('Error inserting data into MongoDB:', insertErr);
//                 res.status(500).send('Internal Server Error');
//                 return;
//             }
//             res.status(200).send('Data inserted into MongoDB');
//         });
//     });
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running at http://localhost:${port}`);
// });
