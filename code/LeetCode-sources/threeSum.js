
/**
 * 
 * 解题思路：
 * 1.给数组排序
 * 2.遍历数组，从0遍历到 length-2， length-2 是为了防止下标越界
 * 3. 如果当前的数字等于前一个数字，则跳过这个数，是为了去重
 * 4. 如果数字不同，则设置start = i + 1， end = length -1，查看i，start和end 三个数的和比零大
 *    还是小，如果比0小，start++，如果比0大，end--，如果等于0，把这三个数加入到结果里
 * 5.返回结果
 */
var threeSum = function (uniqueArr) {
  const result = [];
  // 数组排序
  uniqueArr.sort((a, b) => a - b); // 排序
  for( let i = 0; i < uniqueArr.length - 2; i++){
    if( i === 0 || uniqueArr[i] !== uniqueArr[i-1]){
      // 定义双指针 start end 往中间收缩
      let start = i + 1,end = uniqueArr.length - 1;
      while(start < end){
        if(uniqueArr[start] + uniqueArr[end] + uniqueArr[i] === 0){
          result.push([uniqueArr[i], uniqueArr[start], uniqueArr[end]]);
          start++;
          end--;
          while(start < end &&  uniqueArr[start] === nums[start - 1]){
            start++;
          }
          while(start < end && uniqueArr[end] === uniqueArr[end+1]){
            end--;
          }
        }else if(uniqueArr[start] + uniqueArr[end] + uniqueArr[i] < 0){
          start++;
        }else{
          end--;
        }
      }
    }
    
  }
  return result
}