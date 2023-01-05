/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
    const total = nums.sort((a, b) => b - a).reduce((s, n) => s + n, 0);
    const arr = [];
    let sum = 0;
    for (let i = 0; i < nums.length; i ++) {
        if (sum > total - sum) break;
        sum += nums[i];
        arr.push(nums[i]);
       
    }
    return arr;
};