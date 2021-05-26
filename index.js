function Father() {
  this.type = "Father"
}
Father.prototype.view = function() {
  console.log('Father View');
};
function Son(){
  Father.apply(this)//将Father对象的成员放到Son对象上,把Father的this指向为Son
  this.name = 'lisi'
}
let son2 = new Son();
console.dir(son2)