console.log("hello");
// -! 不会让文件 再去通过 pre normal loader 来处理了
// ！ 没有normal
// ！！ 什么都不要，只要行内来处理
// let str = require("./a.js");

// console.log(str);

class Name {
  constructor() {
    this.name = "gejian";
  }
  getName() {
    return this.name;
  }
}

let a = new Name();
console.log(a.getName())