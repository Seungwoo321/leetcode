/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a, b) => b - a);
    let perimeter = 0;
    for (let i = 2; i < nums.length; i ++) {
        const a = nums[i - 2];
        const b = nums[i - 1];
        const c = nums[i];
        if (a + b > c && a + c > b && b + c > a) {
            perimeter = Math.max(a + b + c, perimeter);
        }
    }
    return perimeter;
};