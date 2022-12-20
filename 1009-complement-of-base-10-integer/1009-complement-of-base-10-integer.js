/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
    if (n === 0) return 1;
    let bit = Math.log2(n) + 1;
    let mask = (1 << bit) - 1;
    return n ^ mask;
};