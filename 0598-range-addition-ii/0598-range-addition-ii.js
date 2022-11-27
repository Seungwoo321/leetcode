/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    if (!ops.length) return m * n;
    // const row = Math.min(...ops.map(m => m[0]));
    // const col = Math.min(...ops.map(m => m[1]));
    // return row * col;
    
    return ops.reduce((acc, cur) => {
        acc.row = Math.min(acc.row, cur[0]);
        acc.col = Math.min(acc.col, cur[1]);
        acc.answer = acc.row * acc.col;
        return acc;
    }, {
        row: Infinity,
        col: Infinity,
        answer: 0
    }).answer;
};