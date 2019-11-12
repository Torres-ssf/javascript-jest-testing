
const cipher = (() => {
  const alpha = {};
  const setup = () => {
    const a = 'abcdefghijklmnopqrstuvwxyz';
    const b = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    a.split('').forEach((e, i) => {
      alpha[i] = [e, b.split('')[i]];
    });
    return alpha;
  };
  setup();

  const encrypt = (string, key) => {
    const result = [];
    string.split('').forEach((e) => {
      Object.values(alpha).forEach((a, index) => {
        let num = index + key;
        if (index + key > 25) num = 0 + key;

        if (a[0] === e) {
          result.push(alpha[num][0]);
        } else if (a[1] === e) {
          result.push(alpha[num][1]);
        }
      });
      if (/\W/.test(e)) { result.push(e); }
    });
    return result.join('');
  };

  const decrypt = (encryptedString, key) => {
    const result = [];
    encryptedString.split('').forEach((e) => {
      Object.values(alpha).forEach((a, index) => {
        let num = index - key;
        if (index - key < 0) num = 25 - key;

        if (a[0] === e) {
          result.push(alpha[num][0]);
        } else if (a[1] === e) {
          result.push(alpha[num][1]);
        }
      });
      if (/\W/.test(e)) { result.push(e); }
    });
    return result.join('');
  };

  return {
    encrypt,
    decrypt,
    alpha,
  };
  
})();

export default cipher;