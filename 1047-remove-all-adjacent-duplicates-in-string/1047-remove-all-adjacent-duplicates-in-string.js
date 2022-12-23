/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    const stack = [];
    for (let i = 0; i < s.length; i ++) {
        if (stack[0] === s[i]) {
            stack.shift();
        } else {
            stack.unshift(s[i]);
        }
    }
    return stack.reverse().join('');
};