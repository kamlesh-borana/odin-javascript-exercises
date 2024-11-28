const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
	return numbers.reduce((sum, current) => sum + current, 0)
};

const multiply = function(numbers) {
  return numbers.reduce((total, current) => total * current, 1);
};

const power = function(number, power) {
	return number ** power;
};

const factorial = function(number) {
	if(number === 0) {
    return 1;
  }

  let factorial = 1;

  for(let i = 1; i <= number; i++) {
    factorial = factorial * i;
  }

  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
