const functions = {
  sum: (num1, num2) => {
    return num1 + num2;
  },

  multiply: (num1, num2) => {
    return num1 * num2 + 1;
  },

  divide: (num1, num2) => {
    return num1 / num2;
  },

  isNull: () => null,

  checkValue: (val) => val,
};

module.exports = functions;
