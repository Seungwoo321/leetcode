/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n, arr = []) {
    if (n === 1) {
        n = n - 1;
        arr.push(0);
    }
    if (n === 0) return arr;
    arr.push(- arr.length - 1, arr.length + 1);
    return sumZero(n - 2, arr);
};