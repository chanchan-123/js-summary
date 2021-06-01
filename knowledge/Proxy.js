// Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程。

// Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。

let target = {
  name: 'zhangsan'
};

let pro = new Proxy(target, {
  get: function(target, key) {
    console.log('getter');
    console.log(target, key);
    return 35;
  },
  set: function(target, key, value) {
    console.log('setter');
    console.log(target, key, value);
    return 25;
  }
});

pro.name = 'lisi'; // setter

pro.name; // getter  35
console.log(pro.name);

/**
 * 例子1 通过负索引获取数组的值
 */
let arr = [1, 2, 3];

let arrProxy = new Proxy(arr, {
  get: function(target, key) {
    console.log(target, key, parseInt(key));

    if (
      Number(key) != NaN &&
      Number(key) < 0 &&
      Number.isInteger(Number(key))
    ) {
      let index = parseInt(key) + target.length;
      return target[index];
    } else {
      return target[key];
    }
  }
});

console.log(arrProxy[1]);

/**
 * 数据校验
 * 例子2 限制某些值的大小例如年龄
 */
let target = {
  name: 'zhangsan'
};

let pro = new Proxy(target, {
  get: function(target, key) {
    console.log('getter');
    console.log(target, key);
    return target[key];
  },
  set: function(target, key, value) {
    console.log('setter');
    console.log(target, key, value);
    if (key === 'age' && (value > 100 || value < 0)) {
      console.log('年龄不符合实际');
      target[key] = 100;
    } else {
      target[key] = value;
    }
  }
});

pro.age = -5; // setter

console.log(pro.age);

/**
 * 关联属性
 * 例子3 通过邮政编码相关联
 */
let targetCity = {
  '001': '北京',
  '002': '上海',
  '003': '广州'
};

let pro = new Proxy(
  {},
  {
    set: function(target, key, value) {
      if (key === 'code') {
        target[key] = targetCity[value];
      }
      return true;
    },
    // 如果有写getter的话必须要return,否则无法返回
    get: function(target, key) {
      console.log(target);
      return target[key];
    }
  }
);

pro.code = '001'; // setter
console.log(pro.code); // 北京
