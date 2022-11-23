/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let start = 0;
    let answer = '';
    while (start < s.length) {
        let next = start + (2 * k);
        answer += [...s.substr(start, k)].reverse().join('') + s.substr(start + k, k);
        start = next;
    }
    return answer;
};