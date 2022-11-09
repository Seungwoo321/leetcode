/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    return BigInt(`0b${n.toString(2).split('').reverse().join('').padEnd(32, 0)}`)

};