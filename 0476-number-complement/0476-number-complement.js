/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    if (num === 0) return 1;
    let bits = Math.log2(num) + 1;
    let mask = (1 << bits) - 1;
    return num ^ mask;
};