/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let memo = [1, 1]
    for (let i = 2; i <= n; i ++) {
        memo[i] = memo[i - 2] + memo[i - 1];
    }
    return memo[n];
};