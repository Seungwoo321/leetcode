/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {    
    return [...columnTitle].reduce((acc, cur, i) => {
        return acc + (cur.charCodeAt() - 65 + 1) * 26 ** (columnTitle.length - 1 - i);
    }, 0);
};