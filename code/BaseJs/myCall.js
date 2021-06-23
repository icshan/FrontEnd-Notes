function test(){
  console.log(this, arguments);
}
var obj = {
  name: 'gejian',
  age: '18'
}
test.my_call(obj, 'IT')

Function.prototype.my_call = function(ctx){
  // 将函数设为对象的属性
  // 注意：非严格模式下, 
  //   指定为 null 和 undefined 的 this 值会自动指向全局对象(浏览器中就是 window 对象)
  //   值为原始值(数字，字符串，布尔值)的 this 会指向该原始值的自动包装对象(用 Object() 转换）
  context = context ? Object(context) : window; 
  context.fn = this;
    
  // 执行该函数
  let args = [...arguments].slice(1);
  let result = context.fn(...args);
    
  // 删除该函数
  delete context.fn
  // 注意：函数是可以有返回值的
  return result;
}