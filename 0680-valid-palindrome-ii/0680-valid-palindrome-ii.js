/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            let s1 = s.substr(0, left) + s.substr(left + 1);
            let s2 = s.substr(0, right) + s.substr(right + 1);
            return s1 === s1.split('').reverse().join('') || s2 === s2.split('').reverse().join('');
        }
        left ++;
        right --;
    }
    return true;
    
};