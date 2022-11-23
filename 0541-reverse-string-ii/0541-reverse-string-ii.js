/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let start = 0;
    let answer = '';
    s = [...s]
    while (start < s.length) {
        let next = start + (2 * k);
        answer = [...answer, ...s.slice(start, start + k).reverse(), ...s.slice(start + k, next)]
        start = next;
    }
    return answer.join('');
    
};