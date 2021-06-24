/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    var maxProductMemo = [];
    var minProductMemo = [];
    maxProductMemo[0] = nums[0];
    minProductMemo[0] = nums[0];

    var max = nums[0];

    for (let i = 1; i < nums.length; i++ ){
      maxProductMemo[i] = Math.max(nums[i], nums[i]*maxProductMemo[i-1], nums[i]*minProductMemo[i-1]);
      minProductMemo[i] = Math.min(nums[i], nums[i]*maxProductMemo[i-1], nums[i]*minProductMemo[i-1]);
      max = Math.max(maxProductMemo[i],max);
    }
    return max
};