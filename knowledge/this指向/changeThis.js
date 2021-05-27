function O1(name){
  this.name = name;
}

let o1 = new O1('zhangsan');
let o2 = {};
o2.call(o1);
console.log(o2.name)