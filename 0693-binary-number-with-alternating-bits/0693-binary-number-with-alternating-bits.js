/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    let m = (n >> 1) + n;
    return (m & m + 1) === 0;
};