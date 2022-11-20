/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    let key = '';
    const str = s.replaceAll('-', '');
    let point = str.length % k;
    for (let i = 0; i < str.length; i ++) {
        if (i > 0 && i % k === point) {
            key += '-';
        } 
        key += str[i];
    }
    return key.toUpperCase();
    
    
};