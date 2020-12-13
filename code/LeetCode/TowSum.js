/**
 * Auth: kester
 * @param {*} nums 
 * @param {*} target 
 * @return {number[]}
 */
var twoSum = function( nums, target ){
  let map = {};
  for(let i = 0; i < nums.length; i++){
    let preIndex = target - nums[i]
    if( map.hasOwnProperty(preIndex)){
      return [map[preIndex],i]
    }else{
      map[ nums[i] ] = i
    }
  }
}
console.log(twoSum([2,5,3,1,6,7], 9)) 