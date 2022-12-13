/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
    let last = -1;
    let ditance = 0;
    let i = 0;
    while (n) {
        if (n & 1) {
            if (last > -1) ditance = Math.max(ditance, i - last);
            last = i;
        }
        n = n >> 1;
        i ++;
    }
    return ditance;
};