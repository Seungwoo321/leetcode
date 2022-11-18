/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    if (s.trim() === '') return 0;
    console.log(s.trim().split(/[ ]+/g))
    return s.trim().split(/[ ]+/g).length;
};