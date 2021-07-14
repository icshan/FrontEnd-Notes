function trap(height = []){
  // 1.处理边界问题
  if(height.length === 0){
    return 0;
  }
  const n = height.length;
  let res = 0;
  // 2.定义两个指针 left、right
  let left = 0;
  let right = n - 1;
  // 3.初始化l_max和r_max
  let l_max = height[0];
  let r_max = height[n - 1];
  // 4.双指正left和right，依次向中间移动
  while(left <= right){
    l_max = Math.max(l_max, height[left]);
    r_max = Math.max(r_max, height[right]);
    
    if(l_max < r_max){
      res += l_max - height[left];
      left++;
    }else{
      res += r_max - height[right];
      right--;
    }
  }
  return res
}