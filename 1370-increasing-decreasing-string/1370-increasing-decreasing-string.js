/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    const counts = new Array(26).fill(0);
    for (let i = 0; i < s.length; i ++) {
        counts[s.charCodeAt(i) - 97]++;
    }
    let res = ''
    while (res.length < s.length) {
        let left = '';
        let right = '';
        for (let i = 0; i < counts.length; i ++) {
            if (counts[i] > 0) {
                left = left + String.fromCharCode(i + 97);
                counts[i]--;
            }
            if (counts[i]) {
                right =  String.fromCharCode(i + 97) + right;
                counts[i]--;
            }
        }
        res += left + right;
    }
    return res;
};