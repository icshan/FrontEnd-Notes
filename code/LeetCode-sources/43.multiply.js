/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 * https://www.bilibili.com/video/BV1SV411i7ft?from=search&seid=2997620514286691787
 * 
 *      1 2 3
 *    x 4 5 6
 *   ---------
 *      7 3 8
 *    6 1 5 0
 *  4 9 2 0 0
 * -----------
 *  5 7 0 8 8
*/
var multiply = function(num1, num2) {

  let len2 = num2.length;
  let sum = [];

  for(let i = len2 -1; i>=0; i--){
    // 补多少个 0
    let fill = len2 - 1 - i;
    // 乘积
    let product = multi(num1, num2[i], fill);
    sum.push(product);
  }
  let result = sum.reduce((prev, next) => {
    return addStrings(prev, next)
  })
  // 去除无效0
  //  00000   0
  //  00345
  while( result.length > 1 && result[0] === '0'){
    result = result.slice(1);
  }
  return result
 
};
// 123 * 4
function multi(n1, n2, fill){
  fill = fill > 0 ? fill : 0;
  let carry = 0;
  let result = '';

  let i = n1.length -1;
  while(i >= 0){
    let curr = n1[i];
    let product = Number(curr) * Number(n2) + carry;
    if(product >= 10){
      let strPro = String(product);
      carry = Number(strPro[0]);
      result = strPro[1] + result;
    }else{
      carry = 0;
      result = product + result;
    }
    i--;
  }
  if(carry !== 0){
    result = carry + result;
  }
  return result + '0'.repeat(fill);
}
var addStrings = function(num1, num2) {
  let len1 = num1.length;
  let len2 = num2.length;

  // 定义两个指针，i：指向len1的最后一位  j：指向len2的最后一位
  let i = len1 - 1;
  let j = len2 - 1;
  // 进位
  let carry = 0;
  let ans = '';
  while(i >= 0 || j >= 0){
    // *1 确保curr1和curr2为数字，隐式转换
    let curr1 = i < 0 ? 0 : num1[i]*1,
        curr2 = j < 0 ? 0 : num2[j]*1;
    let { result, nextCarry } = add(curr1, curr2, carry);
    carry = nextCarry;
    ans = result + ans;
    i--;
    j--;
  }
  if(carry !== 0){
    ans = carry + ans;
  }
  return ans;
};

function add(n1, n2, lastCarry){
  let result = 0, nextCarry = 0;
  let sum = n1 + n2 + lastCarry;
  if(sum >= 10){
    result = sum % 10;
    nextCarry = 1;
  }else{
    result = sum
    nextCarry = 0;
  }
  return {
    result,
    nextCarry
  }
}