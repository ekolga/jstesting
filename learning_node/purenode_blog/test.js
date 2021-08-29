const fs     = require('fs');
const http   = require('http');
const path   = require('path');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'image/jpeg' })

    fs.readFile(path.join(__dirname, 'public', 'images', 'profile-picture.jpg'), 'utf-8', (err, content) => {
        if (err) throw err;

        res.end(content)
    });
})

server.listen(8000);