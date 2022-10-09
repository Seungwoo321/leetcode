/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const str = s.replace(/[^A-Za-z0-9]/g, '').toLocaleLowerCase();
    const len = parseInt(str.length / 2);
    return Array.prototype.every.call(str.substring(0, len), (v, i) => {
        return v === str[str.length - 1 - i];
    })
};