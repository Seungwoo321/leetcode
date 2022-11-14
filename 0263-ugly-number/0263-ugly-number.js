/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if (n <= 0) return false;
    // for (let num of [2, 3, 5]) {
    //     while (n % num === 0) {
    //         n = n / num;
    //     }
    // }
    while (n > 1) {
        if (n % 2 === 0) {
            n = n / 2;
        } else if (n % 3 === 0) {
            n = n / 3;
        } else if (n % 5 === 0) {
            n = n / 5;
        } else {
            return false;
        }
    }
    return n === 1;
};