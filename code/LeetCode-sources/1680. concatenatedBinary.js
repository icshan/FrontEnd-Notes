var concatenatedBinary1 = function(n) {
  let mod = 1e9 + 7;
  let sum = "";
  
  for (let i = 1; i <= n; i++) {
      sum += (i).toString(2); // 十进制转二进制然后字符串拼接
      let t = parseInt(sum, 2);   // 二进制字符串转十进制判断是否需要取余
      if (t >= mod) {
          t %= mod;
          sum = (t).toString(2);
      }
  }
  
  return parseInt(sum, 2);
};
/**
 * 
 * @param {*} n 
 * @returns 
 * 案例：
 * n=1, 1 => 1
 * n=2, 1 10 => 1*2^2 + 2 = 6
 * n=3, 1 10 11 => 6*2^2 + 3 = 27
 * .
 * .
 * .
 * n=x, ret(x-1)*2^2  + x
 * 
 * 解析：
 * 结果  ret[n]= ret[n-1]*2^len + n    len表示当前二进制的位数有多少
 */
/**
 * @param {number} n
 * @return {number}
 */
 var concatenatedBinary = function(n) {
  var mod=1000000007;//模
  var res=0;
  var shift=0;//记录左移位数
 for(let i=1;i<=n;i++){
     if(!(i&(i-1))){ // 当它是2的整次幂时位移数加一
         ++shift;
     }
     res = (( res * Math.pow(2,shift))+ i ) % mod;//将结果数左移shift位并取模（左移相当于将当前数乘以2的shift次幂）。
 }

 return res;
};


var concatenatedBinary3 = function(n) {
  let mod = BigInt(1e9 + 7);  // JS 需要使用大数，不然会溢出
  let sum = 0n;
  let p = 1n;
  let l = 2n;
  
  for (let i = 1n; i <= n; i++) {
      if (i === l) {  // 若 i 为 2 的倍数，那么移位数 + 1
          p++;
          l *= 2n;
      }
      sum <<= p;  // 累加的和每次移 p 位，然后再加上当前值
      sum += i;

      if (sum >= mod) {
          sum %= mod;
      }
  }
  
  return sum;
};
