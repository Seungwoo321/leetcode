/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    
    
    const build = (arr) => {
        let answer = ''
        let backspace = 0;
        let i = arr.length - 1;
        while (i > -1) {
            if (arr[i] === '#') {
                backspace ++;
            } else if (backspace) {
                backspace --;
            } else {
                answer += arr[i]
            } 
            i--;
        }
        return answer;
    }
    return build(s) === build(t);
};