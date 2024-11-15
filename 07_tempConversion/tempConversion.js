const convertToCelsius = function(temperatureInFahrenheit) {
  const temperatureInCelsius = (temperatureInFahrenheit - 32) / 1.8;

  return Math.round(temperatureInCelsius * 10) / 10;
};

const convertToFahrenheit = function(temperatureInCelsius) {
  const temperatureInFahrenheit = (temperatureInCelsius * 1.8) + 32;

  return Math.round(temperatureInFahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
