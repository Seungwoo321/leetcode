/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    const groups = [];
    let start = 0;
    for (let i = 1; i < s.length + 1; i ++) {
        if (s[start] !== s[i]) {
            let end = i - 1;
            if (end - start >= 2) {
                groups.push([start, end]);
            }
            start = i;
        }
    }
    return groups;
};