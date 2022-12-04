/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost, i = 0) {
    const dp = [];
    for (let i = cost.length - 1; i > -1; i --) {
        dp[i] = cost[i] + Math.min(dp[i + 1] || 0, dp[i + 2] || 0);
    }
    return Math.min(dp[0], dp[1]);
};

