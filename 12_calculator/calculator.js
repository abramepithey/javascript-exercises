const add = function(num1, num2) {
	return Number(num1) + Number(num2);
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numList) {
	return numList.reduce((ongoingTotal, currentNum) => {
    return ongoingTotal += currentNum;
  }, 0);
};

const multiply = function(numList) {
  return numList.reduce((ongoingTotal, currentNum) => {
    return ongoingTotal * currentNum;
  })
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(inputNum) {
	let ongoingNum = 1;
  for (let i = inputNum; i > 0; i--) {
    ongoingNum = ongoingNum * i;
  }
  return ongoingNum;
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
