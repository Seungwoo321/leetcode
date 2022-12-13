/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
    let answer = 0;
    for (let i = 0; i < grid.length; i ++) {
        let x = 0;
        let y = 0;
        for (let j = 0; j < grid.length; j ++) {
            x = Math.max(x, grid[i][j]);
            y = Math.max(y, grid[j][i]);
            if (grid[i][j]) answer ++;
        }
        answer += x + y;
    }
    return answer;
};