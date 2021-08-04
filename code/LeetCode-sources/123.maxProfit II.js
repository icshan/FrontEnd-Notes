/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxProfit = 0;    // 收益
  for (let i = 1; i < prices.length; i++) {
    const diff = prices[i] - prices[i - 1]; // 今天和昨天的差价
    if (diff > 0) {			   // 差价大于0
      maxProfit += diff;			   // 今天卖掉，赚了今天和昨天的差价
    }
  }
  return maxProfit;
};
