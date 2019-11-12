
const calculator = (() => {
  const add = (...nums) => nums.reduce((a, b) => a + b);

  const subtract = (...nums) => nums.reduce((a, b) => a - b);

  const multiply = (...nums) => nums.reduce((a, b) => a * b);

  const divide = (...nums) => nums.reduce((a, b) => a / b);

  return {
    add,
    subtract,
    multiply,
    divide,
  };
  
})();

export default calculator;