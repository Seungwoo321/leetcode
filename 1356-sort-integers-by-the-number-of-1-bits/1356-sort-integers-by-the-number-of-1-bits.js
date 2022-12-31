/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    return arr.map(n => [n, [...n.toString(2)].filter(v => v === '1').length]).sort((a, b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]).map(n => n[0]);
};