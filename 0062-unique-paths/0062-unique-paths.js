/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n, memo = {}) {
    if (m < 2 || n < 2) return 1;
    if ((m in memo) && (n in memo[m])) return memo[m][n];
    if (!memo[m]) memo[m] = {}
    memo[m][n] = uniquePaths(m - 1, n, memo) + uniquePaths(m, n - 1, memo);
    return memo[m][n];
};