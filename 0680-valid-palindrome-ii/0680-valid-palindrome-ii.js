/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            let s1 = s.slice(left + 1, right + 1);
            let s2 = s.slice(left, right);
            return s1 === [...s1].reverse().join('') || s2 === [...s2].reverse().join('');
        }
        left ++;
        right --;
    }
    return true;
    
};