/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (target > nums[nums.length - 1]) return nums.length
    for (let i = 0; i < nums.length; i ++) {
        const n = nums[i]
        if (n >= target) {
            return i
        }
    }
};