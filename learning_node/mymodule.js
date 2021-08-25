const fs   = require('fs');
const path = require('path');

module.exports = function(filePath, extension, callback) {
    extension = '.' + extension;
    
    fs.readdir(filePath, (err, data) => {
        if (err) return callback(err);

        let filtered = [];

        data.forEach((file) => {
            if (path.extname(file) == extension) {
                filtered.push(file);
            }
        })

        callback(null, filtered);
    });
}

