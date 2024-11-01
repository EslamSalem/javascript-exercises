const removeFromArray = function(arr = [], ...args) {
  for (let i = 0; i < args.length; i++) {
    index = arr.indexOf(args[i]);
    while (index !== -1) {
      arr.splice(index, 1);
      index = arr.indexOf(args[i]);
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
