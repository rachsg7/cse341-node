// Import Node to use http and local file routes
const http = require('http');
const routes = require('./routes');

// Create the server
const server = http.createServer(routes);

server.listen(3000);