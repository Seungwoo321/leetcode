/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function(rows, cols, rCenter, cCenter) {
    const arr = [];
    const distance = ([x, y]) => Math.abs(x - rCenter) + Math.abs(y - cCenter);
    for (let i = 0; i < rows; i ++) {
        for (let j = 0; j < cols; j ++) {
            arr.push([i, j]);
        }
    }
    return arr.sort((a, b) => distance(a) - distance(b));
};