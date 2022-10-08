/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    const result = [[1]];
    for (let i = 1; i < numRows; i ++) {
        let row = [1];
        for (let j = 0; j < i; j++) {
            row.push(result[i - 1][j] + (result[i - 1][j + 1] || 0));
        } 
        result.push(row);
    }
    return result;
};