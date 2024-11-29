const fibonacci = function(number) {
    if(number < 0) {
        return "OOPS";
    }

    let fibonacciNumber = 0;
    let firstPrevious = 0;
    let secondPrevious = 0;

    for(let i = 1; i <= number; i++) {
        if(i === 1) {
            fibonacciNumber = 1;
        } else {
            fibonacciNumber = firstPrevious + secondPrevious;
        }
        // fibonacciNumber = (firstPrevious + secondPrevious) || 1;
        secondPrevious = firstPrevious;
        firstPrevious = fibonacciNumber;
    }

    return fibonacciNumber;
};

// Do not edit below this line
module.exports = fibonacci;
