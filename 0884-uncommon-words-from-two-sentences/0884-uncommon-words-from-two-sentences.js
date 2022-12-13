/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    return [...s1.split(' '), ...s2.split(' ')].filter((s, i, arr) => arr.indexOf(s) === arr.lastIndexOf(s));
};