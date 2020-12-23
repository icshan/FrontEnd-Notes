/**
 * 
 * leetcode: 5
 * 解题思路：中心扩展法（注意两种情况）
 * 1. 处理边界情况，如果字符串小于2，直接返回原字符串
 * 2. 定义两个变量，一个start存储当前找到的最大回文字符串的起始位置，maxLength记录字符串的长度
 *   （终止位置就是start+maxLength）
 * 3. 穿件一个helper function，判断左边和右边是否越界，同事最左边的字符是否等于最右边的字符。
 *    如果以上三个条件都满足，则判断是否需要更新回文字符串的最大长度以及最大字符串的起始位置。
 *    然后left--，right++，继续判断，知道不满足三个条件之一
 * 4. 遍历字符串，每个位置调用helper function 两遍，第一遍检查i-1,i+1,第二遍检查i，i+1（aba，abba两种情况）
 */

 var longestPalindrome = function (s) {
   if(s.length < 2){
     return s;
   }

   let start = 0,
      //当ab时，maxLength为1，所以默认最小为1  
       maxLength = 1;
    
    function expandAroundCenter(left, right){
      while(left >= 0 && right < s.length && s[left] === s[right]){
        //  right - left + 1  为length
        if(right - left + 1 > maxLength){
          maxLength = right - left + 1;
          start = left;
        }
        left--;
        right++;
      }
    }

    for(let i = 0; i < s.length; i++){
      expandAroundCenter(i-1, i+1);
      expandAroundCenter(i, i+1);
    }

    return s.substring(start, start + maxLength)
 }