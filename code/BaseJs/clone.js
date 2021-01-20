
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

function deepClonePro(target,map = new WeakMap()){
  if(typeof target ==='object' && target !== null){
      if (target instanceof Date) return new Date(target);        
      if (target instanceof RegExp) return new RegExp(target);
      // 利用weakMap处理循环引用，有就直接返回
      if (hash.has(target)) return hash.get(target);

      //获得所有属性的描述信息，可处理带有比如enumerable、set、get等描述信息的数据
      let allDesc = Object.getOwnPropertyDescriptors(target);
      //创建一个新对象，使用现有的对象来提供新创建的对象的proto
      let result = Object.create(Object.getPrototypeOf(target), allDesc);
      //以上两行逻辑实现了浅拷贝并且处理了原型链

      hash.set(target, result);
      //Reflect.ownKeys 可获得不可遍历属性和Symbol属性
      for(let key of Reflect.ownKeys(target)){          
          result[key] = deepClone(target[key],hash)       
      }        
      return result;
  }else{
     //基础类型、function。
     return target;    
  }
}