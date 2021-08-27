const http     = require('http');
const port     = process.argv[2];
const server   = http.createServer((request, response) => {
    response.writeHead(200, { 'content-type': 'text/plain' });
    request.setEncoding('utf-8');
    request.on('data', data => {
        const upperCaseData = data.toUpperCase();

        response.write(upperCaseData);
    })
});

// Starting the local server
server.on('error', error => {
    console.error(error.message);
})
.listen(port);
