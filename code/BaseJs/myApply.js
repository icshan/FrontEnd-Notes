function test(){
  console.log(this, arguments);
}
var obj = {
  name: 'gejian',
  age: '18'
}
test.my_call(obj, 'IT')
function my_typeof(target){
  var toStr = Object.prototype.toString,
      type = typeof(target),
      res = {
        '[object String]':'object string',
        '[object Boolean]':'object number',
        '[object Object]':'object',
        '[object Array]':'array',
        '[object Number]':'object boolean'
      }
  if(type === null) return null
  if(type === 'object'){
    return res[toStr.call(target)]
  }else{
    return type
  }
}
Function.prototype.apply = function (context, arr) {
  context = context ? Object(context) : window; 
  context.fn = this;

  let result;
  if (my_typeof(arr) === 'array') {
      result = context.fn();
  } else {
      result = context.fn(...arr);
  }
    
  delete context.fn
  return result;
}