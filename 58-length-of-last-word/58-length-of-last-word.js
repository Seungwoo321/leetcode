/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.split(/ +/g).filter(s => s);
    return s[s.length - 1].length;
};