/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    let key = '';
    let count = 0;
    const str = s.split('-').join('');
    for (let i = str.length - 1; i >= 0; i --) {
        key = str[i] + key;
        count ++;
        if (i > 0 && count === k) {
            key = '-' + key;
            count = 0;
        }
    }
    return key.toUpperCase();
    
    
};