/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    let first = s.indexOf(c);
    let next = first;
    const distance = [];
    for (let i = 0; i < s.length; i ++) {
        if (s[i] === c) {
            first = i;
            next = s.indexOf(c, first + 1);
        }
        distance.push(Math.min(Math.abs(first - i), Math.abs(next - i)));
    }
    return distance;
};