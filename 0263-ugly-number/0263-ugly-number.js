/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if (n <= 0) return false;
    for (let num of [2, 3, 5]) {
        while (n % num === 0) {
            n = n / num;
        }
    }
    return n === 1;
};