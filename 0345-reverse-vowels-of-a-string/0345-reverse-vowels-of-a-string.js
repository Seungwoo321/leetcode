/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'O', 'I', 'O', 'U'];
    let p1 = 0;
    let p2 = s.length - 1;
    let tmp = '';
    let str = [...s];
    while (p1 < p2) {
        if (!tmp) {
            if (vowels.includes(s[p1])) {
                tmp = s[p1];
            } else {
                p1++;                
            }

        } else {
            if (vowels.includes(s[p2])) {
                str[p1] = s[p2];
                str[p2] = tmp;
                tmp = '';
                p1 ++;
                p2 --;
            } else {
                p2 --;
            }
        }
    }
    return str.join('');
};