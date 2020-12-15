/**
 * Author: kester
 * 
 * 去重函数：Unique Function
 * 
 * @param {*} origin 
 * 解题思路：通过创建一个hashMap来存储唯一值，检测map中有相同的跳过，没有的话就塞入
 */
var Unique = function ( origin ) {
  let target = [],
      hashMap = {};
  for( let i = 0; i < origin.length; i++){
    if( hashMap.hasOwnProperty(origin[i]) ){
      hashMap[origin[i]] = i;
      target.push(origin[i]);
    }
  }
  return target;
}

// TEST
var testArr = [1, 3, 3, 4, 5, 6, 6, 8];
console.log(Unique(testArr));