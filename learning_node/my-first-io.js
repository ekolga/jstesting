const fs        = require('fs');
const LINE_FEED = '\n'.charCodeAt(0)
let readStream  = fs.readFileSync(process.argv[1]);
let counter     = 0;

console.dir(readStream)

for(i = 0; i < readStream.length; ++i) {
    if (readStream[i] == LINE_FEED) counter++;
}

console.log(counter);
