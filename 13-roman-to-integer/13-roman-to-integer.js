/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanToNum = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    return s.split('').reduce((acc, cur, i) => romanToNum[cur] < romanToNum[s[i + 1]] ? acc -= romanToNum[cur] : acc += romanToNum[cur], 0);
};