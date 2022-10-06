/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let n = x / 2;
    let i = 1;
    while (n - i > -1) {
        n = n - i;
        i ++;
    }
    return i * i > x ? i - 1 : i;
};