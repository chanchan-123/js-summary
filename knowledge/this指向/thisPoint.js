// this指向

/**
 * 简单函数使用
 */
function fn(){
  console.log(this)
}
fn();//Window


function fn(){
  'use strict'
  console.log(this)
}
fn();//undefined



/**
 * 内置函数 setTimeout setInterval
 */
function fn(){
  console.log(this)
}
setTimeout(fn,1000)//window



/**
 * 回调函数 一个函数作为参数传递给另一个函数
 */
function fn(n){
  console.log(n)
}
// 写法1
function test(callback,value){
  callback(value)
}
test(fn,1000)
// 写法2
function test(callback,value){
  callback(value)
}
test(function(n){
  console.log(this)// 指向window
},1000)



/**
 * 数组
 */
function test(){
   console.log(this)
}
let arr = [test,100];
arr[0]();// 有调用者，指向数组


/**
 * 对象
 */
let obj = {
  name:'a',
  action:function(){
    console.log(this)
  },
  age:{
    name:'b',
    action:function(){
      console.log(this)
    }
  }
}
obj.action();//obj
obj.age.action();//age