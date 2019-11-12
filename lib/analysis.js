
const analyse = (() => {
  const calculate = (array) => {
    const average = array.reduce((a, b) => (a + b)) / array.length;

    const max = array.reduce((a, b) => Math.max(a, b));

    const min = array.reduce((a, b) => Math.min(a, b));

    const length = array.length;

    return {
      average,
      min,
      max,
      length,
    };
  };

  return calculate;
})();

export default analyse;