const fs        = require('fs');
const path      = require('path');
const filePath  = process.argv[2];
const extension = '.' + process.argv[3];

fs.readdir(filePath, (err, list) => {
    if (err) throw err;

    list.forEach((file) => {
        if (path.extname(file) == extension) {
            console.log(file);
        }
    })
})