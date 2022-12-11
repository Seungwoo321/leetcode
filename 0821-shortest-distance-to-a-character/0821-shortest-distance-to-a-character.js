/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    let prev = s.indexOf(c);
    let next = prev;
    const distance = [];
    for (let i = 0; i < s.length; i ++) {
        if (s[i] === c) {
            prev = i;
            next = s.indexOf(c, prev + 1);
        }
        distance.push(Math.min(Math.abs(prev - i), Math.abs(next - i)));
    }
    return distance;
};