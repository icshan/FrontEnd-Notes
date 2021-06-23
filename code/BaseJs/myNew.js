function Test(a,b){
  this.a = a;
  this.b = b;
}
Test.prototype.add = function () {
  return this.a + this.b;
}
var test = my_new(Test, 1, 3);

function my_new(){
  // 拿到构造函数,创建一个对象
  var construtor = [].shift.call(arguments),
      _this = {};

  _this.__proto__ = construtor.prototype;

  // 执行construtor, 并把改变this指向
  var ret = construtor.apply(_this, arguments);

  return ret instanceof Object ? ret : _this;
}