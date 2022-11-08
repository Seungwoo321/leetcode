/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let column = '';
    while (columnNumber != 0) {
        columnNumber -= 1;
        column = String.fromCharCode((columnNumber % 26) + 65) + column;
        columnNumber = parseInt(columnNumber / 26);

    }
    return column;
};