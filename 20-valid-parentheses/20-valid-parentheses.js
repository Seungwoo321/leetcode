/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 === 1) {
        return false
    }
    const brackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    let arr = []
    for (let c of s) {
        if (brackets[c]) {
            arr.push(brackets[c])
        } else if (arr.pop() !== c) {
            return false
        }
    }
    return !arr.length
};