const express = require('express');
const path = require('path');

// load the env vars
require('dotenv').config();

// configure app & mount middleware
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));



// routes

// API


// Serve REACT UI and facilitate client-side routing
app.get('/*', (req,res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


const port = process.env.PORT || 3001;

app.listen(port);