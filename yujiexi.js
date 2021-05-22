// 预解析

// 遇到var function关键字会进行预解析

/**
 * 例子1
 *
 * var a;
 * console.log();
 * a = 10;
 *
 */
console.log(a); //undefined
var a = 10;

/**
 * 例子2  遇到与变量同名函数(函数的级别高于表达式)
 *
 * var a;
 * a = func
 * console.log()
 */
console.log(a); // function a(){}
var a = 10;
function a() {
  console.log(123);
}
