/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let answer = '';
    let word = '';
    for (let c of s) {
        if (c === ' ') {
            answer += word + c;
            word = '';
        } else {
            word = c + word;
        }
    }
    return answer + word;
} ;