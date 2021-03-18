const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
 let { repeatTimes, separator = '+', additionRepeatTimes, addition, additionSeparator= '|' } = options;
 let result = str;
if (repeatTimes == undefined && additionRepeatTimes == undefined) {
  result +=`${addition}`
 }
 for (let i = 1; i <= repeatTimes; i++) {
  for (let n = 1; n <= additionRepeatTimes; n++) {
     if (n == additionRepeatTimes){
       result += `${addition}`
     } else  result =`${result}${addition}${additionSeparator}`

   }
    if (i == repeatTimes) {
        null;
    } else result += `${separator}${str}`

 } return result
};

  
