const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let firstLetters = [];
  for (let item of members) {
    if (typeof item !== 'string') continue;
      firstLetters.push(item.trim()[0].toUpperCase())
  }; return firstLetters.sort().join('')
  };
