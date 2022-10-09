/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let buyPrice = prices[0];
    let max = 0;
    for (let i = 1; i < prices.length; i ++) {
        let sellPrice = prices[i];
        let profit = sellPrice - buyPrice;
        buyPrice = Math.min(buyPrice, prices[i]);
        max = Math.max(max, profit);
    }
    return max;
};
