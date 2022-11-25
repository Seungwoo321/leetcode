/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    let m = mat.length;
    let n = mat[0].length;
    if (m * n !== r * c) return mat;
    let arr = new Array(r).fill(0).map(row => new Array(c).fill(0));
    
    for (let i = 0; i < r * c; i ++) {
        arr[parseInt(i / c)][i % c] = mat[parseInt(i / n)][i % n];
    }
    return arr;
};