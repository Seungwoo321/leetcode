/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let answer = '';
    let opend = 0;
    for (let i = 0; i < s.length; i ++) {
        if (s[i] === '(' && opend++ > 0) {
            answer += s[i];
        }
        if (s[i] === ')' && --opend > 0) {
             answer += s[i];
        }
    }
    return answer;
};