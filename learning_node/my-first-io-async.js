const fs        = require('fs');
const LINE_FEED = '\n'.charCodeAt(0)
let counter     = 0;

// Readstream way
let readStream  = fs.createReadStream(process.argv[2]);

readStream.on('data', (chunk) => {
    for(i = 0; i < chunk.length; ++i) {
        if (chunk[i] == LINE_FEED) counter++;
    }
})

readStream.on('end', () => console.log(counter));

// readFile way

fs.readFile(process.argv[2], (err, data) => {
    if (err) throw err;
    
    for(i = 0; i < data.length; ++i) {
        if (data[i] == LINE_FEED) counter++;
    }

    console.log(counter);
})