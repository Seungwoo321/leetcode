/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let start = 0;
    let answer = '';
    while (start < s.length) {
        answer += [...s.slice(start, start + k)].reverse().join('');
        let next = start + (2 * k)
        answer += s.slice(start + k, next)
        start = next;
    }
    return answer;
    
};