/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    return ((new Date(date) - new Date(date.substring(0,4))) + 86400000) / 86400000;
};