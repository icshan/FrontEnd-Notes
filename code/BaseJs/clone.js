
/**
 * 编写：浅拷贝和深拷贝
 * tip：JSON.stringify  --->   JSON.parse   也是一种极端的方法
 * @param {*} origin 
 * @param {*} target 
 * @return {array []}
 */
function clone( origin, target ){
  var target = target || {};
  for( var key in origin ){
    if( origin.hasOwnProperty(key) ){
      target[key] = origin[key]
    }
  }
  return target
}
function deepClone( origin, target ){
  var target = target || {},
      toStr = Object.prototype.toString,
      arrType = '[object Array]'

  for( var key in origin ){
    if( origin.hasOwnProperty(key) ){
      if( typeof origin[key] == 'object' && origin[key] !== null){
        toStr.call(origin[key]) === arrType ? target[key] = []
                                            : target[key] = {}
        deepClone(origin[key], target[key])
      }else{
        target[key] = origin[key]  
      }
      
    }
  }
  return target
}


var cloneObj = clone(OrgObj)
var deepCloneObj = deepClone(OrgObj)
console.log(deepCloneObj)

cloneObj.name = 'kester is clone object'
deepCloneObj.skill[0] = 'vidio'

console.log(OrgObj)
console.log(cloneObj)
console.log(deepCloneObj)