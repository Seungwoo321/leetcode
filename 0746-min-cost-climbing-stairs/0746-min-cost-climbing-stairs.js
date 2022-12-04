/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    let first = cost[0];
    let second = cost[1];
    for (let i = 2; i < cost.length; i += 2) {
        first = cost[i] + Math.min(first, second);
        second = (cost[i + 1] || 0) + Math.min(second, first);
    }
    return Math.min(first, second);
};

