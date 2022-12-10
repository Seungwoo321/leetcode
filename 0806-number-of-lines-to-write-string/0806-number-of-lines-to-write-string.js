/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
    let pixels = 0;
    let line = 1;
    for (let i = 0; i < s.length; i ++) {
        pixels += widths[(s[i].charCodeAt() - 97) % 26];
        if (pixels > 100) {
            pixels = widths[(s[i].charCodeAt() - 97) % 26];
            line ++;
        }
    }
    return [line, pixels];
};