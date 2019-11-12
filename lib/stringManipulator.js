const stringManipulator = (() => {

  const capitalize = (string) => {
    return string.slice(0, 1).toUpperCase().concat(string.substr(1));
  }

  const reverse = (string) => {
    return [...string].reverse().join('');
  }

  return {
    capitalize,
    reverse,
  }
})();
export default stringManipulator;