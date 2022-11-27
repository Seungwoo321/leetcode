/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    if (!ops.length) return m * n;
    const row = Math.min(...ops.map(m => m[0]));
    const col = Math.min(...ops.map(m => m[1]));
    return row * col;
};