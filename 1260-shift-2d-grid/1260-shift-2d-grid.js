/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    let m = grid.length;
    let n = grid[0].length;
    let vector = new Array(m).fill(0).map(v => new Array(n).fill(0))
    for (let i = 0; i < m; i ++) {
        for (let j = 0; j < n; j ++) {
            let x = Math.floor(i + (j + k) / n) % m;
            let y = (j + k) % n;
            vector[x][y] = grid[i][j];
        }
    }
    return vector;
};