const palindromes = function (str) {
  const chars = str.toLowerCase().match(/\w/g);

  for (let i = 0; i < chars.length / 2; i++) {
    if (chars[i] !== chars[chars.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
