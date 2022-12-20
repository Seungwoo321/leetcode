/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
    return parseInt( [...n.toString(2)].map(m => m ^ 1).join(''), 2);
};