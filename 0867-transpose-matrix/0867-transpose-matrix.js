/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    const arr = [];
    
    for (let i = 0; i < matrix.length; i ++) {
        for (let j = 0; j < matrix[0].length; j ++) {
            arr[j] = arr[j] || []
            arr[j][i] = matrix[i][j];
        }
    }
    
    return arr;
};