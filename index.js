let target = {
  age: 18
};


console.log(Reflect.has(target,'age'))
console.log(Reflect.set(target,'age',25),target)