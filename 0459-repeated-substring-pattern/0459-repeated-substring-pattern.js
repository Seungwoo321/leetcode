/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    return s.repeat(2).substring(1, s.length + s.length - 1).includes(s)
};
