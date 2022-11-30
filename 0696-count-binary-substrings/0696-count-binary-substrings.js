/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    const groups = [1];
    for (let i = 1; i < s.length; i ++) {
        if (s[i] !== s[i -1]) {
            groups.push(1);
        } else {
            groups[groups.length - 1] ++;
        }
    }
    let answer = 0;
    for (let i = 1; i < groups.length; i ++) {
        answer += Math.min(groups[i - 1], groups[i]);
    }
    return answer;
};