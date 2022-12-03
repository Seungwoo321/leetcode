/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    let p = 0;
    let isOneBit = bits.length === 1 && bits[0] === 0;
    while (p < bits.length) {
        if (bits[p] === 1) {
            p += 2;
            isOneBit = false;
        } else {
            p += 1;
            isOneBit = true;
        }
    }
    return isOneBit;
};