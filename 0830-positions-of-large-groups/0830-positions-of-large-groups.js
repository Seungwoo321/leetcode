/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    const groups = [];
    let start = 0;
    for (let end = 1; end < s.length + 1; end ++) {
        if (s[start] !== s[end]) {
            if (end - start >= 3) {
                groups.push([start, end - 1]);
            }
            start = end;
        }
    }
    return groups;
};