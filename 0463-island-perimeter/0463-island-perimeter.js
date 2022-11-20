/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let perimeter = 0;
    for (let i = 0; i < grid.length; i ++) {
        for (let j = 0; j < grid[i].length; j ++) {
            if (grid[i][j] === 1) {
                if (!(i + 1 in grid) || grid[i + 1][j] === 0) perimeter ++;
                if (!(i - 1 in grid) || grid[i - 1][j] === 0) perimeter ++;
                if (!(j + 1 in grid[i]) || grid[i][j + 1] === 0) perimeter ++;
                if (!(j - 1 in grid[i]) || grid[i][j - 1] === 0) perimeter ++;
            }
        }
    }
    return perimeter;
};