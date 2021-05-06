/* Run npm init to create package file 
 * Run npm install --save express 
 * npm install --save-dev nodemon to install nodemon 
 * npm install --save ejs pug express-handlebars (can just do one?)*/

// Import Node to use http and local file routes
const http = require('http');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs'); // Tell the express engine that you're using pug for dynamic html content
app.set('views', 'views'); // Tell express where to find the views folder -- This is the default setting so it's not technically needed

// Request, resolve, next

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public'))); // Get clean absolute path for all OS

app.use('/admin', adminRoutes); // Adding '/admin' also makes it so you don't have to add it to the admin.js page
app.use(shopRoutes);

/*app.use(app.router);
adminRoutes.routes.initialize(app);
shopRoutes.routes.initialize(app);*/

app.use(errorController.get404);


// Create the server

app.listen(3000);