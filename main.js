class Calculator {
  add(a, b) { return a + b }
  subtract(a, b) { return a - b };
  divide(a, b) { return a / b };
  multiply(a, b) { return a * b };
}

const stringLength = string => {
  if (string.length < 1 || string.length > 10) {
    throw new Error('errore in string length');
  }
  return string.length;
}
const reverseString = string => {
  return string.split('').reverse().join('');
}

const capitalize = string => {
  string = string.replaceAll(/[0-9]/g, "");
  string = string.toLowerCase();
  string = string.split('');
  string[0] = string[0].toUpperCase();
  string = string.join('');
  return string;
}
module.exports = {
  stringLength,
  reverseString,
  calc: Calculator,
  capitalize
};