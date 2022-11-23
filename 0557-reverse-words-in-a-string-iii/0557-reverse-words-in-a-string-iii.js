/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let answer = '';
    let word = '';
    for (let c of s) {
        if (c === ' ') {
            answer = `${answer ? `${answer} ${word}` : `${word}`}`
            word = '';
        } else {
            word = c + word;
        }
    }
    answer = `${answer ? `${answer} ${word}` : `${word}`}`;
    return answer;
} ;