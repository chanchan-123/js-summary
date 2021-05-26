// 创建对象
// 工厂模式创建多个变量
// 自定义构造函数

// 构造函数
let obj = new Object();

// 字面量
let obj = {};
obj.name = 'zhangsan';

// 嵌套字面量
let obj = {
  name:'lisi',
  age:18,
  say:function(){
    console.log('Hello world')
  }
}

/**
 * 工厂模式
 */
function person(name,age){
  return {
    name,
    age,
    say:function(){
      console.log(`我是${name}`)
    }
  }
}
let zhangsan = person('zhangsan',18)
let lisi = person('lisi',18)

/**
 * 构造函数
 */
function Person(name,age){
  this.name = name;
  this.age = age;
  this.say = function(){
    console.log(`我是${this.name}`)
  }
}
let zhangsan = new Person('zhangsan',8)
zhangsan.say()