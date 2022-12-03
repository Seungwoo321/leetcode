/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    return [...s].map(c => {
        if (c.charCodeAt() >= 65 && c.charCodeAt() <= 90) {
            return String.fromCharCode((c.charCodeAt() % 32) + 96);   
        } else {
            return c;
        }
    }).join('');
};