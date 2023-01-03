/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    const rowMin = matrix.map(row => Math.min(...row));
    const colMax = matrix[0].map((_, col) => Math.max(...matrix.map(row => row[col])));    
    return rowMin.filter(min => colMax.includes(min));
};