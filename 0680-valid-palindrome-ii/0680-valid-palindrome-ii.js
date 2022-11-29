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
            if (s1 === [...s1].reverse().join('')) {
                return true;
            }
            let s2 = s.substr(0, right) + s.substr(right + 1);
            if (s2 === [...s2].reverse().join('')) {
                return true;
            }
            return false;
        }
        left ++;
        right --;
    }
    return true;
    
};