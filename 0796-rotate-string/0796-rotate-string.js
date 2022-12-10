/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if (s === goal) return true;
    if (s.length !== goal.length) return false;
    let ss = s + s;
    for (let i = 0; i < ss.length; i ++) {
        if (ss[i] === goal[0] && ss[i + goal.length - 1] === goal[goal.length - 1] ) {
            if (ss.substr(i, goal.length) === goal) {
                return true;
            }
        }
    }
    return false;
};