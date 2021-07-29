/**
 * Auth: kester
 * @param {*} nums 
 * @param {*} target 
 * @return {number[]}
 * 
 * 解题思路：通过HashMap来实现
 * 1、创建一个map来装载数据，
 * 2、通过key与val来查询map中是否包含taget - nums[index]的值
 * 3、如果包含，那么就输出结果，不包含就把数据放入map中
 */
var twoSum = function( nums, target ){
  let map = {};
  for(let i = 0; i < nums.length; i++){
    let preIndex = target - nums[i];
    if( map.hasOwnProperty(preIndex) ){
      return [map[preIndex], i];
    }else{
      map[ nums[i] ] = i;
    }
  }
}
console.log(twoSum([2, 5, 3, 1, 6, 7], 9));