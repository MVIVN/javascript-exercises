const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function (array) {
  return array.reduce((total, current) => total * current, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (number) {
  let array = [];
  if (number === 0) {
    return 1;
  } else {
    for (i = number; i > 0; i--) {
      array.push(i);
    };
    return array.reduce((prevNum, currentNum) => prevNum * currentNum, 1);
  }
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
