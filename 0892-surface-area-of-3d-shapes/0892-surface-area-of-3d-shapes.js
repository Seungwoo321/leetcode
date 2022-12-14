/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
    let answer = 0;
    for (let i = 0; i < grid.length; i ++) {
        for (let j = 0; j < grid.length; j ++) {
            if (grid[i][j]) answer += grid[i][j] * 4 + 2;
            if (i) answer -= Math.min(grid[i][j], grid[i - 1][j]) * 2;
            if (j) answer -= Math.min(grid[i][j], grid[i][j - 1]) * 2;
        }
    }
    return answer;
};