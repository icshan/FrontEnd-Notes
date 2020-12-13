/**
 * Auth: kester
 * @param {*} origin 
 */
function myType ( origin ) {
  var type = typeof(origin),
      toStr = Object.prototype.toString,
      res = {
        '[object Array]': 'array',
        '[object Object]': 'object',
        '[object String]': 'object string',
        '[object Number]': 'object number',
        '[object Boolean]': 'object boolean'
      };
  if( type == null ){
    return null
  }else if(type == 'object'){
    return res[toStr.call(origin)]
  }else{
    return type
  }
}
console.log(myType({}))