// 防抖函数

/**
 * 思路：闭包、定时器
 * 将定时器存储起来，调用就清除之前的定时器
 */

let input = document.querySelector('input');
input.addEventListener('keyup',debounce());

function debounce(){
  let timer;
  return function(){
    clearTimeout(timer)
    timer = setTimeout(()=>{
      console.log(input.value)
    },2000)
  }
}