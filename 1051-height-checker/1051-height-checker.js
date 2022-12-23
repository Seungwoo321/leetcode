/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    return [...heights].sort((a, b) => a - b).reduce((acc, cur, i) => acc + (heights[i] !== cur), 0);
};