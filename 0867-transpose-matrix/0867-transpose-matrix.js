/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    const newMatrix = new Array(matrix[0].length).fill(0).map(v => new Array(matrix.length).fill(0));

    for (let i = 0; i < matrix.length; i ++) {
        for (let j = 0; j < matrix[0].length; j ++) {
            newMatrix[j][i] = matrix[i][j];
        }
    }
    
    return newMatrix;
};