/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const ss = s.split(' ');
    if (pattern.length !== ss.length) return false;
    const patternTable = {};
    const sTable = {};
    for (let i = 0; i < ss.length; i ++) {
        if (!patternTable[ss[i]]) {
            patternTable[ss[i]] = pattern[i];
        }
        if (!sTable[pattern[i]]) {
            sTable[pattern[i]] = ss[i];
        }
        if (patternTable[ss[i]] !== pattern[i] || sTable[pattern[i]] !== ss[i]) {
            return false;
        }
    }
    return true;
};