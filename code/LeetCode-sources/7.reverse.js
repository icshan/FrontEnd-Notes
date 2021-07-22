/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
  let flag = x < 0 ? -1 : 1;
  let y = Math.abs(x);
  let ans = 0;
   while(y){
     const low = y % 10;
     y = Math.floor(y / 10);
     ans = ans * 10 + low;
   }

   ans = ans * flag;

   return ans <-(2 ** 31) || ans > 2 ** 31 - 1 ? 0 : ans;
};