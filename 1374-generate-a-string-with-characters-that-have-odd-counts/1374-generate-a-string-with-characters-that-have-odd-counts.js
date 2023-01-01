/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    let s = '';
    if (n % 2 === 0) {
        s += 'b';
        n --;
    }
    while (n > 0) {
        s += 'a';
        n --;
    }
    return s;
};