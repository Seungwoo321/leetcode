/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {    
    return new Array(26).fill(0).reduce((s, _, i) => {
        const key = 26 - i < 10 ? 26 - i + '': 26 - i + '#';
        const char = String.fromCharCode(122 - i);
        return s.replaceAll(key, char);
    }, s);
};