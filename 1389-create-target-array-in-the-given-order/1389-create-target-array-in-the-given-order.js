/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let target = new Array(nums.length).fill(0);
    for (let i = 0; i < nums.length; i ++) {
        target = [...target.slice(0, index[i]), nums[i], ...target.slice(index[i])]
    }
    return target.slice(0, nums.length);
    
};