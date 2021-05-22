// 作用域

// 局部变量、全局变量

/**
 * 例子1
 */
var a = 10;
function b(){
  console.log(a);//10
}
b();

/**
 * 例子2
 */
var a = 10;
function b(){
  console.log(a);//undefined
  var a = 20;
}
b();

/**
 * 例子3
 */
var a = 10;
function b(){
  console.log(a);//10
  a = 20;
}
console.log(a);//10
b();
console.log(a);//20

/**
 * 例子3
 */
var a = 10;
function b(){
  console.log(a);//undefined
  a = 20;
  var a;
  console.log(a);//20
}
console.log(a);//10
b();
console.log(a);//10

/**
 * 例子4
 */
var a = 10;
if(true){
  console.log(a);//10
}

var a = 10;
if(true){
  console.log(a);//10
  console.log(b);//undefined
  var b = 30;
  a = 20
}
console.log(b);//30
console.log(a);//20