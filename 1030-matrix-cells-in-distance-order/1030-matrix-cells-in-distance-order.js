/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function(rows, cols, rCenter, cCenter) {
    const arr = [];
    for (let i = 0; i < rows; i ++) {
        for (let j = 0; j < cols; j ++) {
            arr.push([[i, j], Math.abs(i - rCenter) + Math.abs(j - cCenter)]);
        }
    }
    arr.sort((a, b) => a[1] - b[1])
    return arr.map(n => n[0]);
};