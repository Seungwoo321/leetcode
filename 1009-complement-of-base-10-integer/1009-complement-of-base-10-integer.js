/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
    return (2 << (Math.log2(Math.max(n, 1)))) - 1 - n;
};