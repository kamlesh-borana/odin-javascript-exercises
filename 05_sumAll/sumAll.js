const sumAll = function(number1, number2) {
    if(number1 < 0 || number2 < 0) {
        return "ERROR";
    }

    if(!Number.isInteger(number1) || !Number.isInteger(number2)) {
        return "ERROR";
    }

    let sum = 0;
    let startNumber = number1 <= number2 ? number1 : number2;
    let endNumber = number1 <= number2 ? number2 : number1;

    for (let i = startNumber; i <= endNumber; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
