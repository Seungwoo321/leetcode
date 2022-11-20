/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    const bfs = (y, x, visted) => {
        if (visted[`${y},${x}`]) {
            return 0;
        }
        if (!(y in grid) || !(x in grid[0]) || grid[y][x] === 0) {
            return 1;
        }
        visted[`${y},${x}`] = true
        return (bfs(y + 1, x, visted) 
                + bfs(y - 1, x, visted)
                + bfs(y, x + 1, visted)
                + bfs(y, x - 1, visted));
    }
    for (let i = 0; i < grid.length; i ++) {
        for (let j = 0; j < grid[i].length; j ++) {
            if (grid[i][j] === 1) {
                return bfs(i, j, {});
            }
        }
    }
};