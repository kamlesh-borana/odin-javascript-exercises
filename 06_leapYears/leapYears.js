const leapYears = function(year) {
    const isDivisible = (dividend, divisor) => {
        return dividend % divisor === 0;
    }

    const isDivisibleBy4 = isDivisible(year, 4);
    const isDivisibleBy100 = isDivisible(year, 100);
    const isDivisibleBy400 = isDivisible(year, 400);

    if(isDivisibleBy4 && (!isDivisibleBy100 || isDivisibleBy400)) {
        return true;
    }

    return false;
};

// Do not edit below this line
module.exports = leapYears;
