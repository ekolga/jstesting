let arguments = process.argv;

let getSumOfArrayElements = function(array) {
    let numbers = 0;

    array.forEach(element => {
        element = Number(element);
        
        if (!isNaN(element)) {
            numbers += element;
        }
    });

    return numbers;
}

console.log(getSumOfArrayElements(arguments));