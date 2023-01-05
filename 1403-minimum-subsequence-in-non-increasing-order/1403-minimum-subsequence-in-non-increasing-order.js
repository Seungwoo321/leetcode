/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
    nums.sort((a, b) => b - a);
    const total = nums.reduce((s, n) => s + n, 0);
    const arr = [];
    let sum = 0;
    for (let i = 0; i < nums.length; i ++) {
        if (sum <= total - sum) {
            sum += nums[i];
            arr.push(nums[i]);
        }
    }
    return arr;
};