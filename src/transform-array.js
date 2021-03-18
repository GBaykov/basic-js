const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  let Arr = [];
  if( !Array.isArray(arr)) throw Error;
  for ( i=0; i< arr.length; i=i+1) {
    if (arr[i] === '--double-prev'){
      if ( i === 0) continue;
      if(arr[i-2] === '--discard-next') continue;
      Arr.push(arr[i-1])
    continue;
        }
    if (arr[i] === '--double-next') {
      if (i === arr.length-1) continue;
      Arr.push(arr[i+1])
    continue;
        }
    if (arr[i]==='--discard-prev'){
      if (i === 0) continue;
      if (arr[i-2] === '--discard-next') continue;
      Arr.pop()
    continue;
        }
    if (arr[i]==='--discard-next'){
      if (i === arr.length - 1) continue;
      i = i+1;
    continue;
        } Arr.push(arr[i]);
  }return Arr;
}; 
