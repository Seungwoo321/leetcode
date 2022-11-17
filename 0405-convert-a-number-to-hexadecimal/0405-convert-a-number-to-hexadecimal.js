/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    if (num == 0) return '0';
    if (num < 0) num += 2 ** 32;
    let code = '0123456789abcdef';
    let answer = '';
    while (num > 0) {
        let digit = num % 16;
        answer = code[digit] + answer;
        num = parseInt(num / 16);
    }
    return answer;
};