/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let start = 0;
    let reverseStr = [...s]
    let answer = '';
    while (start < s.length) {
        answer += reverseStr.slice(start, start + k).reverse().join('');
        let next = start + (2 * k)
        answer += s.slice(start + k, next);
        start = next;
    }
    return answer;
    
};