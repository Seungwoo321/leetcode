/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    if (!ops.length) return m * n;
    
    return ops.reduce((acc, cur) => {
        const row = Math.min(acc.row, cur[0]);
        const col = Math.min(acc.col, cur[1]);
        return {
            row,
            col,
            answer: row * col
        };
    }, {
        row: Infinity,
        col: Infinity,
        answer: 0
    }).answer;
};