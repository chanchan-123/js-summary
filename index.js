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