const removeFromArray = function(array, value) {
    const clonedArray = [...array];

    const indexOfValue = clonedArray.indexOf(value);

    // If value found inside the array delete it using the found index
    if(indexOfValue > -1) {
        clonedArray.splice(indexOfValue, 1);
    }

    return clonedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
