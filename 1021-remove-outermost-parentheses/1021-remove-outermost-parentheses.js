/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let answer = '';
    let opend = 0;
    [...s].forEach(p => {
        if (p === '(' && opend++ > 0) {
            answer += p;
        }
        if (p === ')' && --opend > 0) {
             answer += p;
        }
    })
    return answer;
};