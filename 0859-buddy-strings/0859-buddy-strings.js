/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    if (s.length !== goal.length) return false;
    let diff = []
    for (let i = 0; i < s.length; i ++) {
        if (s[i] !== goal[i]) {
           diff.push(i);
        }
    }
    if (diff.length === 0) {
        return new Set(s).size !== s.length;
    }
    if (diff.length === 2) {
        return s[diff[0]] === goal[diff[1]] && s[diff[1]] === goal[diff[0]];
    }
    return false;
};