/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    const str = s.replaceAll('-', '').toUpperCase();
    const size = str.length % k;
    let key = str.slice(0, size);
    for (let i = size; i < str.length; i += k) {
        if (key) key += '-'
        key += str.slice(i, i + k);
    }
    return key;
};