const http    = require('http');
const { URL } = require('url');
const url     = require('url');
const host    = 'http://localhost/'
const port    = process.argv[2];

function parseTime(time) {
    const date     = new Date(time);
    const timeJson = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    };

    return JSON.stringify(timeJson);
}

function toUnixTimestamp(time) {
    const date     = new Date(time);
    const timeJson = {
        unixtime: date.getTime()
    };

    return JSON.stringify(timeJson);
}

const server  = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' });

    console.log('The server is running...');
    
    const urlData = new URL(request.url, `${host}:${port}`);

    if (null != urlData.searchParams.get('iso')) {
        const requestTime = urlData.searchParams.get('iso');

        if (urlData.pathname == '/api/parsetime') {
            response.write(parseTime(requestTime));
        } else if (urlData.pathname == '/api/unixtime') {
            response.write(toUnixTimestamp(requestTime));
        }
    }

    response.end();
});

// Starting the local server
server.on('error', err => console.error(err.message))
.listen(port);
