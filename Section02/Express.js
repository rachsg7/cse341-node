/* Run npm init to create package file 
 * Run npm install --save express 
 * npm install --save-dev nodemon to install nodemon */

// Import Node to use http and local file routes
const http = require('http');
const express = require('express');

const app = express();

// Request, resolve, next

// app.use((req, res, next) => {
//     console.log('First Middleware');
//     next();
// });

// app.use((req, res, next) => {
//     console.log('Second Middleware');
//     res.send('<h1>Assignment solved (almost)</h1>'); // Send ends this like next()
// });

app.use('/users', (req, res, next) => {
    console.log('/users middleware');
    res.send('<p>The middleware that handles just /users</p>');
});

app.use('/', (req, res, next) => {
    console.log('/ middleware');
    res.send('<p>The Middleware that handles just /</p>'); // Send ends this like next()
});



// Create the server

app.listen(3000);