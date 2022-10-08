/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    const triangle = [[1]];
    for (let i = 1; i < numRows; i++) {
        let row = [1];
        let prevRow = triangle[i - 1]
        for (let j = 1; j < i; j++) {
            row.push(prevRow[j] + (prevRow[j - 1]));
        }
        row.push(1);
        triangle.push(row);
    }
    return triangle;
};