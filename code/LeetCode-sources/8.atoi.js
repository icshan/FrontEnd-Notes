/**
 * @param {string} s
 * @return {number}
 * 方法一
 * - 明确转化规则
 *   空格处理
 *   正负号处理
 *   数字处理
 * - 推入数字
 *   result = result * 10 + num
 */
/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
  if(s == null) return 0;
  s = s.trim();
  if(s == '') return 0;
  let idx = 0,
      sign = '+';
  if(s[idx] == '+'){
    idx++;
  }else if(s[idx] == '-'){
    sign = '-';
    idx++;
  }else if(s[idx].charCodeAt()<48 || s[idx].charCodeAt() > 57){
    return 0
  }
  let str=""
  while(s[idx] && s[idx].charCodeAt() >= 48 && s[idx].charCodeAt() <= 57){
    str+=s[idx++];
  }
  let res = Number(sign+str) || 0;
  res = Math.max((-2)**31, res);
  res = Math.min(2**31-1, res);
  return res;
};