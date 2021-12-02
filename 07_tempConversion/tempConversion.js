const ftoc = function(temp) {
  let returnTemp = (temp - 32) * (5 / 9);
  return Math.round(returnTemp * 10) / 10;
};

const ctof = function(temp) {
  let returnTemp = (temp * 9 / 5) + 32;
  return Math.round(returnTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
