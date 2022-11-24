/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    for (let i = 1; i < nums.length; i ++) {
        nums[i] = nums[i] + nums[i - 1];
    }
    for (let pivot = 0; pivot < nums.length; pivot ++) {   
        if ((nums[pivot - 1] || 0) === nums[nums.length - 1] - nums[pivot]) {
            return pivot
        }
    }
    return -1;
};