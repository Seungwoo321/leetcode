/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    return s.substr(0, s.length / 2).replaceAll(/[^aeiouAEIOU]/g, '').length === s.substr(s.length / 2, s.length / 2).replaceAll(/[^aeiouAEIOU]/g, '').length;
};