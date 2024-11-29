const palindromes = function (string) {
    for(let i = 1; i <= Math.floor(string.length / 2); i++) {
        if(string[i - 1] !== string[string.length - i]) {
            return false;
        }
    }
    
    return true;
};

// Do not edit below this line
module.exports = palindromes;
