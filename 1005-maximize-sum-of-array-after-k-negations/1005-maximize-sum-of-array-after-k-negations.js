/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
    let i = 0;
    while (i < k) {
        nums.sort((a, b) => a - b);
        nums[0] = -nums[0];
        i ++;
    }
    return nums.reduce((acc, cur) => acc + cur, 0);
};