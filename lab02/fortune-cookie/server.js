// Require the Express and Child_process module
const express = require('express');
const child_process = require('child_process');

// Create an Express web application
const app = express();

// Specify how to respond to GET /
app.get('/', (req, res) => {
    // Run the system 'fortune' command and respond with the message
    child_process.exec('fortune', (error, message) => {
        let full_message = 'Your fortune is: "';
        if(error === null) {
            full_message += message;
        } else {
            full_message += error;
        }
        full_message += '"<br>' + Date()
        res.send(full_message)
    })
});

// Start listening for HTTP requests on port 3000
app.listen(3000, () => {
    console.log('Server started');
});
