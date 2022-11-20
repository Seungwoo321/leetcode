/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    const str = s.replaceAll('-', '');
    const sizeOfGroup = str.length % k;
    let key = '';
    for (let i = 0; i < str.length; i ++) {
        key += ((i > 0) && (i % k === sizeOfGroup) ? '-' : '') + str[i];
    }
    return key.toUpperCase();
};