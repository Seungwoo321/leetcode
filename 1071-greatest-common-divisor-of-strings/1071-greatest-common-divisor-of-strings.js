/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2, i = str1.length) {
    if (str1 === str2) return str1
    if (str1[0] !== str2[0] || i === 1) return '';
    const x = str1.substring(0, i - 1);
    const n1 = str1.length / x.length;
    const n2 = str2.length / x.length;
    if (x.repeat(n1) === str1 && x.repeat(n2) === str2) return x;
    return gcdOfStrings(str1, str2, i - 1);
};