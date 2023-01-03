/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    const rowMin = matrix.map(row => Math.min(...row));
    const colMax = new Array(matrix[0].length).fill(0)
        .map((_, i) => Math.max.apply(null, matrix.map((__, j, arr) => arr[j][i])));    
    return rowMin.filter(min => colMax.includes(min));
};