/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
  if(n<=3) return true;
  return !(n % 4 === 0);
};


/**
 * @param {number} n
 * @return {boolean}
 */
//  var canWinNim = function(n) {
//   if(n<=3) return true;
//   let canWin = false,
//       a = true,
//       b = true,
//       c = true;
  
//   for(let i = 4; i <= n; i++){
//       canWin = !a || !b || !c;
//       a = b;
//       b = c;
//       c = canWin;
//   }
//   return canWin
// };