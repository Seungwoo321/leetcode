/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let re = /[^aeiouAEIOU]/g;
    let len = s.length / 2;
    let left = s.slice(0, len);
    let right = s.slice(len);
    return left.replaceAll(re).length === right.replaceAll(re).length;
    
    // return s.substr(0, s.length / 2).replaceAll(/[^aeiouAEIOU]/g, '').length === s.substr(s.length / 2, s.length / 2).replaceAll(/[^aeiouAEIOU]/g, '').length;
};