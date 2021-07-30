/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 * https://www.bilibili.com/video/BV15K4y1n7gX
 */
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