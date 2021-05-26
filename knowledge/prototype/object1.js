// 原型、原型链

// 函数对象 typeof function
// 普通对象 typeof object

// 原型对象 prototype 共享
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.say = function() {
    console.log(`我是${this.name}`);
  };
}
let zhangsan = new Person('zhangsan', 8);
zhangsan.say();

/* 重点 */
console.dir(zhangsan.__proto__ == Person.prototype);
console.dir(Person.prototype.__proto__ == Object.prototype);

console.dir(Person.__proto__ == Function.prototype);
console.dir(Function.prototype.__proto__ == Object.prototype);
console.dir(Object.prototype.__proto__ == null);

/* 原型继承 */
// 原型链的继承是原型对象的继承，不是改变构造函数的原型
function Father() {}
Father.prototype.view = function() {
  console.log('Father View');
};
function Son() {}

// 方法1
Son.prototype.__proto__ = Father.prototype;

// 方法2
Son.prototype = Object.create(Father.prototype); // constructor会丢失
console.log(Son.prototype.constructor); //Father

Son.prototype.constructor = Son;
console.log(Son.prototype.constructor); //Son

let son1 = new Son();
son1.view();

// 方法3 apply call只能拷贝成员 原型对象上的没有拷贝
function Son() {
  Father.apply(this); //将Father对象的成员放到Son对象上,把Father的this指向为Son
}
let son = new Son();
soon.view(); // 会报错
