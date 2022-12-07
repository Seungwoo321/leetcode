/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    nums = nums.map((v, i) => [v, i]).sort((a, b) => b[0] - a[0]).slice(0, 2);
    return nums[0][0] >= nums[1][0] * 2 ? nums[0][1] : -1;
};