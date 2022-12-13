/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    const count = new Map();
    const ss = [...s1.split(' '), ...s2.split(' ')];
    const uncommon = [];
    for (let i = 0; i < ss.length; i ++) {
        count.set(ss[i], (count.get(ss[i]) || 0) + 1);
    }
    for (let key of count) {
        if (key[1] === 1) {
            uncommon.push(key[0]);
        }
    }
    return uncommon;
};