const net      = require('net');
const strftime = require('strftime');
const timeNow  = strftime('%F %R', new Date());
const port     = process.argv[2];

// Starting a TCP server
const server = net.createServer(socket => {
    console.log('Client connected');

    socket.write(timeNow + '\r\n');
    socket.end();
    console.log('Client disconnected');
});

server.on('error', error => {
    console.error(error.message);
})
.listen(port);