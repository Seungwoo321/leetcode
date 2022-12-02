/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const visted = {};
    const dfs = (grid, row, col) => {
        if (!visted[row]) visted[row] = {}
        if (visted[row][col]) return visted[row][col];
        if (!(row in grid) || !(col in grid[0])) {
            return true;
        }
        visted[row][col] = true;
        if (grid[row][col] === '1') {
            return dfs(grid, row + 1, col) &&
                dfs(grid, row - 1, col) &&
                dfs(grid, row, col - 1) &&
                dfs(grid, row, col + 1);
        } else {
            return visted[row][col];
        }
    }
    let lands = 0;
    for (let i = 0; i < grid.length; i ++) {
        for (let j = 0; j < grid[i].length;j ++) {
            if (!visted[i]) visted[i] = {};
            if (!visted[i][j] && grid[i][j] === '1') {
                dfs(grid, i, j);
                lands++;
            }
        }
    }
    return lands;
};