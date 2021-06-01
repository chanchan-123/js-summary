let target = {
  "001":"北京",
  "001":"北京",
  "001":"北京",
}

let pro = new Proxy(target,{
  
  get:function(target,key){
    console.log('getter')
    console.log(target,key)
    return target[key]
  },
  set:function(target,key,value){
    console.log('setter')
    console.log(target,key,value)
    if( key === 'age' && (value > 100 || value < 0) ){
      console.log('年龄不符合实际');
      target[key] = 100
    }else{
      target[key] = value;
    }
  },
})

pro.age = -5 // setter

console.log(pro.age)