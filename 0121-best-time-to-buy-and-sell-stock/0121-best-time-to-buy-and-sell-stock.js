/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = prices[0];
    let profit = 0;
    for (let i = 1; i < prices.length; i ++ ) {
        const sell = prices[i];
        buy = Math.min(buy, sell);
        profit = Math.max(sell - buy, profit);
    }
    return  profit;
};