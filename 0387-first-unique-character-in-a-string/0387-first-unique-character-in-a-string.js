/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    return [...s].findIndex(c => s.indexOf(c) === s.lastIndexOf(c));
};