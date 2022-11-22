/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    let sign = num < 0 ? '-' : '';
    num = num * (sign + 1);
    let result = '';
    while (num) {
        result = num % 7 + result;
        num = num / 7 ^ 0;
    }
    return sign + result || '0';
};