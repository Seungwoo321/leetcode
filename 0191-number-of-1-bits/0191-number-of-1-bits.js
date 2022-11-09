/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    return [...n.toString(2).padStart(32, '0')].filter(v => v === '1').length;
};