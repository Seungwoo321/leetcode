/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    return Math.max.apply(null, nums.join('').split('0').map(arr => arr.length));
};