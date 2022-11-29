/**
 * @param {string} s
 * @return {boolean}
 */
var reverseString = function (str) {
  return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}
var validPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            let s1 = s.substr(0, left) + s.substr(left + 1);
            let s2 = s.substr(0, right) + s.substr(right + 1);
            return s1 === reverseString(s1) || s2 === reverseString(s2)
        }
        left ++;
        right --;
    }
    return true;
    
};