/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    const increasing = (nums) => {
        for (let i = 1; i < nums.length; i ++) {
            if (nums[i] < nums[i - 1]) return false;
        }
        return true;
    }
    const decreasing = (nums) => {
        for (let i = 1; i < nums.length; i ++) {
            if (nums[i] > nums[i - 1]) return false;
        }
        return true;
    }
    return increasing(nums) || decreasing(nums);
};