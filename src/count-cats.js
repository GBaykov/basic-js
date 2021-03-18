const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let ears = "^^";
  let bigArr = [];
  let arr;

  for (let sub of backyard) {
    arr = sub.filter(item => item === ears);
    bigArr = bigArr.concat(arr);

  } return bigArr.length;

};
