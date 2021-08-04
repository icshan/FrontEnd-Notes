/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let map = {};
  let n = nums.length >> 1;

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = map[nums[i]] !== undefined ?  map[nums[i]]+1 : 1;
    if(map[nums[i]]>n) return nums[i];
  }
};