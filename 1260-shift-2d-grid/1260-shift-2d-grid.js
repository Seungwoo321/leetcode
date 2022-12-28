/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    let m = grid.length;
    let n = grid[0].length;
    const vector = new Array(m * n).fill(0)
    for (let i = 0; i < m; i ++) {
        for (let j = 0; j < n; j ++) {
            vector[((i * n) + j + k) % vector.length] = grid[i][j];
        }
    }
    for (let l = 0; l < vector.length; l ++) {
        grid[Math.floor(l / n)][l % n] = vector[l];
    }
    return grid;
};