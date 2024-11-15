const repeatString = function(string, count) {
    if(count < 0) {
        return "ERROR";
    }

    let repeatedString = "";

    for (let i = 1; i <= count; i++) {
        repeatedString += string;
    }

    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
