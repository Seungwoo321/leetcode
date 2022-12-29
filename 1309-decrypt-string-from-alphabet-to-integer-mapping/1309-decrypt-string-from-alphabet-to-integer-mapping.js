/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {    
    return new Array(26).fill(0).reduce((s, _, i) => s.replaceAll(26 - i < 10 ? 26 - i + '': 26 - i + '#', String.fromCharCode(122 - i)), s);
};