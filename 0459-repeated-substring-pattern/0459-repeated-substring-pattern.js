/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    const ss = s + s;
    const s2 = ss.substring(1, ss.length - 1);
    return s2.includes(s);
};
