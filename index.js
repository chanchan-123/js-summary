function Person(name,age){
  this.name = name;
  this.age = age;
  this.say = function(){
    console.log(`我是${this.name}`)
  }
}
let zhangsan = new Person('zhangsan',8)
zhangsan.say()