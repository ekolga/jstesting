const mymodule  = require('./mymodule.js');
const filePath  = process.argv[2];
const extension = process.argv[3];

let callbackFn = (err, list) => {
    if (err) console.log(err);

    list.forEach(element => {
        console.log(element);
    });
};

mymodule(filePath, extension, callbackFn);
