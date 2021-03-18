const CustomError = require("../extensions/custom-error");
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

class VigenereCipheringMachine {
  constructor(Boo) {
    if (Boo === undefined) {
      this.Boo = true;
    } else {
      this.Boo = Boo;
    }
  }
  encrypt(str, key) {
    str = str.toUpperCase().split('');
    key = key.toUpperCase().split('');
      if (!str || !key) {throw Error;}
     let encrypted = [];
     let sum = [];

for (let i = 0; i<str.length; i++) {
  if (alphabet.includes(str[i])) {
    if (str.length>key.length) {key.push(key[i])}
      if (alphabet.indexOf(str[i])+ alphabet.indexOf(key[i]) >= 26) {
        sum.push(alphabet.indexOf(str[i])+ alphabet.indexOf(key[i]) - 26)
      } else {sum.push(alphabet.indexOf(str[i])+ alphabet.indexOf(key[i]))}
      encrypted.push(alphabet[sum[i]])
  } else {
    sum.push(str[i]);
    encrypted.push(str[i]);
    key.splice(i,0,' ');
  }
} return this.Boo ? encrypted.join('') : encrypted.reverse().join('');
  }

  decrypt(str, key) {
   str = str.toUpperCase().split('');
   key = key.toUpperCase().split('');
   if (!str || !key) {throw Error;}
   let decrypted = [];
     let sum = [];
   for (let i = 0; i<str.length ; i++) {
     if (alphabet.includes(str[i])) {
       if (str.length > key.length ) {
         key.push(key[i])
       }
       if (alphabet.indexOf(str[i])< alphabet.indexOf(key[i])) {
         sum.push((alphabet.indexOf(str[i]) - alphabet.indexOf(key[i])) + 26);
       } else {
         sum.push(alphabet.indexOf(str[i])- alphabet.indexOf(key[i]));
       }
       decrypted.push(alphabet[sum[i]])
     }
     else {
       sum.push(str[i]);
       decrypted.push(str[i]);
       key.splice(i,0,' ');
     }
   } return this.Boo ? decrypted.join('') : decrypted.reverse().join('');
 }
}
module.exports = VigenereCipheringMachine;

