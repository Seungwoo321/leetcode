/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    s = s.replaceAll('-', '').split('');
    
    for (let i = s.length - k; i > 0; i -= k) {
        s[i] = `-${s[i]}`;
    }

    return s.join('').toUpperCase();
};