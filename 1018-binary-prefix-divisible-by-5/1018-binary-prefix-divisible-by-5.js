/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
    const arr = [];
    let n = 0;
    for (let i = 0; i < nums.length; i ++) {
        n = (n * 2 + nums[i]) % 5;
        arr.push(n === 0)
    }
    return arr;
};