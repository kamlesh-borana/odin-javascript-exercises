const sumAll = function(number1, number2) {
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
