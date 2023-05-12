const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	 return a - b
};

const sum = function(arr) {
  if(arr.length === 0) return 0
    
    return arr.reduce((a, b) => a + b)
};

const multiply = function(arr) {
  return arr.reduce((a,b) => a * b)
};

const power = function(num, exp) {
	 return num ** exp
};

const factorial = function(num) {
	let result = 1;

  if(num === 0) {
    return 1
  }

  for(let i = 1; i <= num; i++){
    result *= i;
  }

  return result
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
