/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a, b) => b - a);
    let perimeter = 0;
    for (let i = 2; i < nums.length; i ++) {
        if (nums[i] + nums[i - 1] > nums[i - 2]) {
            perimeter = Math.max(nums[i] + nums[i - 1] + nums[i - 2], perimeter);
        }
    }
    return perimeter;
};