const fibonacci = function (n) {
  if (n < 0) return "OOPS";
  const fib =
    (1 / Math.sqrt(5)) * ((1 + Math.sqrt(5)) / 2) ** n -
    (1 / Math.sqrt(5)) * ((1 - Math.sqrt(5)) / 2) ** n;

    return Math.round(fib);
};

// Do not edit below this line
module.exports = fibonacci;
