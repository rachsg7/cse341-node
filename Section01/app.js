// Import Node to use http and local file routes
const http = require('http');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

// Request, resolve, next

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public'))); // Get clean absolute path for all OS

app.use('/admin', adminRoutes); // Adding '/admin' also makes it so you don't have to add it to the admin.js page
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});


// Create the server

app.listen(3000);