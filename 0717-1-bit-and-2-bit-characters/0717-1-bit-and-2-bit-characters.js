/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    let p = 0;
    while (p < bits.length - 1) {
        if (bits[p] === 1) p ++;
        p ++;
    }
    return bits.length -1 === p;
};