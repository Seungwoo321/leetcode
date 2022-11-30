/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    const bit = n.toString(2);
    let answer = true;
    let m = bit[0];
    for (let i = 1; i < bit.length; i ++) {
        if (!(bit[i] ^ m)) {
            return false;
        }
        m = bit[i];
    }
    return answer;
};