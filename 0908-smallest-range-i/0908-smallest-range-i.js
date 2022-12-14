/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
    let max = Math.max(...nums);
    let min = Math.min(...nums);
    return max - min > 2 * k ? max - min - (2 * k) : 0;
};