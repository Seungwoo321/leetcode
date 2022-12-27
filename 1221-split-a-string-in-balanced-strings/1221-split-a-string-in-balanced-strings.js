/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let count = 1;
    let char = s[0];
    let split = 0;
    for (let i = 1; i < s.length; i ++) {
        char === s[i] ? count ++ : count --;
        if (count === 0) split++;
    }
    return split;
};