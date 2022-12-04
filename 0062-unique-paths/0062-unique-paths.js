/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const grid = new Array(m).fill(1).map(v => new Array(n).fill(1));
    for (let i = 1; i < m; i ++) {
        for (let j = 1; j < n; j ++) {
            grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
        }
    }
    return grid[m - 1][n - 1];
};