function O1(name) {
  this.name = name;
}

let a1 = new O1('zhangsan');

let a2 = {};
console.log(a1,a2)
a2.call(a1, 'lisi');
// console.log(a2.name);
