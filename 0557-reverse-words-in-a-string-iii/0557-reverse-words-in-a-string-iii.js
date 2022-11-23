/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(' ').map(ss => [...ss].reverse().join('')).join(' ');
};