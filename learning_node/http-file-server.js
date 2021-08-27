const http   = require('http');
const fs     = require('fs');
const port   = process.argv[2];
const file   = process.argv[3];
const server = http.createServer((request, response) => {
    response.writeHead(200, { 'content-type': 'text/plain' });
    
    let readable = fs.createReadStream(file);

    readable.on('error', error => {
        console.error(error.message);
    });
    readable.setEncoding('utf-8');
    readable.pipe(response);
})


server.on('error', error => {
    console.error(error.message);
})
.listen(port);

// For testing

// http.get('http://localhost:' + port + '/', response => {
//     response.setEncoding('utf-8');

//     response.on('data', chunk => {
//         console.log(chunk);
//     })
// }).on('error', error => console.error(error.message));