const sumAll = function(startNumber, endNumber) {
    let sum = 0;

    for (let i = startNumber; i <= endNumber; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
