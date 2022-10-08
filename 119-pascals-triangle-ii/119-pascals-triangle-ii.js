/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const triangle = [[1]];
    for (let i = 1; i < rowIndex + 1; i ++) {
        const row = [1];
        const prevRow = triangle[i - 1];
        for (let j = 0; j < i; j ++) {
            row.push(prevRow[j] + (prevRow[j + 1] || 0));
        }
        triangle.push(row);
    }
    return triangle[rowIndex];
};