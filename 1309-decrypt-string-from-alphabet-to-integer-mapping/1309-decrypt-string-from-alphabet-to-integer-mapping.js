/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    new Array(26).fill(0).forEach((_, i) => {
        const key = 26 - i < 10 ? 26 - i + '': 26 - i + '#';
        const char = String.fromCharCode(122 - i);
        s = s.replaceAll(key, char);
    });
    return s;
};