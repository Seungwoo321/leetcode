/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let bit = Math.log2(num) + 1;
    let mask = (1 << bit) - 1;
    return num ^ mask;
};
