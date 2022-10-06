/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    return strs[0].split('').reduce((acc, cur, i, arr) => strs.some(c => c[i] !== cur) ? arr.splice(0) && acc : acc += cur, '');

};

