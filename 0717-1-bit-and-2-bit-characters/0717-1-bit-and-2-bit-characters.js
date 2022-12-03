/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    let p = 0;
    while (p < bits.length - 1) {
        if (bits[p] === 1) {
            p += 2;
        } else {
            p += 1;
        }
    }
    console.log(p)
    return bits.length -1 === p;
};