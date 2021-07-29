/**
 * @param {number[]} height
 * @return {number}
*/
var maxArea = function(height) {
  // 保持一个最大容器
  let max = 0;
  // 指定两个指针
  let left = 0;
  let right = height.length -1;

  while(left < right){
    const curArea = (right - left)*Math.min(height[right], height[left]);
    if(curArea > max) max = curArea;

    if(height[left] > height[right]){
      right--;
    }else{
        left++;
    }
  }

  return max;
};