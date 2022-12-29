/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let arr = [];
    for (let i = 0; i < nums.length; i += 2) {
        arr = [...arr, ...new Array(nums[i]).fill(nums[i + 1])];
    }
    return arr;
};