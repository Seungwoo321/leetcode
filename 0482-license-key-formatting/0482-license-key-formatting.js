/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    let key = '';
    const str = s.replaceAll('-', '');
    let sizeOfGroup = str.length % k;
    for (let i = 0; i < str.length; i ++) {
        if (i > 0 && i % k === sizeOfGroup) {
            key += '-';
        } 
        key += str[i];
    }
    return key.toUpperCase();
    
    
};