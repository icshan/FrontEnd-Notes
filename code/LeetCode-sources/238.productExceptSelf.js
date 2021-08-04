/**
 * @param {number[]} nums
 * @return {number[]}
 */
//  [1,2,3,4]
//  [1,2,6,24]
//  [24,12,4,1]
var productExceptSelf = function(nums) {
  let output = [];
  let length = nums.length;
  output[0] = 1;

  for(let i = 1; i < length; i++){
      output[i] = output[i-1] * nums[i-1];
  }
  // output = [1,2,6,24]
  let right = 1;
  for(let i = length - 1; i >= 0; i--){
      output[i] = output[i] * right
      right = right * nums[i];
  //    
  }
  return output
};