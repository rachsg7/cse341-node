// Import fs from Node
const fs = require('fs');

// requestHandler is a function that has a callback to get the important info for the page
const requestHandler = (req, res) => {
    // Get the url and method (POST) from the request
    const url = req.url;
    const method = req.method;
    // If the url is basically empty, goto the form page
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    // If the url is /message, get the data from the form, then Buffer it to make it readable, and reload the same page
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        // Return because it is asynchronous code and it would otherwise run the next chunk of code that we don't want to run
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    // This executes if there is a different url than above
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
};

module.exports = requestHandler;

// Node.js to export more than one:

// exports.handler = requestHandler;
// exports.someText = 'Some hard coded text';
// - OR -
// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard coded text';
// };