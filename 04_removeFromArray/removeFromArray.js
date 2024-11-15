const removeFromArray = function(array, ...valuesToBeRemoved) {
    const clonedArray = [...array];

    valuesToBeRemoved.forEach((value) => {
        let indexOfValue = clonedArray.indexOf(value);
        
        // While value found inside the array
        while (indexOfValue > -1) {
            // Delete it using the found index
            clonedArray.splice(indexOfValue, 1);

            indexOfValue = clonedArray.indexOf(value);
        }
    })

    return clonedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
