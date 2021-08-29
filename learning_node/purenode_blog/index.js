const http    = require('http');
const port    = process.argv[2] ?? 8000;
const fs      = require('fs');
const path    = require('path');
const dirPath = __dirname;
const server  = http.createServer((request, response) => {
    const requestUrl    = request.url; 
    let pathToHTML      = path.join(dirPath, 'public', (requestUrl === '/') ? 'index.html' : requestUrl);
    const fileExtension = path.extname(pathToHTML);
    let contentType     = '';
    
    switch (fileExtension) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.jpg':
            contentType = 'image/jpeg';
            break;
        case '.ico':
            contentType = 'image/x-icon';
            break;
        default:
            contentType = 'text/html';
    }

    if (!fileExtension) {
        pathToHTML += '.html';
    }

    fs.readFile(pathToHTML, (err, content) => {
        if (err) {
            response.writeHead(404, { 'Content-Type': 'text/plain' });
            response.end(`There is no such file on the server - ${pathToHTML} .`);

            return;
        }

        response.writeHead(200, {
            'Content-Type': contentType
        });
        response.write(content);
        response.end();

    });
});

server.listen(port)
.on('error', err => console.error('An error occurred: ' + err.message));