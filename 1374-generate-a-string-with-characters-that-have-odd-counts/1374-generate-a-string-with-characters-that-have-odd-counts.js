/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    return n % 2 === 0 ? 'b' + 'a'.repeat(n - 1) : 'a'.repeat(n);
};