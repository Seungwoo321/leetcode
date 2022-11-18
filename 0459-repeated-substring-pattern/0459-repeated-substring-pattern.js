/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    const ss = s + s;
    const ss2 = ss.substring(1, ss.length - 1);
    return ss2.includes(s);
};
