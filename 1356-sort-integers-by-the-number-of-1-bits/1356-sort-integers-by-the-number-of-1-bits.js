/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    return arr.sort((a, b) => {
        const a1 = [...a.toString(2)].filter(v => v === '1').length;
        const b1 = [...b.toString(2)].filter(v => v === '1').length;
        return a1 - b1 || a - b;
    });
};