// 深拷贝

function deepClone(obj, newType) {
  let newObj = newType;
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      let type = new obj[key].__proto__.construct();
      newObj[key] = deepClone(obj[key], type);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
