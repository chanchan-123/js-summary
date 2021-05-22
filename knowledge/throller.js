// 节流函数

/**
 * 在n秒内只执行一次
 */
let input = document.querySelector('input');
input.addEventListener('keyup',throller());

function throller(){
  let play = true;
  return function(){
    if(play){
      play = false;//设置为false就不进入了
      setTimeout(()=>{
        console.log(input.value);
        play = true;
      },2000)
    }
  }
}