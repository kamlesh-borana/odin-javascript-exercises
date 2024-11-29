const palindromes = function (string) {
    function removePunctuations(str) {
        return str.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');
    }

    function formatString(string) {
        string = removePunctuations(string);
        string = string.toLowerCase();
        string = string.replaceAll(" ", "");
        return string;
    }

    const formattedString = formatString(string);
    
    for(let i = 1; i <= Math.floor(formattedString.length / 2); i++) {
        if(formattedString[i - 1] !== formattedString[formattedString.length - i]) {
            return false;
        }
    }
    
    return true;
};

// Do not edit below this line
module.exports = palindromes;
