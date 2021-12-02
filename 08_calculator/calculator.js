const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(list) {
	return list.reduce((total, item) => {
    return total + item;
  }, 0);
};

const multiply = function(list) {
  return list.reduce((total, item) => {
    return total * item;
  }, 1);
};

const power = function(x,y) {
  return Math.pow(x,y);
};

const factorial = function(x) {
	if (x === 0) return 1;
  let result = 1;
  for(let i = x; i > 0; i--) {
    result *= i;
  }
  return result;
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
