/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const counts = new Array(100).fill(0)
    nums.forEach(n => counts[n]++);
    counts.forEach((_, i) => counts[i] += (counts[i - 1] || 0));
    return nums.map((n, i) => counts[n - 1] || 0);
};