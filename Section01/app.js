/* Run npm init to create package file 
 * Run npm install --save express 
 * npm install --save-dev nodemon to install nodemon 
 * npm install --save ejs pug express-handlebars (can just do one?)*/

// Import Node to use http and local file routes
const http = require('http');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.set('view engine', 'pug'); // Tell the express engine that you're using pug for dynamic html content
app.set('views', 'views'); // Tell express where to find the views folder

// Request, resolve, next

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public'))); // Get clean absolute path for all OS

app.use('/admin', adminData.routes); // Adding '/admin' also makes it so you don't have to add it to the admin.js page
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', { docTitle: '404 Page Not Found' });
    //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});


// Create the server

app.listen(3000);