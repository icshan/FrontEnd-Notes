/**
 * Author: kester
 * 
 * @param {*} string 
 * @return {Number}
 * 题目：给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * 解题思路：滑动窗口模式
 * 1、定义一个 slideArr 数组来维护滑动窗口,定义一个maxLength来记录 slideArr 最长的时候
 * 2、遍历字符串，判断字符是否在滑动窗口数组里，不在则 push 进数组，在则删除滑动窗口数组里相同字符及相同字符前的字符，然后将当前字符 push 进数组，然后将 maxLength 更新为当前最长子串的长度
 * 3、返回 maxLength 就是最长的length
 */

var LongString = function ( string ) {
  let slideArr = [],
      maxLength =0;
  for( let i = 0; i < string.length; i++){
    // let currVal = string[i]; 
    // 这种方式有兼容问题
    let currVal = string.chatAt(i),
        slideIndex = slideArr.indexOf(currVal);
    if( slideIndex !== -1 ){
      maxLength = slideArr.length;
      slideArr.splice(0, slideIndex + 1);
    }
    slideArr.push(currVal);
    maxLength = Math.max( maxLength, slideArr.length);
  }
  return maxLength
}

// TEST 
var test = 'abcabcabcd';
console.log(LongString(test))
