/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let answer = '';
    let tmp = '';
    const stack = [];
    [...s].forEach(p => {
        tmp += p;
        if (p === '(') {
            stack.unshift(p);
        } else {
            stack.shift();
        }
        if (stack.length === 0) {
            answer += tmp.substring(1, tmp.length - 1)
            tmp = '';
        }  
    })
    return answer;
};