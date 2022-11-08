/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let columns = [];
    while (columnNumber != 0) {
        columnNumber -= 1;
        columns.push(String.fromCharCode((columnNumber % 26) + 65));
        columnNumber = parseInt(columnNumber / 26);

    }
    return columns.reverse().join('');
};