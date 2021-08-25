// const url1            = 'http://localhost:8000/';
// const url2            = 'http://jsonplaceholder.typicode.com/posts/1';
// const url3            = 'http://xrutor.org/';
const url1            = process.argv[2];
const url2            = process.argv[3];
const url3            = process.argv[4];
const http           = require('http');
const successfulCode = 200;

let httpGetPromise = function(url) {
    return new Promise((resolve, reject) => {
        http.get(url, response => {
            const statusCode = response.statusCode;
            let error;
        
            if (statusCode !== successfulCode) {
                error = new Error('Request failed with an unexpected code ' + response.statusCode)

                reject(error);
            }
        
            response.setEncoding('utf-8');
    
            let responseData = '';

            response
            .on('data', (chunk) => {
                responseData += chunk; 
            })
            .on('end', () => {
                resolve(responseData);
            })
        })
    })
}

let promise = Promise.all([
    httpGetPromise(url1),
    httpGetPromise(url2),
    httpGetPromise(url3)
]);

promise.then(responses => {
    responses.forEach(response => {
        console.log(response);
    })
})
.catch(error => console.error(error.message));

// 1. Promisify the http.get requests
// 2. Wait for all of them with Promise.all function
// 3. console.log the result


// Create a local server to receive data from
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify({
//       data: ['Hello World!', 'Bye, world', 'Hey Mary', 'Jopin Popin', 'Sikin Dikin']
//     }));
//   });
  
//   server.listen(8000);