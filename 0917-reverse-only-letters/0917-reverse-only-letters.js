/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let p1 = 0;
    let p2 = s.length - 1;
    s = [...s]
    const isAlpha = c => (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');  
    while (p1 < p2) {
        if (isAlpha(s[p1]) && isAlpha(s[p2])) {
            [s[p1], s[p2]] = [s[p2], s[p1]];
            p1 ++;
            p2 --;
        }
        if (!isAlpha(s[p1])) p1 ++;
        if (!isAlpha(s[p2])) p2 --;
    }
    return s.join('');
};