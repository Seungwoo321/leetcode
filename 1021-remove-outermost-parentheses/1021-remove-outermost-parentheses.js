/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let answer = '';
    let opend = 0;
    const stack = [];
    [...s].forEach(p => {
        if (p === '(') {
            if (opend > 0) {
                answer += p;
            }
            opend ++;
        }
        if (p === ')') {
            opend --; 
            if (opend > 0) {
                answer += p;
            }
        }
    })
    return answer;
};