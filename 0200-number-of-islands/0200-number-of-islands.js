/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const dfs = (grid, row, col) => {
        if (!(row in grid) || !(col in grid[0]) || grid[row][col] === '0') {
            return 1;
        }
        grid[row][col] = '0';
        return dfs(grid, row + 1, col)
            && dfs(grid, row - 1, col)
            && dfs(grid, row, col - 1)
            && dfs(grid, row, col + 1);
    }
    let lands = 0;
    for (let i = 0; i < grid.length; i ++) {
        for (let j = 0; j < grid[i].length;j ++) {
            if (grid[i][j] === '1') {
                lands += dfs(grid, i, j);
            }
        }
    }
    return lands;
};