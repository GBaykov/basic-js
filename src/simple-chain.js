const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {

     this.arr.push('( ' +value + ' )')
     return this;
  },
  removeLink(position) {
    if(!position || typeof position !== 'number' || position < 0) {
      this.arr = [];
      throw Error;
    }
     this.arr.splice(position -1, 1);
     return this;
  },
  reverseChain() {
     this.arr.reverse();
     return this;

  },
  finishChain() {
    let final = this.arr.join('~~')
    this.arr = []

    return final
  }
};

module.exports = chainMaker;
