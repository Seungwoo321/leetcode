/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const str = s.replace(/[^A-Za-z0-9]/g, '').toLocaleLowerCase();
    return str === str.split('').reverse().join('');
};