/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    const mapping = new Array(26).fill(0).reduce((acc, cur, i) => acc.set(i < 9 ? i + 1 + '': i + 1 + '#', String.fromCharCode(97 + i)), new Map())
    let key = ''
    let str = ''
    let i = 0;
    while (i < s.length) {
        if (s[i + 2] === '#') {
            key += s[i] + s[i + 1] + s[i + 2];
            i += 2;
        } else {
            key += s[i];
        }
        str += mapping.get(key);
        key = ''
        i ++;
        
    }
    return str;
};