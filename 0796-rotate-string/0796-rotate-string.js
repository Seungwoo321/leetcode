/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if (s === goal) return true;
    if (s.length !== goal.length) return false;
    s = [...s];
    let i = 0;
    while (i < s.length) {
        s.push(s.shift());
        if (
            s[0] === goal[0] && 
            s[s.length - 1] === goal[goal.length - 1]
        ) {
            if (s.join('') === goal) {
                return true;
            }
        }
        i++;
    }
    return false;
};