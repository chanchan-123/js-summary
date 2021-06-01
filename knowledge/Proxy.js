let target = {
  name:'zhangsan'
}

let pro = new Proxy(target,{
  
  get:function(target,key){
    console.log('getter')
    console.log(target,key)
    return 35
  },
  set:function(target,key,value){
    console.log('setter')
    console.log(target,key,value)
    return 25
  },
})

pro.name = 'lisi' // setter

pro.name // getter  35
console.log(pro.name)


/**
 * 例子1 通过负索引获取数组的值
 */
let arr = [1, 2, 3];

let arrProxy = new Proxy(arr, {
  get: function(target, key) {
    console.log(target, key, parseInt(key));

    if (Number(key) != NaN && Number(key) < 0 && Number.isInteger(Number(key))) {
      let index = parseInt(key) + target.length;
      return target[index];
    }else{
      return target[key]
    }
  }
});

console.log(arrProxy[1]);


/**
 * 数据校验
 * 例子2 限制某些值的大小例如年龄
 */
let target = {
  name:'zhangsan'
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


/**
 * 关联属性
 * 例子3 通过邮政编码相关联
 */
