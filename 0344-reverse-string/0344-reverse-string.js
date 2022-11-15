/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let p1 = 0;
    let p2 = s.length - 1;
    while (p1 < p2) {
        const tmp = s[p1];
        s[p1] = s[p2];
        s[p2] = tmp;
        p1 ++;
        p2 --;
    }
};