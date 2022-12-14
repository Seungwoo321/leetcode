/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let increasing = false;
    let decreasing = false;
 
    for (let i = 1; i < nums.length; i ++) {
        let isIncreasing = nums[i] > nums[i - 1];
        let isDecreasing = nums[i] < nums[i - 1];
        if (!increasing && !decreasing) {
            increasing = isIncreasing;
            decreasing = isDecreasing;
        }
        if (increasing && isDecreasing) {
            return false;
        }
        if (decreasing && isIncreasing) {
            return false;
        }
    }        

    return true;
};