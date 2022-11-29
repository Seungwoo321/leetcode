/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let current = 1;
    let previous = 0;
    for (let i = 1; i < nums.length; i ++) {
        if (nums[i] > nums[i - 1]) {
            current ++;
        } else {
            previous = Math.max(previous, current)
            current = 1;
        }
    }
    return Math.max(previous, current);
};