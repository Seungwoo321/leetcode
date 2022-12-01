/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let re = /[^aeiouAEIOU]/g;
    let left = s.substr(0, s.length / 2);
    let right = s.substr(s.length / 2, s.length / 2);
    return left.replaceAll(re).length === right.replaceAll(re).length;
    
    // return s.substr(0, s.length / 2).replaceAll(/[^aeiouAEIOU]/g, '').length === s.substr(s.length / 2, s.length / 2).replaceAll(/[^aeiouAEIOU]/g, '').length;
};