/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    return (s.indexOf('A') === -1 || (s.indexOf('A') === s.lastIndexOf('A'))) &&
        (s.lastIndexOf('LLL') === -1);
};