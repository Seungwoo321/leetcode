/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    const row = [1];
    for (let i = 1; i < rowIndex + 1; i ++) {
        for (let j = row.length - 1; j > 0; j --) {
            row[j] = row[j - 1] + row[j];
        }
        row.push(1);
    }
    return row;
};