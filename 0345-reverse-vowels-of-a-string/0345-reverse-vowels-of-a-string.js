/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = 'aeiouAEIOU';
    let p1 = 0;
    let p2 = s.length - 1;
    s = [...s];
    
    while (p1 < p2) {
        if (!vowels.includes(s[p1])) {
            p1 ++;
        } else if (!vowels.includes(s[p2])) {
            p2 --;
        } else {
            const tmp = s[p1];
            s[p1] = s[p2];
            s[p2] = tmp;
            p1 ++;
            p2 --;            
        }
    }
    return s.join('');
};