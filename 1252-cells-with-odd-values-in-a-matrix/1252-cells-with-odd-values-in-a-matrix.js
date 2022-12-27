/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(m, n, indices) {
    const matrix = new Array(m).fill(0).map(_ => new Array(n).fill(0));
    let odd = 0;
    for (let i = 0; i < matrix.length; i ++) {
        for (let j = 0; j < matrix[0].length; j ++) {
            for (let k = 0; k < indices.length; k ++) {
                const [r, c] = indices[k];
                if (i === r) {
                    matrix[r][j] ++;
                }
                if (j === c) {
                    matrix[i][c] ++;
                }
            }
            odd += matrix[i][j] % 2 === 1;
        }        
    }
    return odd;
};