/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    nums.sort((a, b) => a % 2 === 1 ? 1 : -1);
    return nums;
};