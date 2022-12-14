/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let store = 0;
    for (let i = 1; i < nums.length; i ++) {
        let tmp = nums[i] > nums[i - 1] ? 1 : (nums[i] < nums[i - 1] ? -1 : 0)
        if (tmp !== 0) {
            if (tmp !== store && store !== 0) {
                return false;
            }
            store = tmp;
        }
    }
    return true;
    
};