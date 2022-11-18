/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // return (haystack === needle || haystack.repeat(2).slice(1, -1).includes(needle) ? haystack.indexOf(needle) : -1);
    return haystack.indexOf(needle);
};