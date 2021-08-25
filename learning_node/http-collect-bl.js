const BufferListStream = require('bl');
const bl               = require('bl')
// const url            = 'http://localhost:8000/';
const url              = process.argv[2];
const http             = require('http');
const successfulCode   = 200;

http.get(url, (response) => {
    const statusCode = response.statusCode;
    let error;

    if (statusCode !== successfulCode) {
        error = new Error('Request failed with an unexpected code ' + response.statusCode)
    }

    if (error) {
        console.error('An error occurred during the request: ' + error.message);

        response.resume();
        return;
    }

    response.pipe(BufferListStream((err, data) => {
        if (err) throw err;
        
        data = data.toString();
    
        console.log(data.length);
        console.log(data);
    }))
})
.on('error', (error) => {
    console.error('An error occurred ' + error.message);
})

// Create a local server to receive data from
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      data: ['Hello World!', 'Bye, world', 'Hey Mary', 'Jopin Popin', 'Sikin Dikin']
    }));
  });
  
  server.listen(8000);