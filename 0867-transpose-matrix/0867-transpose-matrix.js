/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    const newMatrix = new Array(n).fill(0).map(v => new Array(m).fill(0));

    for (let i = 0; i < m; i ++) {
        for (let j = 0; j < n; j ++) {
            newMatrix[j][i] = matrix[i][j];
        }
    }
    
    return newMatrix;
};