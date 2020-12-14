/**
 * Auth: kester
 * @param {*} s 
 * 
 * 解题思路：将字符串中的字符依次入栈，遍历字符依次判断：
 * 1、首先判断该元素是否是 { 、 ( 、 [ ，直接入栈
 * 2、否则该字符为 } 、 ) 、 ] 中的一种，如果该字符串有效，则该元素应该与栈顶匹配，例如栈中元素有 ({， 如果继续遍历到的元素为 ), 那么当前元素序列为 ({) 是不可能有效的，所以此时与栈顶元素匹配失败，则直接返回 false ，字符串无效
 * 3、当遍历完成时，所有已匹配的字符都已匹配出栈，如果此时栈为空，则字符串有效，如果栈不为空，说明字符串中还有未匹配的字符，字符串无效
 */

var isValid = function ( s ) {
  let str = s || '',
      stack = [],
      resMap = {
        '{': '}',
        '[': ']',
        '(': ')'
      };
  for(let i = 0; i <= str.length; i++){
    let strVal = str[i],
        resMapVal = resMap[strVal];
    if(resMapVal){
      stack.push(strVal)
    }else if( strVal !== resMap[ stack.pop() ] ){
      return false
    }
  }
  return stack.length == 0
}

// TEST
console.log(isValid('{{[()]}}'))
console.log(isValid('({)'))