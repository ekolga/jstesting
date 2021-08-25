// const url            = 'http://localhost:8000/';
const url            = process.argv[2];
const http           = require('http');
const successfulCode = 200;

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

    response.setEncoding('utf-8');
    
    let responseData = '';

    response
    .on('data', (chunk) => {
        responseData += chunk; 
    })
    .on('end', () => {
        console.log(responseData.length);
        console.log(responseData);
    })
})
.on('error', (error) => {
    console.log(`Wow, an error happenned`);
    console.error(error.message);
})

// // Create a local server to receive data from
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify({
//       data: ['Hello World!', 'Bye, world', 'Hey Mary', 'Jopin Popin', 'Sikin Dikin']
//     }));
//   });
  
//   server.listen(8000);