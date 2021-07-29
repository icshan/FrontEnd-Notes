/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  const n = nums.length;
  nums.sort((a, b) => a-b);
  let ans = Infinity
  for(let i=0; i<n-2; i++){
    let left = i+1;
    let right = n-1;
    while(left < right){
      const sum = nums[i] + nums[left] + nums[right]
      if(sum === target)return target;
      if(sum < target){
        left++
      }else{
        right--
      }
      if(Math.abs(sum - target) < Math.abs(ans - target)) ans = sum
    }
  }
  return ans;
};