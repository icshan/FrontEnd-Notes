/**
 * @param {number[]} nums
 * @return {number}
*/
var removeDuplicates = function(nums) {
  const n = nums.length;
  if (n === 0) {
      return 0;
  }
  let fast = 1, slow = 1;
  while (fast < n) {
      if (nums[fast] !== nums[slow - 1]) {
          nums[slow] = nums[fast];
          slow++;
      }
      fast++;
  }
  return slow;
};