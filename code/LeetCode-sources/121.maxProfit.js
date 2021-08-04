/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if(prices.length === 0) return 0;

  let maxProfit = 0,
      currMin = prices[0];

  for(let i = 0; i < prices.length; i++){
    currMin = Math.min(currMin, prices[i]);
    maxProfit = Math.max(prices[i]-currMin, maxProfit)
  }
  return maxProfit
};

